FROM mhart/alpine-node:8

RUN mkdir /app
WORKDIR /app

RUN npm install -g yarn
RUN yarn global add nodemon typescript@3.4.5 tslint mocha

ADD ./package.json .
ADD ./yarn.lock .
RUN yarn
