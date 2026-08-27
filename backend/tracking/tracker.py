from pathlib import Path

import cv2
from ultralytics import YOLO

from backend.intrusion.zone import VirtualFence


BASE_DIR = Path(__file__).resolve().parents[2]

MODEL_FILE = BASE_DIR / "yolo26n.pt"
VIDEO_FILE = BASE_DIR / "demo_videos" / "cctv demo footage.mp4"


VIRTUAL_FENCE = VirtualFence(
    [
        (100, 120),
        (860, 120),
        (860, 500),
        (100, 500),
    ]
)


TRACKING_CLASSES = [
    0,  # person
    2,  # car
    3,  # motorcycle
    5,  # bus
    7,  # truck
]


def track_video():
    """
    Run real YOLO tracking on the project's demo CCTV video.

    Each tracked person or vehicle is checked against the
    existing virtual fence using its real bounding box.

    No detections, tracking IDs, or intrusion states are
    generated artificially.
    """

    if not MODEL_FILE.exists():
        raise FileNotFoundError(
            f"YOLO model not found: {MODEL_FILE}"
        )

    if not VIDEO_FILE.exists():
        raise FileNotFoundError(
            f"Demo video not found: {VIDEO_FILE}"
        )

    model = YOLO(str(MODEL_FILE))

    capture = cv2.VideoCapture(str(VIDEO_FILE))

    if not capture.isOpened():
        raise RuntimeError(
            f"Unable to open demo video: {VIDEO_FILE}"
        )

    try:
        while True:
            success, frame = capture.read()

            if not success:
                break

            results = model.track(
                source=frame,
                persist=True,
                verbose=False,
                conf=0.25,
                classes=TRACKING_CLASSES,
                imgsz=640,
            )

            if not results:
                yield frame
                continue

            result = results[0]

            annotated_frame = frame.copy()

            boxes = result.boxes

            if boxes is None or len(boxes) == 0:
                yield annotated_frame
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
                    for value in coordinates[index].tolist()
                )

                tracking_id = None

                if track_ids is not None:
                    tracking_id = int(
                        track_ids[index].item()
                    )

                inside_fence = VIRTUAL_FENCE.check_box(
                    (x1, y1, x2, y2)
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

                    box_color = (0, 0, 255)

                else:
                    box_color = (0, 255, 0)

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

            yield annotated_frame

    finally:
        capture.release()