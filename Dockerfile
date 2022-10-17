FROM node:16.15.0-alpine
ARG NEXT_PUBLIC_API_URI
ENV NEXT_PUBLIC_API_URI=$NEXT_PUBLIC_API_URI

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .
COPY .env ./
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
