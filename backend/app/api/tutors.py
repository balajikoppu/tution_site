from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID
from app.schemas.tutors import TutorCreate, TutorOut
from app.services.tutor_service import create_tutor, get_tutor, list_tutors
from app.api.deps import get_db

router = APIRouter(prefix="/tutors", tags=["Tutors"])


@router.post("/", response_model=TutorOut)
def add_tutor(data: TutorCreate, db: Session = Depends(get_db)):
    return create_tutor(db, data)


@router.get("/{tutor_id}", response_model=TutorOut)
def get_tutor_by_id(tutor_id: UUID, db: Session = Depends(get_db)):
    return get_tutor(db, tutor_id)


@router.get("/", response_model=List[TutorOut])
def get_tutors(
    db: Session = Depends(get_db),
    city_id: UUID | None = Query(None),
    subject_id: UUID | None = Query(None),
    premium_only: bool = Query(False),
):
    return list_tutors(db, city_id, subject_id, premium_only)
