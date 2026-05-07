#!/bin/bash
set -euxo pipefail

echo "🚀 ApplicationStart: Nginx 시작 또는 재시작"

nginx -t

systemctl enable nginx
systemctl restart nginx

systemctl status nginx --no-pager || true