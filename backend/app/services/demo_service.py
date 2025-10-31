from sqlalchemy.orm import Session
from app.models.demo import Demo
from app.schemas.demo import DemoCreate


def schedule_demo(db: Session, data: DemoCreate):
    demo = Demo(**data.model_dump())
    db.add(demo)
    db.commit()
    db.refresh(demo)
    return demo


def update_demo_result(db: Session, demo_id, result_status):
    demo = db.query(Demo).filter(Demo.id == demo_id).first()
    if demo:
        demo.result_status = result_status
        db.commit()
        db.refresh(demo)
    return demo
