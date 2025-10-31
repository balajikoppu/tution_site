from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from uuid import UUID
from typing import List
from app.schemas.payment import PaymentCreate, PaymentOut
from app.services.payment_service import create_payment, list_user_payments
from app.api.deps import get_db

router = APIRouter(prefix="/payments", tags=["Payments"])


@router.post("/", response_model=PaymentOut)
def create_payment_api(data: PaymentCreate, db: Session = Depends(get_db)):
    return create_payment(db, data)


@router.get("/user/{user_id}", response_model=List[PaymentOut])
def get_user_payments(user_id: UUID, db: Session = Depends(get_db)):
    return list_user_payments(db, user_id)
