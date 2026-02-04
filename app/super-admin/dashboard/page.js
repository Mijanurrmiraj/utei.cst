"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminDashboard() {
  const router = useRouter();
  const [admins, setAdmins] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("officeAdmins")) || [];
    setAdmins(data);
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
    alert("Office Admin Added");
  };

  const deleteAdmin = (index) => {
    const updated = admins.filter((_, i) => i !== index);
    setAdmins(updated);
    localStorage.setItem("officeAdmins", JSON.stringify(updated));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="bg-green-700 text-white p-4 rounded-xl flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Super Admin Dashboard</h2>
          <p className="text-sm opacity-90">Full system control</p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("superAdmin");
            router.push("/super-admin/login");
          }}
          className="bg-white text-green-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="mt-4 bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Create Office Admin</h3>
        <input
          className="w-full border p-2 rounded mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full border p-2 rounded mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={addAdmin}
          className="w-full bg-green-700 text-white py-2 rounded"
        >
          Add Admin
        </button>
      </div>

      <div className="mt-4 bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-2">Office Admin List</h3>
        {admins.length === 0 && <p>No admins</p>}
        {admins.map((a, i) => (
          <div key={i} className="flex justify-between mb-2">
            <span>{a.username}</span>
            <button
              onClick={() => deleteAdmin(i)}
              className="bg-red-500 text-white px-3 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
