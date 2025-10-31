from sqlalchemy.orm import Session
from app.models.tutors import Tutor, tutor_subjects, tutor_grades
from app.models.lookup import Subject, Grade
from app.schemas.tutors import TutorCreate


def create_tutor(db: Session, data: TutorCreate):
    tutor = Tutor(
        user_id=data.user_id,
        name=data.name,
        address=data.address,
        city_id=data.city_id,
        profile_image=data.profile_image,
        bio=data.bio,
        experience_years=data.experience_years,
        hourly_rate=data.hourly_rate,
        premium_flag=data.premium_flag,
    )

    db.add(tutor)
    db.commit()
    db.refresh(tutor)

    # add subjects and grades
    if data.subject_ids:
        subjects = db.query(Subject).filter(Subject.id.in_(data.subject_ids)).all()
        tutor.subjects = subjects
    if data.grade_ids:
        grades = db.query(Grade).filter(Grade.id.in_(data.grade_ids)).all()
        tutor.grades = grades

    db.commit()
    db.refresh(tutor)
    return tutor


def get_tutor(db: Session, tutor_id):
    return db.query(Tutor).filter(Tutor.id == tutor_id).first()


def list_tutors(db: Session, city_id=None, subject_id=None, premium_only=False):
    query = db.query(Tutor)
    if city_id:
        query = query.filter(Tutor.city_id == city_id)
    if subject_id:
        query = query.join(Tutor.subjects).filter(Subject.id == subject_id)
    if premium_only:
        query = query.filter(Tutor.premium_flag == True)
    return query.all()
