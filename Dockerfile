FROM node:0.10-slim
RUN npm install -g http-server

ADD dist /data
WORKDIR /data

ENTRYPOINT ["http-server","/data", "-p","8009"]