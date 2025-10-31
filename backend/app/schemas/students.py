from uuid import UUID
from pydantic import BaseModel
from app.schemas.lookup import CityOut
from app.schemas.users import UserOut


class StudentBase(BaseModel):
    name: str
    address: str | None = None
    city_id: UUID | None = None


class StudentCreate(StudentBase):
    user_id: UUID


class StudentOut(StudentBase):
    id: UUID
    user: UserOut
    city: CityOut | None = None

    class Config:
        from_attributes = True
