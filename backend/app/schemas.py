from pydantic import BaseModel, EmailStr, Field

class ContactCreate(BaseModel):
    first_name: str = Field(..., alias="firstName")
    last_name: str = Field(..., alias="lastName")
    email: EmailStr
    phone: str
    message: str
