from pathlib import Path

import cv2
from fastapi.responses import StreamingResponse


BASE_DIR = Path(__file__).resolve().parents[2]
VIDEO_DIR = BASE_DIR / "demo_videos"

VIDEO_FILE = VIDEO_DIR / "cctv demo footage.mp4"


def generate_video_stream():
    """
    Read the demo CCTV video frame-by-frame and generate
    an MJPEG stream for the frontend.
    """

    if not VIDEO_FILE.exists():
        raise FileNotFoundError(
            f"Demo video not found: {VIDEO_FILE}"
        )

    capture = cv2.VideoCapture(str(VIDEO_FILE))

    if not capture.isOpened():
        raise RuntimeError(
            f"Unable to open demo video: {VIDEO_FILE}"
        )

    try:
        while True:
            success, frame = capture.read()

            if not success:
                # Restart the demo video when it reaches the end.
                capture.set(cv2.CAP_PROP_POS_FRAMES, 0)
                continue

            success, encoded = cv2.imencode(
                ".jpg",
                frame,
                [cv2.IMWRITE_JPEG_QUALITY, 80],
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
        capture.release()


def get_video_stream():
    return StreamingResponse(
        generate_video_stream(),
        media_type="multipart/x-mixed-replace; boundary=frame",
    )