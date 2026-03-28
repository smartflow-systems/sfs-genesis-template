#!/usr/bin/env bash
set -euo pipefail

# Health Check Script for sfs-genesis-template
# Used by deployment platforms and monitoring systems

BASE="${BASE:-http://127.0.0.1:${PORT:-3000}}"
curl -sS -m 8 -o /dev/null -w "HEALTH:%{http_code}\n" "$BASE/health"
