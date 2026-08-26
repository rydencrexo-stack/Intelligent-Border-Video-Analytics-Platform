from fastapi import FastAPI

app = FastAPI(title="Intelligent Border Video Analytics Platform")

@app.get("/")
def root():
    return {"status": "IBVAP backend is running"}
