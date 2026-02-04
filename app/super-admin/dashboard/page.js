"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("superAdminLogin");
    if (!isLogin) {
      router.push("/super-admin/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("superAdminLogin");
    router.push("/super-admin/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Super Admin Dashboard</h2>
      <p>Welcome, Super Admin</p>

      <button onClick={logout}>Logout</button>

      <hr />

      <ul>
        <li>✔ Full system control</li>
        <li>✔ Create Office Admin (next step)</li>
        <li>✔ Reset admin access</li>
      </ul>
    </div>
  );
}
