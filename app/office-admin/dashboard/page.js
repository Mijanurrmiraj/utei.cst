"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminDashboard() {
  const router = useRouter();
  const [admins, setAdmins] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("superAdminLogin")) {
      router.push("/super-admin/login");
    }
    loadAdmins();
  }, []);

  const loadAdmins = () => {
    const data = JSON.parse(localStorage.getItem("officeAdmins")) || [];
    setAdmins(data);
  };

  const addAdmin = () => {
    if (!username || !password) {
      alert("Username & Password required");
      return;
    }

    const updated = [...admins, { username, password }];
    localStorage.setItem("officeAdmins", JSON.stringify(updated));
    setAdmins(updated);
    setUsername("");
    setPassword("");
  };

  const deleteAdmin = (u) => {
    const filtered = admins.filter(a => a.username !== u);
    localStorage.setItem("officeAdmins", JSON.stringify(filtered));
    setAdmins(filtered);
  };

  const logout = () => {
    localStorage.removeItem("superAdminLogin");
    router.push("/super-admin/login");
  };

  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <div style={styles.headerCard}>
        <h2 style={{ margin: 0 }}>Super Admin Dashboard</h2>
        <p style={{ margin: "6px 0", opacity: 0.9 }}>
          Full system control panel
        </p>
        <button onClick={logout} style={styles.logoutBtn}>Logout</button>
      </div>

      {/* CREATE ADMIN */}
      <div style={styles.card}>
        <h3>Create Office Admin</h3>

        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={addAdmin} style={styles.primaryBtn}>
          Add Office Admin
        </button>
      </div>

      {/* ADMIN LIST */}
      <div style={styles.card}>
        <h3>Office Admin List</h3>

        {admins.length === 0 && (
          <p style={{ opacity: 0.6 }}>No office admin created</p>
        )}

        {admins.map((a, i) => (
          <div key={i} style={styles.listItem}>
            <span>{a.username}</span>
            <button
              onClick={() => deleteAdmin(a.username)}
              style={styles.deleteBtn}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  page: {
    padding: 16,
    maxWidth: 600,
    margin: "0 auto",
    fontFamily: "system-ui",
  },

  headerCard: {
    background: "#1b7f3a",
    color: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  logoutBtn: {
    marginTop: 10,
    background: "#fff",
    color: "#1b7f3a",
    border: "none",
    padding: "8px 16px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
  },

  card: {
    background: "#fff",
    padding: 16,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 6,
    border: "1px solid #ccc",
    fontSize: 16,
  },

  primaryBtn: {
    marginTop: 12,
    width: "100%",
    background: "#1b7f3a",
    color: "#fff",
    border: "none",
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
    cursor: "pointer",
  },

  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },

  deleteBtn: {
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
  },
};
