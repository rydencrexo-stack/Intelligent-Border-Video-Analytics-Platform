from fastapi import FastAPI
from backend.api.routes import router

app = FastAPI(title="IBVAP")

app.include_router(router, prefix="/api")

@app.get("/")
def root():
    return {
        "project": "IBVAP",
        "status": "online"
    }
