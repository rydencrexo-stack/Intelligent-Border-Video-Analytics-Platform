from fastapi import Depends
from backend.database.db import get_db

def database_dependency(db=Depends(get_db)):
    return db
