FROM python:3.13-slim
COPY ./requirements.txt /requirements.txt

RUN pip install -U pip && pip install -r /requirements.txt

COPY ./app /app

WORKDIR /app

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]