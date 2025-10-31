from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.users import UserCreate, UserLogin, UserOut
from app.services.auth_service import register_user, login_user
from app.api.deps import get_db

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register", response_model=UserOut)
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    return register_user(db, user_data)


@router.post("/login")
def login(credentials: UserLogin, db: Session = Depends(get_db)):
    return login_user(db, credentials)
