from uuid import UUID
from datetime import datetime
from enum import Enum
from pydantic import BaseModel
from app.schemas.lookup import CityOut, SubjectOut, GradeOut
from app.schemas.students import StudentOut


class TuitionMode(str, Enum):
    home = "home"
    online = "online"


class TuitionStatus(str, Enum):
    open = "open"
    demo_scheduled = "demo_scheduled"
    confirmed = "confirmed"
    closed = "closed"


class TuitionRequestBase(BaseModel):
    city_id: UUID
    subject_id: UUID
    grade_id: UUID
    tuition_mode: TuitionMode
    description: str | None = None


class TuitionRequestCreate(TuitionRequestBase):
    student_id: UUID


class TuitionRequestOut(TuitionRequestBase):
    id: UUID
    status: TuitionStatus
    posted_at: datetime
    student: StudentOut
    city: CityOut
    subject: SubjectOut
    grade: GradeOut

    class Config:
        from_attributes = True
