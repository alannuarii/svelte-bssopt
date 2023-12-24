# Gunakan node image sebagai base image dengan versi yang diinginkan
FROM node:18-alpine

# Define ARG untuk environment variables
ARG API_ENDPOINT
ARG API_AUTH

# Set environment variables
ENV API_ENDPOINT=$API_ENDPOINT
ENV API_AUTH=$API_AUTH

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu untuk memanfaatkan layer caching
COPY package*.json ./

# Install dependensi npm
RUN npm ci --omit dev

# Salin seluruh aplikasi ke dalam container
COPY . .

# Build aplikasi
RUN npm run build

# Jalankan aplikasi saat container dijalankan
CMD ["node", "build/index.js"]
