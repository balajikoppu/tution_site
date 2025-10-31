from sqlalchemy.orm import Session
from app.models.application import Application
from app.schemas.application import ApplicationCreate


def apply_for_tuition(db: Session, data: ApplicationCreate):
    existing = db.query(Application).filter(
        Application.tutor_id == data.tutor_id,
        Application.tuition_need_id == data.tuition_need_id
    ).first()
    if existing:
        return existing  # already applied

    app_obj = Application(**data.model_dump())
    db.add(app_obj)
    db.commit()
    db.refresh(app_obj)
    return app_obj


def list_applications_for_tutor(db: Session, tutor_id):
    return db.query(Application).filter(Application.tutor_id == tutor_id).all()


def list_applications_for_tuition(db: Session, tuition_need_id):
    return db.query(Application).filter(Application.tuition_need_id == tuition_need_id).all()
