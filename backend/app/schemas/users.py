from datetime import datetime
from enum import Enum
from pydantic import BaseModel, EmailStr, Field
from uuid import UUID


class UserRole(str, Enum):
    student = "student"
    parent = "parent"
    tutor = "tutor"
    admin = "admin"


class UserStatus(str, Enum):
    active = "active"
    inactive = "inactive"
    banned = "banned"


class UserBase(BaseModel):
    email: EmailStr
    role: UserRole


class UserCreate(UserBase):
    password: str = Field(..., min_length=6)


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: UUID
    email: EmailStr
    role: UserRole
    created_at: datetime
    status: UserStatus

    class Config:
        from_attributes = True
