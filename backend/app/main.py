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
load_dotenv("/var/www/UltraMotors/backend/.env")

EMAIL_LOGIN = os.getenv("EMAIL_LOGIN")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

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


def send_email(contact:schemas.ContactCreate, server: str = 'smtp.yandex.ru', port: int = 465) -> bool:
    """
    The function `send_email` sends an email to a contact using SMTP with optional server and port
    parameters, handling exceptions and returning a boolean based on success.

    Args:
      contact (schemas.ContactCreate): The `send_email` function takes in a `contact` parameter of type
    `schemas.ContactCreate`, which likely contains information about the recipient of the email such as
    their email address, name, etc. The function also has optional parameters `server` and `port` which
    default to 'smtp.yandex
      server (str): The `server` parameter in the `send_email` function is used to specify the SMTP
    server address to which the email will be sent. In this case, the default SMTP server address is set
    to 'smtp.yandex.ru'. You can change this server address to the one provided by your email service.
    Defaults to smtp.yandex.ru
      port (int): Port is the port number used for the SMTP server. In this case, the default port is
    set to 465, which is commonly used for SMTP over SSL (SMTPS). Defaults to 465

    Returns:
      The `send_email` function returns a boolean value - `True` if the email was successfully sent, and
    `False` if there was an error during the sending process.
    """

    if not EMAIL_LOGIN or not EMAIL_PASSWORD:
        raise ValueError('You should make .env file with following variables:\nEMAIL_LOGIN\nEMAIL_PASSWORD')

    contact_info: dict = contact.model_dump()

    text_subtype = 'plain'
    content = """\
        Text
        """

    msg = MIMEText(content, text_subtype, 'utf-8')
    msg['Subject'] = "Компания «UltraMotors» приветствует вас"
    msg['From'] = f"UltraMotors <{EMAIL_LOGIN}>"
    msg['To'] = contact_info['email']

    try:
        context = ssl.create_default_context()
        with SMTP_SSL(server, port, context=context) as sr:
            sr.login(EMAIL_LOGIN, EMAIL_PASSWORD)
            sr.sendmail(EMAIL_LOGIN, [contact_info['email']], msg.as_string())
            print("✅ Письмо успешно отправлено клиенту")
        return True
    except Exception as e:
        print(f"❌ Ошибка: {e}")
        print('Тип:', type(e))
        return False

def send_self_email(contact:schemas.ContactCreate, server: str = 'smtp.yandex.ru', port: int = 465) -> bool:
    """
    The function `send_self_email` sends an email with contact information to a specified email address
    using SMTP protocol.

    Args:
      contact (schemas.ContactCreate): The `send_self_email` function takes a `contact` object of type
    `schemas.ContactCreate` as input, along with optional parameters `server` and `port` for the SMTP
    server details. The function composes an email message using the contact information provided, and
    attempts to send the email using
      server (str): The `server` parameter in the `send_self_email` function represents the SMTP server
    address that will be used to send the email. In this case, the default SMTP server address is set to
    'smtp.yandex.ru'. This is the server that will handle the outgoing email communication. Defaults to
    smtp.yandex.ru
      port (int): The `port` parameter in the `send_self_email` function is used to specify the port
    number for the SMTP server connection. In this case, the default port is set to `465`, which is
    commonly used for SMTP over SSL (SMTPS) connections. This port is typically used for secure.
    Defaults to 465

    Returns:
      The function `send_self_email` returns a boolean value - `True` if the email was successfully
    sent, and `False` if there was an error during the sending process.
    """

    if not EMAIL_LOGIN or not EMAIL_PASSWORD:
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
    msg['From'] = f"UltraMotors <{EMAIL_LOGIN}>"
    msg['To'] = "6801782@mail.ru"

    try:
        context = ssl.create_default_context()
        with SMTP_SSL(server, port, context=context) as sr:
            sr.login(EMAIL_LOGIN, EMAIL_PASSWORD)
            sr.sendmail(EMAIL_LOGIN, ["6801782@mail.ru"], msg.as_string())
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
