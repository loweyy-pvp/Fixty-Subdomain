// app/dashboard/page.tsx

"use client";

import { useState } from "react";

const freeDomains = [
  "fixty.is-a.dev",
  "fixty.is-an.app",
  "fixty.is-local.org",
  "fixty.my.id",
  "fixty.web.id",
];

export default function DashboardPage() {
  const [subdomain, setSubdomain] = useState("");
  const [selectedDomain, setSelectedDomain] = useState(freeDomains[0]);
  const [serverIp, setServerIp] = useState("");
  const [serverPort, setServerPort] = useState("25565");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert(
      "Cererea a fost trimisă!\n\n" +
        "Subdomeniu: " +
        subdomain +
        "." +
        selectedDomain +
        "\nIP: " +
        serverIp +
        "\nPort: " +
        serverPort +
        "\n\nDupă confirmarea plății de 5 RON vei putea activa subdomeniul."
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#050816",
      }}
    >
      <div
        className="glass"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "35px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🌍 Dashboard
        </h1>

        <p
          style={{
            color: "#bfbfbf",
            marginBottom: "30px",
          }}
        >
          Creează un subdomeniu pentru serverul tău Minecraft.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Nume subdomeniu</label>

          <input
            type="text"
            placeholder="exemplu: survival"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "20px",
              borderRadius: "10px",
              background: "#111827",
              border: "1px solid #333",
              color: "white",
            }}
          />

          <label>Domeniu gratuit</label>

          <select
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "20px",
              borderRadius: "10px",
              background: "#111827",
              border: "1px solid #333",
              color: "white",
            }}
          >
            {freeDomains.map((domain) => (
              <option key={domain}>{domain}</option>
            ))}
          </select>

          <label>IP server Minecraft</label>

          <input
            type="text"
            placeholder="play.exemplu.ro"
            value={serverIp}
            onChange={(e) => setServerIp(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "20px",
              borderRadius: "10px",
              background: "#111827",
              border: "1px solid #333",
              color: "white",
            }}
          />

          <label>Port</label>

          <input
            type="number"
            value={serverPort}
            onChange={(e) => setServerPort(e.target.value)}
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "30px",
              borderRadius: "10px",
              background: "#111827",
              border: "1px solid #333",
              color: "white",
            }}
          />

          <button
            type="submit"
            className="primary-button"
            style={{
              width: "100%",
            }}
          >
            Continuă către plata de 5 RON
          </button>
        </form>

        <div
          className="glass"
          style={{
            marginTop: "30px",
            padding: "20px",
          }}
        >
          <h3>ℹ️ Informații</h3>

          <p style={{ color: "#cfcfcf" }}>
            După confirmarea plății, vei putea administra subdomeniul din
            panoul tău și îl vei putea modifica oricând.
          </p>
        </div>
      </div>
    </main>
  );
}
