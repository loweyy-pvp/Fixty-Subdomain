// app/login/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Aici vom conecta autentificarea cu Supabase
    console.log({
      email,
      password,
    });
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="glass"
        style={{
          width: "100%",
          maxWidth: "430px",
          padding: "35px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          🔐 Login
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#bfbfbf",
            marginBottom: "30px",
          }}
        >
          Autentifică te pentru a administra subdomeniile tale.
        </p>

        <label>Email</label>

        <input
          type="email"
          placeholder="exemplu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            marginBottom: "18px",
            borderRadius: "10px",
            border: "1px solid #333",
            background: "#111827",
            color: "white",
          }}
        />

        <label>Parolă</label>

        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "8px",
            marginBottom: "25px",
            borderRadius: "10px",
            border: "1px solid #333",
            background: "#111827",
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
          Conectează te
        </button>

        <p
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#bfbfbf",
          }}
        >
          Nu ai cont?{" "}
          <Link
            href="/register"
            style={{
              color: "#06b6d4",
            }}
          >
            Înregistrează te
          </Link>
        </p>
      </form>
    </main>
  );
}
