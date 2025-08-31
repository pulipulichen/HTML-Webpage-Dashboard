#!/bin/bash

BASEDIR=$(dirname "$0")
cd "$BASEDIR"
# cd ..
# 使用共用腳本執行 docker compose 指令
# Use shared script to execute docker compose command
./run-docker-compose.sh run app npm run w1.webpack-build-development
