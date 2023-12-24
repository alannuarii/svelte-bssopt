# Gunakan node image sebagai base image dengan versi yang diinginkan
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json terlebih dahulu untuk memanfaatkan layer caching
COPY package*.json ./

# Install dependensi npm
RUN npm ci

# Salin seluruh aplikasi ke dalam container
COPY . .

# Instal dotenv untuk mode produksi
RUN npm install dotenv

# Jalankan dotenv/config sebelum menjalankan build
RUN node -r dotenv/config $(npm bin)/vite build

# Expose port yang digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi saat container dijalankan
CMD ["node", "build/index.js"]
