from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.schemas.students import StudentCreate, StudentOut
from app.services.student_service import create_student, get_student, list_students
from app.api.deps import get_db

router = APIRouter(prefix="/students", tags=["Students"])


@router.post("/", response_model=StudentOut)
def add_student(data: StudentCreate, db: Session = Depends(get_db)):
    return create_student(db, data)


@router.get("/{student_id}", response_model=StudentOut)
def get_student_by_id(student_id: str, db: Session = Depends(get_db)):
    return get_student(db, student_id)


@router.get("/", response_model=List[StudentOut])
def get_students(db: Session = Depends(get_db)):
    return list_students(db)
