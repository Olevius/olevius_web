#!/usr/bin/env bash
set -euo pipefail

export PATH="$HOME/.bun/bin:$PATH"

ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)

if ! command -v bun >/dev/null 2>&1; then
  echo "warning: bun CLI not found on PATH. Backend dev server will fail until Bun is installed." >&2
fi

cd "$ROOT_DIR"

pnpm exec concurrently --kill-others-on-fail \
  "pnpm --filter frontend dev" \
  "pnpm --filter backend dev"
