#!/bin/sh

cd /home/FastAPI_MongoDB

docker-compose -f docker-compose-ssl build
docker-compose -f docker-compose-ssl up -d