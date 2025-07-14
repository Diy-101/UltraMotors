# FastAPI & SQLAlchemy
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# SMTP & SSL & OS
from smtplib import SMTP_SSL
from email.mime.text import MIMEText
from dotenv import load_dotenv
import ssl
import os

import uvicorn.config

# Models & schemes
from . import models, schemas, crud
from .database import SessionLocal, engine, Base


# Load all environmental variables
load_dotenv("/var/www/UltraMotors/backend/.env")

EMAIL_LOGIN = os.getenv("EMAIL_LOGIN")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
WORKING_EMAIL = "6801782@mail.ru"
# Create all tables from models.py in db
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://ultramotors.pro",
        "https://ultramotors.pro",
        "http://127.0.0.1:3000",
        "http://localhost:8000",
        "http://127.0.0.1:8000",
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
    expose_headers=["*"]
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


def send_email(contact: dict, server: str = 'smtp.yandex.ru', port: int = 465) -> bool:
    """
    The function `send_email` sends an email to a customer and the owner of a company with specific
    content and details.

    Args:
      contact (dict): The `contact` parameter in the `send_email` function is a dictionary containing
    information about the recipient of the email. It typically includes the following keys: name, email, phone, message
      server (str): The `server` parameter in the `send_email` function represents the SMTP server
    address that will be used to send the email. In this case, the default SMTP server address is set to
    'smtp.yandex.ru'.SMTP (Simple Mail Transfer Protocol) is a communication protocol for email
    transmission. Defaults to smtp.yandex.ru
      port (int): Port is the parameter that specifies the port number for the email server. In this
    case, the default port number is set to 465 for the SMTP server 'smtp.yandex.ru'. Defaults to 465

    Returns:
      The function `send_email` returns a boolean value. It returns `True` if the email was successfully
    sent to the client and the owner, and it returns `False` if there was an error during the email
    sending process.
    """

    if not EMAIL_LOGIN or not EMAIL_PASSWORD:
        raise ValueError('You should make .env file with following variables:\nEMAIL_LOGIN\nEMAIL_PASSWORD')

    text_subtype = 'plain'
    content = """\
        Text
        """

    msg_to_customer = MIMEText(content, text_subtype, 'utf-8')
    msg_to_customer['Subject'] = "Компания «UltraMotors» приветствует вас"
    msg_to_customer['From'] = f"UltraMotors <{EMAIL_LOGIN}>"
    msg_to_customer['To'] = contact['email']

    msg_to_owner = MIMEText(f"""\
        На сайте клиент прошел форму для связи и ожидает вашего звонка. Вот его данные:\n
        Имя: {contact['first_name']}\n\
        Телефон: {contact['phone']}\n\
        Email: {contact['email']}\n\
        Сообщение от клиента: {contact['message']}
        """, text_subtype, "utf-8")

    msg_to_owner['Subject'] = "Компания «UltraMotors» приветствует вас"
    msg_to_owner['From'] = f"UltraMotors <{EMAIL_LOGIN}>"
    msg_to_owner['To'] = WORKING_EMAIL

    try:
        context = ssl.create_default_context()
        with SMTP_SSL(server, port, context=context) as sr:
            sr.login(EMAIL_LOGIN, EMAIL_PASSWORD)
            sr.sendmail(EMAIL_LOGIN, [contact['email']], msg_to_customer.as_string())
            sr.sendmail(EMAIL_LOGIN, WORKING_EMAIL, msg_to_owner.as_string())
            print("✅ Письмо успешно отправлено клиенту и владельцу")
        return True
    except Exception as e:
        print(f"❌ Ошибка: {e}")
        print('Тип:', type(e))
        return False

# Endpoints
@app.post("/api/contact")
def submit_contact(
    contact: schemas.ContactCreate,
    db: Session = Depends(get_db)
    ):
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

    send_email(contact.model_dump())

    return crud.create_contact(db, contact)

if __name__ == "__main__":
    uvicorn.config.LOGGING_CONFIG["formatters"]["default"]["fmt"] = "%(asctime)s [%(name)s] %(levelprefix)s %(message)s"
    uvicorn.run("main:app", host='0.0.0.0', port=8000, reload=False)