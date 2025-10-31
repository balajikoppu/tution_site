from sqlalchemy.orm import Session
from app.models.students import Student
from app.schemas.students import StudentCreate


def create_student(db: Session, data: StudentCreate):
    student = Student(**data.model_dump())
    db.add(student)
    db.commit()
    db.refresh(student)
    return student


def get_student(db: Session, student_id):
    return db.query(Student).filter(Student.id == student_id).first()


def list_students(db: Session, skip=0, limit=20):
    return db.query(Student).offset(skip).limit(limit).all()
