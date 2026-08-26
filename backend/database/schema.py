from pydantic import BaseModel
from typing import Optional

class CameraCreate(BaseModel):
    name: str
    location: Optional[str] = None

class EventCreate(BaseModel):
    event_type: str
    severity: str = "LOW"
    camera_id: Optional[int] = None
    tracking_id: Optional[str] = None
    confidence: Optional[float] = None
