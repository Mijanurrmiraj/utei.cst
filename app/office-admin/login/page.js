"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("/data/officeAdmins.json");
      const admins = await res.json();

      const found = admins.find(
        (admin) =>
          admin.username === username && admin.password === password
      );

      if (found) {
        localStorage.setItem("officeAdminLoggedIn", "true");
        localStorage.setItem("officeAdminUser", username);
        router.push("/office-admin/dashboard");
      } else {
        alert("Invalid Office Admin credentials");
      }
    } catch (err) {
      alert("Error loading admin data");
      console.error(err);
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
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#0f5132,#198754)",
  },
  card: {
    background: "#fff",
    padding: 30,
    borderRadius: 14,
    width: 360,
    boxShadow: "0 20px 40px rgba(0,0,0,.25)",
  },
  title: {
    textAlign: "center",
    color: "#0f5132",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 14,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    border: "none",
    background: "#198754",
    color: "#fff",
    fontSize: 16,
    cursor: "pointer",
  },
};
