import uuid
import enum
from sqlalchemy import Column, ForeignKey, Enum, String, TIMESTAMP
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db import Base


class TuitionMode(str, enum.Enum):
    home = "home"
    online = "online"


class TuitionStatus(str, enum.Enum):
    open = "open"
    demo_scheduled = "demo_scheduled"
    confirmed = "confirmed"
    closed = "closed"


class TuitionRequest(Base):
    __tablename__ = "tuition_needs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    student_id = Column(UUID(as_uuid=True), ForeignKey("students.id", ondelete="CASCADE"))
    city_id = Column(UUID(as_uuid=True), ForeignKey("cities.id"))
    subject_id = Column(UUID(as_uuid=True), ForeignKey("subjects.id"))
    grade_id = Column(UUID(as_uuid=True), ForeignKey("grades.id"))
    tuition_mode = Column(Enum(TuitionMode), nullable=False)
    description = Column(String)
    posted_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    status = Column(Enum(TuitionStatus), default=TuitionStatus.open)

    student = relationship("Student", backref="tuition_needs")
    city = relationship("City")
    subject = relationship("Subject")
    grade = relationship("Grade")
