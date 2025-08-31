#!/bin/bash

BASEDIR=$(dirname "$0")
cd "$BASEDIR"
# cd ..
./run-docker-compose.sh run app npm run w2.webpack-watch-development