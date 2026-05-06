export default function App() {
  const buildTime = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul"
  });

  return (
    <main className="page">
      <section className="hero">
        <div className="badge">AWS CodeBuild 실습</div>

        <h1>🚀 CodeBuild로 React 앱을 S3 + CloudFront에 자동 배포</h1>

        <p className="subtitle">
          이 페이지는 Docker 컨테이너가 아니라 정적 웹 파일로 빌드되어 S3에 배포됩니다.
        </p>

        <div className="cards">
          <div className="card">
            <h2>🧬 Source</h2>
            <p>GitHub Repository</p>
          </div>

          <div className="card">
            <h2>🛠️ Build</h2>
            <p>AWS CodeBuild</p>
          </div>

          <div className="card">
            <h2>🪣 Deploy</h2>
            <p>Amazon S3</p>
          </div>

          <div className="card">
            <h2>🌐 Delivery</h2>
            <p>Amazon CloudFront</p>
          </div>
        </div>

        <div className="flow">
          <span>GitHub</span>
          <strong>→</strong>
          <span>CodeBuild</span>
          <strong>→</strong>
          <span>S3</span>
          <strong>→</strong>
          <span>CloudFront</span>
        </div>

        <p className="time">빌드 확인용 시간: {buildTime}</p>
      </section>
    </main>
  );
}