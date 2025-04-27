# backend/Dockerfile
FROM node:23-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Make sure PORT is the same you used (like 5000 or 8000)
EXPOSE 5000

CMD ["npm", "start"]