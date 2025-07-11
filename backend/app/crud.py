from sqlalchemy.orm import Session
from . import schemas
from .models import Contact


def create_contact(db: Session, contact: schemas.ContactCreate) -> Contact:
    """Create a note in the db with contact schema

    Args:
        db (Session): Session with db from Session factory
        contact (schemas.ContactCreate): Schema from Pydantic for validating a note

    Returns:
        Contact: Model Contact, python object
    """
    db_contact = Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact
