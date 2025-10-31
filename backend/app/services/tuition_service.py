from sqlalchemy.orm import Session
from app.models.tuition_request import TuitionRequest
from app.schemas.tuition_request import TuitionRequestCreate


def post_tuition_Request(db: Session, data: TuitionRequestCreate):
    tuition = TuitionRequest(**data.model_dump())
    db.add(tuition)
    db.commit()
    db.refresh(tuition)
    return tuition


def list_tuition_Requests(db: Session, city_id=None, subject_id=None, grade_id=None, status=None):
    query = db.query(TuitionRequest)
    if city_id:
        query = query.filter(TuitionRequest.city_id == city_id)
    if subject_id:
        query = query.filter(TuitionRequest.subject_id == subject_id)
    if grade_id:
        query = query.filter(TuitionRequest.grade_id == grade_id)
    if status:
        query = query.filter(TuitionRequest.status == status)
    return query.order_by(TuitionRequest.posted_at.desc()).all()


def get_tuition_Request(db: Session, tuition_id):
    return db.query(TuitionRequest).filter(TuitionRequest.id == tuition_id).first()
