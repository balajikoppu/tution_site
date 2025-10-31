import uuid
import enum
from sqlalchemy import Column, ForeignKey, Enum, TIMESTAMP
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.db import Base


class ApplicationStatus(str, enum.Enum):
    pending = "pending"
    accepted = "accepted"
    rejected = "rejected"
    demo_done = "demo_done"
    confirmed = "confirmed"


class Application(Base):
    __tablename__ = "applications"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    tuition_need_id = Column(UUID(as_uuid=True), ForeignKey("tuition_needs.id", ondelete="CASCADE"))
    tutor_id = Column(UUID(as_uuid=True), ForeignKey("tutors.id", ondelete="CASCADE"))
    applied_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    status = Column(Enum(ApplicationStatus), default=ApplicationStatus.pending)

    tutor = relationship("Tutor", backref="applications")
    tuition_need = relationship("TuitionNeed", backref="applications")
