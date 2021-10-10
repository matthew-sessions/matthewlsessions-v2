#!/bin/sh

cd /FastAPI_MongoDB

python3 populate_ssl.py

docker-compose -f docker-compose-ssl build
docker-compose -f docker-compose-ssl up -d