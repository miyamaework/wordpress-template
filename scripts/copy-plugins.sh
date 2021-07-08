#!/bin/bash

dir_path="./packages/wp-plugins/src/*"
dirs=`find $dir_path -maxdepth 0 -type d`

for dir in $dirs;
do
  baseDir=`basename ${dir}`
  rm -rf ./wordpress/volumes/app/wp-content/plugins/$baseDir/*
done

rsync -arv --exclude={"**/.*",package-lock.json,package.json,src,node_modules} ./packages/wp-plugins/src/ ./wordpress/volumes/app/wp-content/plugins
