from sqlalchemy.orm import Session
from app.models.payment import Payment
from app.schemas.payment import PaymentCreate


def create_payment(db: Session, data: PaymentCreate):
    payment = Payment(**data.model_dump())
    db.add(payment)
    db.commit()
    db.refresh(payment)
    return payment


def list_user_payments(db: Session, user_id):
    return db.query(Payment).filter(Payment.user_id == user_id).all()
