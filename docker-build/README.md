# Dockerhub

- https://docs.docker.com/get-started/04_sharing_app/
- `docker image ls` 找出合適的名稱，例如「html-webpage-dashboard_app」
- `docker tag html-webpage-dashboard_app pudding/node-pwa:node-12-20230513`
- `docker push pudding/node-pwa:node-12-20230513`
- 修改Dockerfile `FROM pudding/node-pwa:node-12-20230513`