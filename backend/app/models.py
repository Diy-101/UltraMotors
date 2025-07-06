from sqlalchemy import Column, Integer, String, Text
from .database import Base

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(100))
    last_name = Column(String(100))
    email = Column(String(100))
    phone = Column(String(50))
    message = Column(Text)
