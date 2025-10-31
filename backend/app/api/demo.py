from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from uuid import UUID
from app.schemas.demo import DemoCreate, DemoOut
from app.services.demo_service import schedule_demo, update_demo_result
from app.api.deps import get_db

router = APIRouter(prefix="/demos", tags=["Demos"])


@router.post("/", response_model=DemoOut)
def schedule(data: DemoCreate, db: Session = Depends(get_db)):
    return schedule_demo(db, data)


@router.put("/{demo_id}", response_model=DemoOut)
def update_result(demo_id: UUID, result_status: str, db: Session = Depends(get_db)):
    return update_demo_result(db, demo_id, result_status)
