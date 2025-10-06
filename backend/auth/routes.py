from fastapi import APIRouter, HTTPException
from .models import User
from .utils import hash_password, verify_password, create_access_token
from database import db

router = APIRouter()

@router.post("/register")
async def register_user(user: User):
    existing = await db.users.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already exists")
    
    user.password = hash_password(user.password)
    user_dict = user.dict()
    await db.users.insert_one(user_dict)
    token = create_access_token({"email": user.email, "role": user.role})
    return {"token": token, "user": {"name": user.name, "email": user.email, "role": user.role}}

@router.post("/login")
async def login_user(user: User):
    existing = await db.users.find_one({"email": user.email})
    if not existing:
        raise HTTPException(status_code=404, detail="User not found")

    if not verify_password(user.password, existing["password"]):
        raise HTTPException(status_code=400, detail="Invalid password")

    token = create_access_token({"email": existing["email"], "role": existing["role"]})
    return {"token": token, "user": {"name": existing["name"], "email": existing["email"], "role": existing["role"]}}
