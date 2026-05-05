export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 60 }}>REBORN AI</h1>

      <p style={{ fontSize: 20, opacity: 0.7 }}>
        AI SaaS System for Automation & Growth
      </p>

      <button style={{
        marginTop: 30,
        padding: 15,
        background: "black",
        color: "white"
      }}>
        Start Free
      </button>

      <section style={{ marginTop: 60 }}>
        <h2>Features</h2>
        <ul>
          <li>AI Agents</li>
          <li>Automation System</li>
          <li>SaaS Dashboard</li>
        </ul>
      </section>
    </main>
  );
}
