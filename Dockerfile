FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . . 
RUN npm run build

FROM node:18-alpine

WORKDIR /app

RUN npm i -g serve
COPY --from=builder /app/dist /app/dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
