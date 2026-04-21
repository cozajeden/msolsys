
FROM nginx:1.29-alpine AS nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/prod.conf /etc/nginx/conf.d
COPY ./frontend/dist /static

FROM python:3.13-slim
COPY ./requirements.txt /requirements.txt

RUN pip install -U pip && pip install -r /requirements.txt

COPY ./app /app

WORKDIR /app

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]

FROM python:3.13-slim as backend
COPY ./backend/requirements.txt /requirements.txt

RUN pip install -U pip && pip install -r /requirements.txt

COPY ./backend/app /app

WORKDIR /app

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]