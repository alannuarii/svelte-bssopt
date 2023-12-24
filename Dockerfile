# Stage 1: Build stage
FROM node:18-alpine AS builder

# Define ARG untuk environment variables pada tahap build
ARG API_ENDPOINT
ARG API_AUTH

# Set ARG ke ENV agar dapat diakses pada waktu runtime
ENV API_ENDPOINT=$API_ENDPOINT
ENV API_AUTH=$API_AUTH

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu untuk memanfaatkan layer caching
COPY package*.json ./

# Install dependensi npm
RUN npm ci

# Salin seluruh aplikasi ke dalam container
COPY . .

# Build aplikasi
RUN npm run build

# Stage 2: Runtime stage
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Salin hasil build dari stage sebelumnya ke dalam container
COPY --from=builder /app/build /app/build

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi saat container dijalankan
CMD ["node", "build/index.js"]
