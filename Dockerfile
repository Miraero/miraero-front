FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm build

EXPOSE 3000

CMD ["npm", "start"]