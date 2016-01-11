#!/bin/bash
docker build -t myuw/wc .
docker stop wc
docker rm wc
docker run -d --name wc -p 8009:8009 myuw/wc:latest
 