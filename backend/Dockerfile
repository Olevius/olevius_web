FROM oven/bun:1.2 AS base

WORKDIR /app

COPY backend/bun.lock ./bun.lock
COPY backend/bunfig.toml ./bunfig.toml
COPY backend/package.json ./package.json

RUN bun install --frozen-lockfile

COPY backend ./
COPY common ./common

ENV NODE_ENV=production

EXPOSE 3001

CMD ["bun", "run", "start"]
