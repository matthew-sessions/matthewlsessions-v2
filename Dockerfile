FROM python:3.8

WORKDIR /code
COPY . /code/
RUN pip install --upgrade pip
RUN pip install -r /code/requirements/base.txt
