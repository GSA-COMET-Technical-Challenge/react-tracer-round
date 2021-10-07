#FROM node:lts-alpine3.14
FROM node:16.10.0-buster-slim

WORKDIR /src

ADD . /src

RUN npm install

CMD [ "npm", "start" ]
