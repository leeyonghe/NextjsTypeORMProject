FROM node:latest

RUN apt update

RUN npm install -g next 

WORKDIR /main