from uuid import UUID
from datetime import datetime
from enum import Enum
from pydantic import BaseModel
from app.schemas.tutors import TutorOut
from app.schemas.tuition_request import TuitionRequestOut


class ApplicationStatus(str, Enum):
    pending = "pending"
    accepted = "accepted"
    rejected = "rejected"
    demo_done = "demo_done"
    confirmed = "confirmed"


class ApplicationBase(BaseModel):
    tuition_need_id: UUID
    tutor_id: UUID


class ApplicationCreate(ApplicationBase):
    pass


class ApplicationOut(ApplicationBase):
    id: UUID
    applied_at: datetime
    status: ApplicationStatus
    tutor: TutorOut
    tuition_need: TuitionRequestOut

    class Config:
        from_attributes = True
