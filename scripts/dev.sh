#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

cleanup() {
  trap - SIGINT SIGTERM EXIT
  if [[ -n "${frontend_pid:-}" ]]; then
    kill "$frontend_pid" 2>/dev/null || true
  fi
  if [[ -n "${backend_pid:-}" ]]; then
    kill "$backend_pid" 2>/dev/null || true
  fi
}

trap cleanup SIGINT SIGTERM EXIT

pnpm --filter backend dev &
backend_pid=$!

pnpm --filter frontend dev &
frontend_pid=$!

backend_status=0
frontend_status=0

wait "$backend_pid" || backend_status=$?
wait "$frontend_pid" || frontend_status=$?

cleanup

if [[ $backend_status -ne 0 ]]; then
  exit "$backend_status"
fi

if [[ $frontend_status -ne 0 ]]; then
  exit "$frontend_status"
fi

exit 0
