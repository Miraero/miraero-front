FROM node:16.15.0-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .
COPY .env ./
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
