rm -r note-publish

git clone https://github.com/matthew-sessions/note-publish.git

docker-compose build
docker-compose restart -d