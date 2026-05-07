#!/bin/bash
set -euxo pipefail

echo "🧹 BeforeInstall: 기존 Nginx 웹 루트 정리"

mkdir -p /usr/share/nginx/html
mkdir -p /var/backups/soldesk-nginx

if [ -d /usr/share/nginx/html ]; then
  tar -czf /var/backups/soldesk-nginx/html-$(date +%Y%m%d%H%M%S).tar.gz /usr/share/nginx/html || true
fi

rm -rf /usr/share/nginx/html/*