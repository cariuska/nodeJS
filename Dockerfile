FROM node:14-slim

WORKDIR /app

ADD . /app

CMD node server.js
