FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
COPY app/ ./app/

RUN pip install --no-cache-dir -r requirements.txt

COPY main.py .

CMD ["python", "main.py"]
