from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID
from app.schemas.tuition_request import TuitionRequestCreate, TuitionRequestOut
from app.services.tuition_service import post_tuition_Request, list_tuition_Requests, get_tuition_Request
from app.api.deps import get_db

router = APIRouter(prefix="/tuitions", tags=["Tuition Requests"])


@router.post("/", response_model=TuitionRequestOut)
def post_Request(data: TuitionRequestCreate, db: Session = Depends(get_db)):
    return post_tuition_Request(db, data)


@router.get("/", response_model=List[TuitionRequestOut])
def get_all_tuitions(
    db: Session = Depends(get_db),
    city_id: UUID | None = Query(None),
    subject_id: UUID | None = Query(None),
    grade_id: UUID | None = Query(None),
    status: str | None = Query(None),
):
    return list_tuition_Requests(db, city_id, subject_id, grade_id, status)


@router.get("/{tuition_id}", response_model=TuitionRequestOut)
def get_one_tuition(tuition_id: UUID, db: Session = Depends(get_db)):
    return get_tuition_Request(db, tuition_id)
