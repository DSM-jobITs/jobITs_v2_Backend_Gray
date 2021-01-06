FROM node:14

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm ci
RUN npm i ts-node

ENV NODE_ENV development

RUN ["npm", "start"]