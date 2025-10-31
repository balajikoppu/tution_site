from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import api_router
from app.db import Base, engine
import app.models  # make sure models are imported

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Tutor SIte Backend", version="1.0")

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(api_router)

@app.get("/")
def root():
    return {"message": "HomeTutor API is running 🚀"}
