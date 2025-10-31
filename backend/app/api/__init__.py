from fastapi import APIRouter
from app.api import auth, tutors, students, tuitions, applications, payments, demo

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(students.router)
api_router.include_router(tutors.router)
api_router.include_router(tuitions.router)
api_router.include_router(applications.router)
api_router.include_router(demo.router)
api_router.include_router(payments.router)
