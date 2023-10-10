rm -r note-publish

git clone https://github.com/matthew-sessions/note-publish.git

docker-compose -f docker-compose-ssl.yml build
docker-compose -f docker-compose-ssl.yml restart -d