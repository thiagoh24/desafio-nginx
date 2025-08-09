FROM node:18-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache wget ca-certificates libc6-compat

ENV DOCKERIZE_VERSION=v0.6.1
RUN wget -O /tmp/dockerize.tgz \
    https://github.com/jwilder/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-linux-amd64-${DOCKERIZE_VERSION}.tar.gz \
 && tar -C /usr/local/bin -xzvf /tmp/dockerize.tgz \
 && rm /tmp/dockerize.tgz

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3033
