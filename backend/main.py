from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import auth_routes, tutor_routes, student_routes, booking_routes, subscription_routes

app = FastAPI(title="TutorSite API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(auth_routes.router)
app.include_router(tutor_routes.router)
app.include_router(student_routes.router)
app.include_router(booking_routes.router)
app.include_router(subscription_routes.router)

@app.get("/")
async def root():
    return {"message": "TutorSite API is running 🚀"}
