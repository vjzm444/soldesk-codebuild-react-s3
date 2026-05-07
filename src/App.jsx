export default function App() {
  const now = new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul"
  });

  return (
    <main className="page">
      <section className="panel">
        <div className="badge">AWS CodeBuild + CodeDeploy</div>

        <h1>🚀 EC2 Nginx 배포 성공</h1>

        <p className="subtitle">
          이 페이지는 CodeBuild에서 React 앱을 빌드한 뒤,
          CodeDeploy가 EC2 인스턴스의 Nginx 웹 루트에 배포한 결과입니다.
        </p>

        <div className="grid">
          <article>
            <h2>🧬 Source</h2>
            <p>GitHub Repository</p>
          </article>

          <article>
            <h2>🛠️ Build</h2>
            <p>AWS CodeBuild</p>
          </article>

          <article>
            <h2>🪣 Artifact</h2>
            <p>Amazon S3 ZIP</p>
          </article>

          <article>
            <h2>🚀 Deploy</h2>
            <p>AWS CodeDeploy</p>
          </article>

          <article>
            <h2>🖥️ Server</h2>
            <p>Amazon EC2</p>
          </article>

          <article>
            <h2>🌐 Web</h2>
            <p>Nginx Static Hosting</p>
          </article>
        </div>

        <div className="flow">
          GitHub <span>→</span> CodeBuild <span>→</span> S3 <span>→</span> CodeDeploy <span>→</span> EC2
        </div>

        <p className="time">빌드 확인용 시간: {now}</p>
      </section>
    </main>
  );
}