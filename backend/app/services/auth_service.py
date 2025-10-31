from sqlalchemy.orm import Session
from app.models.users import User, UserRole, UserStatus
from app.schemas.users import UserCreate, UserLogin
from app.core.security import hash_password, verify_password, create_access_token
from fastapi import HTTPException, status


def register_user(db: Session, user_data: UserCreate):
    existing = db.query(User).filter(User.email == user_data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        email=user_data.email,
        password_hash=hash_password(user_data.password),
        role=user_data.role,
        status=UserStatus.active,
    )

    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def login_user(db: Session, credentials: UserLogin):
    user = db.query(User).filter(User.email == credentials.email).first()
    if not user or not verify_password(credentials.password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_access_token({"sub": str(user.id), "role": user.role})
    return {"access_token": token, "token_type": "bearer", "user": user}
