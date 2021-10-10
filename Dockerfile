FROM python:3.9

WORKDIR /code

COPY requirements/base.txt /code/requirements.txt
RUN pip install --upgrade -r /code/requirements.txt
COPY . /code/