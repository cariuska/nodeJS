FROM node:13-slim

WORKDIR /app

ADD . /app

RUN npm install express

CMD node server.js
