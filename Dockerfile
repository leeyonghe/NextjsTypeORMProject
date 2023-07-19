FROM node:latest

RUN apt update

RUN npm install -g npm@latest

WORKDIR /main