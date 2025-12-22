# syntax=docker/dockerfile:1.6
FROM node:20-alpine AS base

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY frontend/package.json frontend/package.json
COPY backend/package.json backend/package.json
COPY common/package.json common/package.json

RUN pnpm install --frozen-lockfile

COPY frontend frontend
COPY common common

RUN pnpm --filter frontend... build

FROM nginx:1.27-alpine

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=base /app/frontend/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
