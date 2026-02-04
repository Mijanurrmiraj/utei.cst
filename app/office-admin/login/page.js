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

    if (!found) {
      alert("Invalid Office Admin credentials");
      return;
    }

    localStorage.setItem(
      "officeAdmin",
      JSON.stringify(found)
    );
    router.push("/office-admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-sm">
        <h2 className="text-center text-green-700 font-bold text-xl mb-4">
          Office Admin Login
        </h2>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-700 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
