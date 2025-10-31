import uuid
import enum
from sqlalchemy import Column, DECIMAL, String, Enum, TIMESTAMP, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from app.db import Base


class PaymentMethod(str, enum.Enum):
    card = "card"
    upi = "upi"
    wallet = "wallet"


class PaymentStatus(str, enum.Enum):
    pending = "pending"
    success = "success"
    failed = "failed"


class PaymentType(str, enum.Enum):
    subscription = "subscription"
    refund = "refund"
    listing_fee = "listing_fee"


class Payment(Base):
    __tablename__ = "payments"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    amount = Column(DECIMAL(10, 2), nullable=False)
    currency = Column(String(10), default="INR")
    payment_method = Column(Enum(PaymentMethod))
    status = Column(Enum(PaymentStatus), default=PaymentStatus.pending)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())
    type = Column(Enum(PaymentType))
