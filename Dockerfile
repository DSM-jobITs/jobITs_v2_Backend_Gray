FROM node:14

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN npm ci
RUN npm i ts-node
RUN npm i typescript

ENV NODE_ENV development

CMD ["npm", "start"]