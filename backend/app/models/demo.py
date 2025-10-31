import uuid
import enum
from sqlalchemy import Column, ForeignKey, Enum, TIMESTAMP
from sqlalchemy.dialects.postgresql import UUID
from app.db import Base


class DemoResult(str, enum.Enum):
    passed = "passed"
    failed = "failed"
    pending = "pending"


class Demo(Base):
    __tablename__ = "demos"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    application_id = Column(UUID(as_uuid=True), ForeignKey("applications.id", ondelete="CASCADE"))
    scheduled_at = Column(TIMESTAMP(timezone=True), nullable=False)
    tutor_id = Column(UUID(as_uuid=True), ForeignKey("tutors.id"))
    student_id = Column(UUID(as_uuid=True), ForeignKey("students.id"))
    result_status = Column(Enum(DemoResult), default=DemoResult.pending)
