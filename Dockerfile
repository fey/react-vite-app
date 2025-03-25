FROM node:22-alpine

WORKDIR /app

RUN apk update && apk add make

COPY package*.json ./

RUN npm install

COPY . .

CMD ["make", "serve"]

EXPOSE 4173
