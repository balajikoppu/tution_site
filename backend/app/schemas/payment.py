from uuid import UUID
from datetime import datetime
from decimal import Decimal
from enum import Enum
from pydantic import BaseModel


class PaymentMethod(str, Enum):
    card = "card"
    upi = "upi"
    wallet = "wallet"


class PaymentStatus(str, Enum):
    pending = "pending"
    success = "success"
    failed = "failed"


class PaymentType(str, Enum):
    subscription = "subscription"
    refund = "refund"
    listing_fee = "listing_fee"


class PaymentBase(BaseModel):
    amount: Decimal
    currency: str = "INR"
    payment_method: PaymentMethod
    type: PaymentType


class PaymentCreate(PaymentBase):
    user_id: UUID


class PaymentOut(PaymentBase):
    id: UUID
    status: PaymentStatus
    created_at: datetime

    class Config:
        from_attributes = True
