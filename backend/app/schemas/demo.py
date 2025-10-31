from uuid import UUID
from datetime import datetime
from enum import Enum
from pydantic import BaseModel


class DemoResult(str, Enum):
    passed = "passed"
    failed = "failed"
    pending = "pending"


class DemoBase(BaseModel):
    application_id: UUID
    tutor_id: UUID
    student_id: UUID
    scheduled_at: datetime


class DemoCreate(DemoBase):
    pass


class DemoOut(DemoBase):
    id: UUID
    result_status: DemoResult

    class Config:
        from_attributes = True
