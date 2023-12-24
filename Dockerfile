FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV API_ENDPOINT=${API_ENDPOINT}
ENV API_AUTH=${API_AUTH}

RUN npm run build && npm prune --production

CMD ["node", "build/index.js"]
