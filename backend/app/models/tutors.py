import uuid
import enum
from sqlalchemy import Column, String, ForeignKey, Boolean, DECIMAL, Integer, Enum, Table
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from app.db import Base


class TutorStatus(str, enum.Enum):
    active = "active"
    inactive = "inactive"


# Association Tables (many-to-many)
tutor_subjects = Table(
    "tutor_subjects",
    Base.metadata,
    Column("tutor_id", UUID(as_uuid=True), ForeignKey("tutors.id", ondelete="CASCADE"), primary_key=True),
    Column("subject_id", UUID(as_uuid=True), ForeignKey("subjects.id", ondelete="CASCADE"), primary_key=True),
)

tutor_grades = Table(
    "tutor_grades",
    Base.metadata,
    Column("tutor_id", UUID(as_uuid=True), ForeignKey("tutors.id", ondelete="CASCADE"), primary_key=True),
    Column("grade_id", UUID(as_uuid=True), ForeignKey("grades.id", ondelete="CASCADE"), primary_key=True),
)


class Tutor(Base):
    __tablename__ = "tutors"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    name = Column(String(100), nullable=False)
    address = Column(String)
    city_id = Column(UUID(as_uuid=True), ForeignKey("cities.id"))
    profile_image = Column(String)
    bio = Column(String)
    experience_years = Column(Integer)
    hourly_rate = Column(DECIMAL(10, 2))
    premium_flag = Column(Boolean, default=False)
    status = Column(Enum(TutorStatus), default=TutorStatus.active)

    user = relationship("User", backref="tutor_profile")
    city = relationship("City")
    subjects = relationship("Subject", secondary=tutor_subjects, backref="tutors")
    grades = relationship("Grade", secondary=tutor_grades, backref="tutors")
