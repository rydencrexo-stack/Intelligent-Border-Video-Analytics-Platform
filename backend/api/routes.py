from fastapi import APIRouter

from backend.services.video_service import get_video_stream


router = APIRouter()


@router.get("/health")
def health():
    return {"status": "healthy"}


@router.get("/video/demo")
def demo_video():
    return get_video_stream()