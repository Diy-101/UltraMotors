from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv("/var/www/UltraMotors/backend/.env")

USER = os.getenv('DB_USER', 'user')
PASSWORD = os.getenv('DB_PASSWORD', '1234')
HOST = os.getenv('DB_HOST', 'mysql')
PORT = os.getenv('DB_PORT', 3306)
NAME = os.getenv('DB_NAME', 'mydb')

# Creates enviromental variables
DATABASE_URL = f"mysql+pymysql://{USER}:{PASSWORD}@{HOST}:{PORT}/{NAME}"

# Creates connection with DB and create Session Factory
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()
