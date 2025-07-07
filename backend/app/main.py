from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from . import models, schemas, crud
from .database import SessionLocal, engine, Base

# Creates all tables from models.py in db
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    """Generator for session with database for FastAPI dependencies

    Yields:
        Session: SQLAlchemy session with database

    Important:
        Always close the session with databes, even if exceptions happens
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/contact")
async def submit_contact(
    contact: schemas.ContactCreate,
    db: Session = Depends(get_db)
    ) -> models.Contact:
    """Create a new contact entry in the database

    Args:
        contact (schemas.ContactCreate): Contact data transfer object containing:
            - first_name: str - Contact's first name
            - last_name: str - Contact's last name
            - email: EmailStr - Valid email address
            - phone: str - Phone number (optional)
            - message: str - Contact message content
        db (Session): Database session dependency injected by FastAPI

    Returns:
        models.Contact: The newly created contact
    """
    return await crud.create_contact(db, contact)
