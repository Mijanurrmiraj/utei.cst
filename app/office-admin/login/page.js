"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const admins =
      JSON.parse(localStorage.getItem("officeAdmins")) || [];

    const found = admins.find(
      (a) => a.username === username && a.password === password
    );

    if (found) {
      localStorage.setItem(
        "officeAdminLogin",
        JSON.stringify(found)
      );
      router.push("/office-admin/dashboard");
    } else {
      alert("Invalid Office Admin credentials");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={{ color: "#1b7f3a" }}>Office Admin Login</h2>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.btn} onClick={handleLogin}>
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
    maxWidth: 360,
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
