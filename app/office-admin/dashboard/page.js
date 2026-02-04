"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminDashboard() {
  const router = useRouter();
  const [admins, setAdmins] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const ok = localStorage.getItem("superAdminLogin");
    if (!ok) router.push("/super-admin/login");

    const saved = JSON.parse(localStorage.getItem("officeAdmins")) || [];
    setAdmins(saved);
  }, []);

  const addAdmin = () => {
    if (!username || !password) {
      alert("Username & Password required");
      return;
    }

    const updated = [...admins, { username, password }];
    setAdmins(updated);
    localStorage.setItem("officeAdmins", JSON.stringify(updated));
    setUsername("");
    setPassword("");
  };

  const deleteAdmin = (index) => {
    const updated = admins.filter((_, i) => i !== index);
    setAdmins(updated);
    localStorage.setItem("officeAdmins", JSON.stringify(updated));
  };

  const logout = () => {
    localStorage.removeItem("superAdminLogin");
    router.push("/super-admin/login");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h2>Super Admin Dashboard</h2>
          <p>Full system control panel</p>
        </div>
        <button onClick={logout} style={styles.logout}>Logout</button>
      </div>

      {/* Summary Cards */}
      <div style={styles.cards}>
        <Card title="Office Admins" value={admins.length} />
        <Card title="Teachers" value="—" />
        <Card title="Students" value="—" />
      </div>

      {/* Create Admin */}
      <div style={styles.section}>
        <h3>Create Office Admin</h3>
        <div style={styles.form}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={addAdmin} style={styles.btn}>Add Admin</button>
        </div>
      </div>

      {/* Admin List */}
      <div style={styles.section}>
        <h3>Office Admin List</h3>

        {admins.length === 0 && (
          <p style={{ color: "#777" }}>No office admin created yet.</p>
        )}

        {admins.map((a, i) => (
          <div key={i} style={styles.listItem}>
            <span>{a.username}</span>
            <button onClick={() => deleteAdmin(i)} style={styles.delete}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={styles.card}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

const styles = {
  page: {
    padding: 16,
    background: "#f4f7f6",
    minHeight: "100vh",
  },
  header: {
    background: "#1b7f3a",
    color: "#fff",
    padding: 16,
    borderRadius: 12,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logout: {
    background: "#fff",
    color: "#1b7f3a",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    fontWeight: "bold",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: 12,
    marginTop: 16,
  },
  card: {
    background: "#fff",
    padding: 16,
    borderRadius: 10,
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,.08)",
  },
  section: {
    background: "#fff",
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0,0,0,.06)",
  },
  form: {
    display: "grid",
    gap: 10,
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  btn: {
    background: "#1b7f3a",
    color: "#fff",
    padding: 10,
    borderRadius: 6,
    border: "none",
    fontWeight: "bold",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  },
  delete: {
    background: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: 6,
  },
};
