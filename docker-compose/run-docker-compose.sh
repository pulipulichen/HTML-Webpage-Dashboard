#!/bin/bash

BASEDIR=$(dirname "$0")
cd "$BASEDIR"
cd ..

# 檢查 docker-compose (帶連字號) 是否存在
# Check if docker-compose (with hyphen) exists
if command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE_CMD="docker-compose"
    # 註解：偵測到舊版 docker-compose 指令
    # Comment: Detected old version of docker-compose command
else
    DOCKER_COMPOSE_CMD="docker compose"
    # 註解：偵測到新版 docker compose 指令
    # Comment: Detected new version of docker compose command
fi

# 檢查是否為 rootless 模式
# 透過檢查 docker info 輸出中是否有 "Rootless: true" 來判斷
# Check if it's rootless mode
# Determined by checking if "Rootless: true" is present in docker info output
if docker info 2>&1 | grep -q "Rootless: true"; then
    SUDO_CMD=""
    # 註解：在 rootless 模式下執行，不需要 sudo
    # Comment: Running in rootless mode, no sudo required
else
    # 註解：非 rootless 模式下執行，需要 sudo
    # Comment: Running in non-rootless mode, sudo required
    SUDO_CMD="sudo"
fi

# 執行 docker compose 指令，並傳遞所有參數
# Execute the docker compose command, passing all arguments
$SUDO_CMD $DOCKER_COMPOSE_CMD "$@"
