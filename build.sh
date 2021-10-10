

set -e

ENTER=0
for arg in "$@"
do
    case $arg in
        -e|--enter)
        ENTER=1
        ;;
    esac
done

if [ $ENTER == 0 ]
then
    echo "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
    echo "Building and running tests"
    docker build -f Dockerfile_dev -t fastapi .
    docker run -it \
        -v $(pwd)/tests:/code/tests \
        -v $(pwd)/app:/code/app \
        fastapi sh qc.sh
fi

if [ $ENTER == 1 ]
then
    echo "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
    echo "Entering"
    docker build -f Dockerfile_dev -t fastapi .
    docker run -it \
        -v $(pwd)/tests:/code/tests \
        -v $(pwd)/app:/code/app \
        fastapi /bin/sh
fi
