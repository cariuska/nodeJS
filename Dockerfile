FROM node:14-slim

WORKDIR /app

ADD . /app

RUN npm install 

CMD node server.js
