FROM node:lts-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 3333

CMD ["node", "src/server.js"]

COPY . .