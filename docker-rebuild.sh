#!/bin/bash
docker stop wc
docker rm wc
docker build -t myuw/wc .
docker run -d --name wc -p 8009:8009 myuw/wc:latest
