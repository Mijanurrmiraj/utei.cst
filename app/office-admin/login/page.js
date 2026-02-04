"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/data/officeAdmins.json");
    const admins = await res.json();

    const valid = admins.find(
      a => a.username === username && a.password === password
    );

    if (!valid) {
      alert("Invalid Office Admin credentials");
      return;
    }

    sessionStorage.setItem("officeAdmin", username);
    router.push("/office-admin/dashboard");
  };

  return (
    <div className="login-box">
      <h2>Office Admin Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
