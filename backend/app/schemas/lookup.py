from pydantic import BaseModel
from uuid import UUID


class CityBase(BaseModel):
    name: str
    state: str | None = None
    country: str | None = None


class CityOut(CityBase):
    id: UUID

    class Config:
        from_attributes = True


class SubjectBase(BaseModel):
    name: str


class SubjectOut(SubjectBase):
    id: UUID

    class Config:
        from_attributes = True


class GradeBase(BaseModel):
    name: str


class GradeOut(GradeBase):
    id: UUID

    class Config:
        from_attributes = True
