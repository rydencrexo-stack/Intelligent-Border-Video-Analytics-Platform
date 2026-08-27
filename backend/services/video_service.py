from pathlib import Path
from threading import Lock, Thread
import time

import cv2
from fastapi.responses import StreamingResponse
from ultralytics import YOLO

from backend.intrusion.zone import VirtualFence


BASE_DIR = Path(__file__).resolve().parents[2]

VIDEO_DIR = BASE_DIR / "demo_videos"
VIDEO_FILE = VIDEO_DIR / "cctv demo footage.mp4"

MODEL_FILE = BASE_DIR / "yolo26n.pt"


# Load the real YOLO model once.
model = YOLO(str(MODEL_FILE))


# Real YOLO classes enabled for the surveillance pipeline.
DETECTION_CLASSES = [
    0,   # person
    1,   # bicycle
    2,   # car
    3,   # motorcycle
    5,   # bus
    7,   # truck
    24,  # backpack
    26,  # handbag
    28,  # suitcase
    39,  # bottle
    43,  # knife
    63,  # laptop
    64,  # mouse
    65,  # remote
    66,  # keyboard
    67,  # cell phone
    73,  # book
]


# Run AI processing on every 5th captured frame.
PROCESS_EVERY_N_FRAMES = 10


# Original demo video speed.
TARGET_FPS = 25.0


# Existing virtual fence.
#
# The fence is used for intrusion calculations only.
# It is not drawn over the live CCTV footage.
VIRTUAL_FENCE = VirtualFence(
    [
        (100, 120),
        (860, 120),
        (860, 500),
        (100, 500),
    ]
)


class VideoProcessor:
    """
    Separates CCTV capture from YOLO tracking.

    The capture thread reads the demo CCTV at approximately
    its original frame rate.

    The AI thread independently performs real YOLO tracking
    and virtual-fence checks.

    The streaming generator serves the latest available
    frame without waiting for AI inference.
    """

    def __init__(self):
        self.lock = Lock()

        self.latest_frame = None
        self.latest_ai_frame = None

        self.running = False

        self.capture_thread = None
        self.ai_thread = None

    def start(self):
        """
        Start the background video and AI workers.
        """

        if self.running:
            return

        self.running = True

        self.capture_thread = Thread(
            target=self._capture_loop,
            daemon=True,
        )

        self.ai_thread = Thread(
            target=self._ai_loop,
            daemon=True,
        )

        self.capture_thread.start()
        self.ai_thread.start()

    def stop(self):
        """
        Stop the background workers.
        """

        self.running = False

    def _capture_loop(self):
        """
        Read the demo CCTV video at its original speed.
        """

        if not VIDEO_FILE.exists():
            self.running = False
            return

        capture = cv2.VideoCapture(
            str(VIDEO_FILE)
        )

        if not capture.isOpened():
            self.running = False
            return

        frame_interval = 1.0 / TARGET_FPS
        next_frame_time = time.perf_counter()

        try:
            while self.running:

                current_time = time.perf_counter()

                if current_time < next_frame_time:
                    time.sleep(
                        next_frame_time - current_time
                    )

                success, frame = capture.read()

                if not success:
                    capture.set(
                        cv2.CAP_PROP_POS_FRAMES,
                        0,
                    )

                    next_frame_time = (
                        time.perf_counter()
                        + frame_interval
                    )

                    continue

                with self.lock:
                    self.latest_frame = frame

                next_frame_time += frame_interval

                if (
                    time.perf_counter()
                    > next_frame_time + frame_interval
                ):
                    next_frame_time = (
                        time.perf_counter()
                        + frame_interval
                    )

        finally:
            capture.release()

    def _ai_loop(self):
        """
        Run real YOLO tracking independently from
        the video streaming loop.
        """

        frame_number = 0

        while self.running:

            with self.lock:

                if self.latest_frame is None:
                    frame = None
                else:
                    frame = self.latest_frame.copy()

            if frame is None:
                time.sleep(0.005)
                continue

            frame_number += 1

            if (
                frame_number % PROCESS_EVERY_N_FRAMES
                != 1
            ):
                time.sleep(0.001)
                continue

            try:

                results = model.track(
                    source=frame,
                    persist=True,
                    verbose=False,
                    conf=0.25,
                    classes=DETECTION_CLASSES,
                    imgsz=412,
                )

                if not results:
                    continue

                result = results[0]

                annotated_frame = frame.copy()

                boxes = result.boxes

                if boxes is None or len(boxes) == 0:

                    with self.lock:
                        self.latest_ai_frame = (
                            annotated_frame
                        )

                    continue

                names = result.names

                track_ids = boxes.id
                class_ids = boxes.cls
                confidences = boxes.conf
                coordinates = boxes.xyxy

                for index in range(len(boxes)):

                    class_id = int(
                        class_ids[index].item()
                    )

                    confidence = float(
                        confidences[index].item()
                    )

                    class_name = names.get(
                        class_id,
                        str(class_id),
                    )

                    x1, y1, x2, y2 = (
                        int(value)
                        for value in coordinates[
                            index
                        ].tolist()
                    )

                    tracking_id = None

                    if track_ids is not None:
                        tracking_id = int(
                            track_ids[index].item()
                        )

                    inside_fence = (
                        VIRTUAL_FENCE.check_box(
                            (x1, y1, x2, y2)
                        )
                    )

                    if tracking_id is not None:
                        label = (
                            f"{class_name} "
                            f"ID: {tracking_id} "
                            f"{confidence:.2f}"
                        )
                    else:
                        label = (
                            f"{class_name} "
                            f"{confidence:.2f}"
                        )

                    if inside_fence:
                        label = (
                            f"{label} | INTRUSION"
                        )

                        box_color = (
                            0,
                            0,
                            255,
                        )
                    else:
                        box_color = (
                            0,
                            255,
                            0,
                        )

                    cv2.rectangle(
                        annotated_frame,
                        (x1, y1),
                        (x2, y2),
                        box_color,
                        2,
                    )

                    text_origin = (
                        x1,
                        max(y1 - 8, 15),
                    )

                    cv2.putText(
                        annotated_frame,
                        label,
                        text_origin,
                        cv2.FONT_HERSHEY_SIMPLEX,
                        0.5,
                        box_color,
                        2,
                        cv2.LINE_AA,
                    )

                with self.lock:
                    self.latest_ai_frame = (
                        annotated_frame
                    )

            except Exception:
                time.sleep(0.01)
                continue

    def get_frame(self):
        """
        Return the newest available frame.

        Prefer the latest AI-annotated frame when available.
        Otherwise return the latest raw CCTV frame.
        """

        with self.lock:

            if self.latest_ai_frame is not None:
                return self.latest_ai_frame.copy()

            if self.latest_frame is not None:
                return self.latest_frame.copy()

        return None


PROCESSOR = VideoProcessor()


def generate_video_stream():
    """
    Generate the MJPEG CCTV stream.

    Video capture runs at the original 25 FPS while
    YOLO processing runs independently.
    """

    if not VIDEO_FILE.exists():
        raise FileNotFoundError(
            f"Demo video not found: {VIDEO_FILE}"
        )

    if not MODEL_FILE.exists():
        raise FileNotFoundError(
            f"YOLO model not found: {MODEL_FILE}"
        )

    PROCESSOR.start()

    try:

        while True:

            frame = PROCESSOR.get_frame()

            if frame is None:
                time.sleep(0.005)
                continue

            success, encoded = cv2.imencode(
                ".jpg",
                frame,
                [
                    cv2.IMWRITE_JPEG_QUALITY,
                    80,
                ],
            )

            if not success:
                continue

            frame_bytes = encoded.tobytes()

            yield (
                b"--frame\r\n"
                b"Content-Type: image/jpeg\r\n\r\n"
                + frame_bytes
                + b"\r\n"
            )

    finally:
        PROCESSOR.stop()


def get_video_stream():
    return StreamingResponse(
        generate_video_stream(),
        media_type="multipart/x-mixed-replace; boundary=frame",
    )