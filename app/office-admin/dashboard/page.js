"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("officeAdminLoggedIn");
    if (!loggedIn) {
      router.push("/office-admin/login");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("officeAdminLoggedIn");
    router.push("/office-admin/login");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <h2>Office Admin Dashboard</h2>
          <p style={{ opacity: 0.9 }}>Manage students, teachers & results</p>
        </div>
        <button style={styles.logout} onClick={logout}>
          Logout
        </button>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>👨‍🎓 Students<br /><small>Manage student info</small></div>
        <div style={styles.card}>👩‍🏫 Teachers<br /><small>Add / view teachers</small></div>
        <div style={styles.card}>📊 Results<br /><small>View results</small></div>
        <div style={styles.card}>📢 Notices<br /><small>Publish notices</small></div>
        <div style={styles.card}>🖼️ Gallery<br /><small>Upload photos</small></div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "20px",
  },
  header: {
    background: "linear-gradient(135deg, #0f5132, #198754)",
    color: "#fff",
    padding: "20px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  logout: {
    background: "#fff",
    color: "#198754",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
  },
  card: {
    background: "#fff",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    fontSize: "16px",
    fontWeight: "600",
    textAlign: "center",
    cursor: "pointer",
  },
};
