"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("superAdminLogin", "true");
      router.push("/super-admin/dashboard");
    } else {
      alert("Invalid Super Admin credentials");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={{ color: "#1b7f3a" }}>Super Admin Login</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.btn} onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f4f6f5",
  },
  card: {
    width: "100%",
    maxWidth: 350,
    padding: 20,
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 8px 20px rgba(0,0,0,.1)",
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  btn: {
    width: "100%",
    marginTop: 15,
    padding: 12,
    background: "#1b7f3a",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontSize: 16,
    cursor: "pointer",
  },
};
