from sqlalchemy import Column, Integer, String, Text
from .database import Base

class Contact(Base):
    """Model for the table contacts in database

    Args:
        Base (Declarative Base): Default arg for all models created by sqlalchemy
    """
    __tablename__ = "contacts"
    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100))
    email = Column(String(100))
    phone = Column(String(50))
    message = Column(Text)
