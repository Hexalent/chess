FROM node:16-alpine AS builder
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

FROM node:16-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 1776
CMD [ "yarn", "run", "start:prod" ]
