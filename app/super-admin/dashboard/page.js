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

  const loadAdmins = async () => {
    const res = await fetch("/data/officeAdmins.json");
    const data = await res.json();
    setAdmins(data);
  };

  const addAdmin = async () => {
    if (!username || !password) return alert("Fill all fields");

    const newAdmin = { username, password };

    const updated = [...admins, newAdmin];

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
    <div style={{ padding: 20 }}>
      <h2>Super Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>

      <hr />

      <h3>Create Office Admin</h3>

      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={addAdmin}>Add Office Admin</button>

      <hr />

      <h3>Office Admin List</h3>

      {admins.map((a, i) => (
        <div key={i}>
          {a.username}
          <button onClick={() => deleteAdmin(a.username)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
