// app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        className="glass"
        style={{
          maxWidth: "900px",
          width: "100%",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "10px",
            fontWeight: "bold",
            background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Fixty Domains
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Creează un subdomeniu profesional pentru serverul tău Minecraft în
          doar câteva secunde.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/login">
            <button className="primary-button">
              Autentificare
            </button>
          </Link>

          <Link href="/register">
            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,.15)",
                padding: "12px 20px",
                borderRadius: "12px",
              }}
            >
              Înregistrare
            </button>
          </Link>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          <div className="glass" style={{ padding: "20px" }}>
            <h3>⚡ Rapid</h3>
            <p>
              Creezi și administrezi subdomeniul tău din dashboard.
            </p>
          </div>

          <div className="glass" style={{ padding: "20px" }}>
            <h3>🌍 Gratuit</h3>
            <p>
              Alege unul dintre domeniile gratuite disponibile pe platformă.
            </p>
          </div>

          <div className="glass" style={{ padding: "20px" }}>
            <h3>🎮 Minecraft</h3>
            <p>
              Conceput special pentru servere Java și Bedrock.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
