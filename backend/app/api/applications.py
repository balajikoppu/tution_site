from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID
from app.schemas.application import ApplicationCreate, ApplicationOut
from app.services.application_service import (
    apply_for_tuition,
    list_applications_for_tutor,
    list_applications_for_tuition,
)
from app.api.deps import get_db

router = APIRouter(prefix="/applications", tags=["Applications"])


@router.post("/", response_model=ApplicationOut)
def apply(data: ApplicationCreate, db: Session = Depends(get_db)):
    return apply_for_tuition(db, data)


@router.get("/tutor/{tutor_id}", response_model=List[ApplicationOut])
def get_tutor_apps(tutor_id: UUID, db: Session = Depends(get_db)):
    return list_applications_for_tutor(db, tutor_id)


@router.get("/tuition/{tuition_need_id}", response_model=List[ApplicationOut])
def get_tuition_apps(tuition_need_id: UUID, db: Session = Depends(get_db)):
    return list_applications_for_tuition(db, tuition_need_id)
