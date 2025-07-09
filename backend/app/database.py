from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os
from .config import Settings

settings: Settings = Settings()

# Creates enviromental variables
DATABASE_URL = f"mysql+pymysql://{settings.USER}:{settings.PASSWORD}@{settings.HOST}:{settings.PORT}/{settings.NAME}"

# Creates connection with DB and create Session Factory
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()
