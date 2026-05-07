#!/bin/bash
set -euxo pipefail

echo "🔍 ValidateService: 로컬 HTTP 상태 확인"

for i in {1..10}
do
  if curl -fsS http://localhost/ > /tmp/soldesk-codedeploy-health.html; then
    echo "✅ Nginx HTTP 응답 성공"
    grep -E "CodeBuild|CodeDeploy|EC2|Nginx" /tmp/soldesk-codedeploy-health.html || true
    exit 0
  fi

  echo "⏳ 아직 서비스가 준비되지 않았습니다. 재시도: $i"
  sleep 3
done

echo "❌ ValidateService 실패"
exit 1