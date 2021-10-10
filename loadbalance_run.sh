#!/bin/sh

cd /FastAPI_MongoDB

docker build -t fastapi .
docker run -d -p 80:80 -v $(pwd)/app:/code/app fastapi uvicorn app.main:app --host 0.0.0.0 --port 80 --reload
