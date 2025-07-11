from pydantic import BaseModel, EmailStr, Field

class ContactCreate(BaseModel):
    """Schemas for validating json that comes from /api/contact

    Args:
        BaseModel (BaseModel): Default superclass which gives validation for other subclasses
    """
    first_name: str = Field(..., alias="firstName")
    email: EmailStr
    phone: str
    message: str
