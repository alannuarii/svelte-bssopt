FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build && npm prune --production

ARG API_ENDPOINT
ARG API_AUTH
ENV API_ENDPOINT=$API_ENDPOINT
ENV API_AUTH=$API_AUTH

CMD ["node", "build/index.js"]
