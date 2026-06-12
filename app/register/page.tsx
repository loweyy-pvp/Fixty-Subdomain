// app/register/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    // Aici vom conecta înregistrarea cu Supabase
    console.log({
      email,
      password,
    });

    alert("Cont creat cu succes!");
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
        onSubmit={handleRegister}
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
          🚀 Creează cont
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#bfbfbf",
            marginBottom: "30px",
          }}
        >
          Înregistrează te pentru a cumpăra și administra subdomenii.
        </p>

        <label>Email</label>

        <input
          type="email"
          required
          placeholder="exemplu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          required
          placeholder="Minimum 8 caractere"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          Creează cont
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#bfbfbf",
          }}
        >
          Ai deja cont?{" "}
          <Link
            href="/login"
            style={{
              color: "#06b6d4",
            }}
          >
            Autentifică te
          </Link>
        </p>
      </form>
    </main>
  );
}
