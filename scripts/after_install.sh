#!/bin/bash
set -euxo pipefail

echo "🔐 AfterInstall: 파일 권한 정리"

if id nginx >/dev/null 2>&1; then
  chown -R nginx:nginx /usr/share/nginx/html
else
  chown -R root:root /usr/share/nginx/html
fi

find /usr/share/nginx/html -type d -exec chmod 755 {} \;
find /usr/share/nginx/html -type f -exec chmod 644 {} \;

echo "📁 배포된 파일 목록"
ls -al /usr/share/nginx/html