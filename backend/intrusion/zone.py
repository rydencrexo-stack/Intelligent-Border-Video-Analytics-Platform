from typing import Iterable, Sequence

import cv2
import numpy as np


Point = tuple[int, int]


class VirtualFence:
    """
    Represents a polygonal restricted zone in video coordinates.
    """

    def __init__(self, points: Sequence[Point]):
        if len(points) < 3:
            raise ValueError(
                "A virtual fence requires at least 3 points."
            )

        self.points = [
            (int(x), int(y))
            for x, y in points
        ]

    def contains(self, point: Point) -> bool:
        """
        Return True when the supplied point is inside
        or on the boundary of the virtual fence.
        """

        x, y = int(point[0]), int(point[1])

        polygon = np.array(
            self.points,
            dtype=np.int32,
        )

        result = cv2.pointPolygonTest(
            polygon,
            (float(x), float(y)),
            False,
        )

        return result >= 0

    def draw(
        self,
        frame,
        color=(0, 0, 255),
        thickness=2,
    ):
        """
        Draw the virtual fence on a video frame.

        The live video service can choose whether to display
        this overlay. The fence geometry itself remains
        independent from the visual overlay.
        """

        polygon = np.array(
            self.points,
            dtype=np.int32,
        )

        cv2.polylines(
            frame,
            [polygon],
            isClosed=True,
            color=color,
            thickness=thickness,
        )

        return frame

    def check_points(
        self,
        points: Iterable[Point],
    ) -> list[bool]:
        """
        Check multiple points against the virtual fence.
        """

        return [
            self.contains(point)
            for point in points
        ]

    def check_box(
        self,
        box: Sequence[float],
    ) -> bool:
        """
        Check whether the center of a bounding box is
        inside the virtual fence.

        The bounding box format is:

        (x1, y1, x2, y2)
        """

        if len(box) != 4:
            raise ValueError(
                "Bounding box must contain x1, y1, x2, y2."
            )

        x1, y1, x2, y2 = [
            float(value)
            for value in box
        ]

        center_x = int((x1 + x2) / 2)
        center_y = int((y1 + y2) / 2)

        return self.contains(
            (center_x, center_y)
        )

    def check_boxes(
        self,
        boxes: Iterable[Sequence[float]],
    ) -> list[bool]:
        """
        Check multiple bounding boxes against the fence.
        """

        return [
            self.check_box(box)
            for box in boxes
        ]