import cv2
from ultralytics import YOLO


MODEL_FILE = "yolo26n.pt"
VIDEO_FILE = "demo_videos/cctv demo footage.mp4"

TARGET_CLASSES = {
    "backpack",
    "handbag",
    "suitcase",
    "laptop",
    "cell phone",
}


model = YOLO(MODEL_FILE)

capture = cv2.VideoCapture(VIDEO_FILE)

if not capture.isOpened():
    raise RuntimeError(
        f"Unable to open video: {VIDEO_FILE}"
    )


counts = {}
first_seen = {}
total_frames = 0


while True:
    success, frame = capture.read()

    if not success:
        break

    total_frames += 1

    results = model.track(
        source=frame,
        persist=True,
        verbose=False,
        conf=0.25,
        imgsz=1280,
    )

    if not results:
        continue

    result = results[0]

    if result.boxes is None or len(result.boxes) == 0:
        continue

    for index in range(len(result.boxes)):
        class_id = int(result.boxes.cls[index].item())
        class_name = result.names.get(
            class_id,
            str(class_id),
        )

        if class_name not in TARGET_CLASSES:
            continue

        counts[class_name] = counts.get(
            class_name,
            0,
        ) + 1

        if class_name not in first_seen:
            tracking_id = None

            if result.boxes.id is not None:
                tracking_id = int(
                    result.boxes.id[index].item()
                )

            first_seen[class_name] = (
                total_frames,
                tracking_id,
            )


capture.release()


print()
print("=" * 50)
print("SMALL OBJECT TRACKING DIAGNOSTIC")
print("=" * 50)
print(f"TOTAL FRAMES: {total_frames}")
print()

print("DETECTION COUNTS:")

for class_name in sorted(TARGET_CLASSES):
    print(
        f"{class_name}: "
        f"{counts.get(class_name, 0)}"
    )

print()
print("FIRST SEEN:")

for class_name in sorted(TARGET_CLASSES):
    if class_name in first_seen:
        frame_number, tracking_id = first_seen[class_name]

        print(
            f"{class_name}: "
            f"frame={frame_number}, "
            f"track_id={tracking_id}"
        )
    else:
        print(
            f"{class_name}: "
            f"not detected"
        )

print("=" * 50)