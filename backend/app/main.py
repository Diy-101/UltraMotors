# FastAPI & SQLAlchemy
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

# SMTP & SSL & OS
from smtplib import SMTP_SSL
from email.mime.text import MIMEText
from dotenv import load_dotenv
import ssl
import os

# Models & schemes
from . import models, schemas, crud
from .database import SessionLocal, engine, Base


# Load all environmental variables
load_dotenv()

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


def send_email(contact:schemas.ContactCreate, server: str = 'smtp.yandex.ru', port: int = 465) -> bool:

    login = os.getenv("EMAIL_LOGIN")
    password = os.getenv("EMAIL_PASSWORD")

    if not login or not password:
        raise ValueError('You should make .env file with following variables:\nEMAIL_LOGIN\nEMAIL_PASSWORD')

    contact_info: dict = contact.model_dump()

    text_subtype = 'plain'
    content = """\
        Text
        """

    msg = MIMEText(content, text_subtype, 'utf-8')
    msg['Subject'] = "Компания «UltraMotors» приветствует вас"
    msg['From'] = f"UltraMotors <{login}>"
    msg['To'] = contact_info['email']

    try:
        context = ssl.create_default_context()
        with SMTP_SSL(server, port, context=context) as sr:
            sr.login(login, password)
            sr.sendmail(login, [contact_info['email']], msg.as_string())
            print("✅ Письмо успешно отправлено клиенту")
        return True
    except Exception as e:
        print(f"❌ Ошибка: {e}")
        print('Тип:', type(e))
        return False

def send_self_email(contact:schemas.ContactCreate, server: str = 'smtp.yandex.ru', port: int = 465) -> bool:

    login = os.getenv("EMAIL_LOGIN")
    password = os.getenv("EMAIL_PASSWORD")

    if not login or not password:
        raise ValueError('You should make .env file with following variables:\nEMAIL_LOGIN\nEMAIL_PASSWORD')

    contact_info: dict = contact.model_dump()

    text_subtype = 'plain'
    content = f"""\
        На сайте клиент прошел форму для связи и ожидает вашего звонка. Вот его данные:\n
        Имя: {contact_info['first_name']}\n\
        Телефон: {contact_info['phone']}\n\
        Email: {contact_info['email']}\n\
        Сообщение от клиента: {contact_info['message']}
        """

    msg = MIMEText(content, text_subtype, 'utf-8')
    msg['Subject'] = "Компания «UltraMotors» приветствует вас"
    msg['From'] = f"UltraMotors <{login}>"
    msg['To'] = "6801782@mail.ru"

    try:
        context = ssl.create_default_context()
        with SMTP_SSL(server, port, context=context) as sr:
            sr.login(login, password)
            sr.sendmail(login, ["6801782@mail.ru"], msg.as_string())
            print('Message sent')

        print("✅ Письмо успешно отправлено на 6801782@mail.ru!")
        return True
    except Exception as e:
        print(f"❌ Ошибка: {e}")
        print('Тип:', type(e))
        return False

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


    send_self_email(contact)
    send_email(contact)

    return crud.create_contact(db, contact)
