from fastapi import FastAPI
from typing import List

app = FastAPI()

# Sample data
tutions = [
    {"id": 1, "subject": "Math", "teacher": "Alice"},
    {"id": 2, "subject": "Science", "teacher": "Bob"},
]

@app.get("/tutions", response_model=List[dict])
def get_tutions():
    return tutions