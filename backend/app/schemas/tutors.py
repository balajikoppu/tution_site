from uuid import UUID
from decimal import Decimal
from pydantic import BaseModel
from typing import List
from app.schemas.lookup import SubjectOut, GradeOut, CityOut
from app.schemas.users import UserOut


class TutorBase(BaseModel):
    name: str
    address: str | None = None
    city_id: UUID | None = None
    profile_image: str | None = None
    bio: str | None = None
    experience_years: int | None = 0
    hourly_rate: Decimal | None = None
    premium_flag: bool | None = False


class TutorCreate(TutorBase):
    user_id: UUID
    subject_ids: List[UUID] | None = []
    grade_ids: List[UUID] | None = []


class TutorOut(TutorBase):
    id: UUID
    user: UserOut
    city: CityOut | None = None
    subjects: List[SubjectOut] | None = []
    grades: List[GradeOut] | None = []

    class Config:
        from_attributes = True
