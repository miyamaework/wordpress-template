#!/bin/bash

# 開発環境のWordPressのデータベースをダンプする

COMPOSE_PROJECT_NAME=$(grep COMPOSE_PROJECT_NAME .env | cut -d '=' -f2)

CONTAINER_ID=$(docker ps -aqf "name=${COMPOSE_PROJECT_NAME}_wp-db_1")

if [[ -n "${CONTAINER_ID}" ]]; then
  docker exec -it $CONTAINER_ID sh -c 'mysqldump wordpress -u exampleuser -pexamplepass 2> /dev/null' > wordpress/volumes/sql/wp-dev.sql

  echo "done"
fi
