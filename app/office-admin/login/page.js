"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // DEMO credentials (JSON based)
    if (username === "office" && password === "1234") {
      localStorage.setItem("officeAdminLoggedIn", "true");
      router.push("/office-admin/dashboard");
    } else {
      alert("Invalid Office Admin credentials");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Office Admin Login</h2>

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

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f5132, #198754)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "14px",
    width: "100%",
    maxWidth: "360px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#0f5132",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#198754",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};
