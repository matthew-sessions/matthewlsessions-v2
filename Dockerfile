FROM python:3.9

WORKDIR /code
COPY . /code/
RUN pip install -r /code/requirements/base.txt
