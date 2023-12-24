FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

ARG API_ENDPOINT
ARG API_AUTH
ENV API_ENDPOINT=$API_ENDPOINT
ENV API_AUTH=$API_AUTH

COPY . .

RUN npm run build && npm prune --production

CMD ["node", "build/index.js"]
