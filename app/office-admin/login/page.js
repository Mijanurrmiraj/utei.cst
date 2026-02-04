"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const admins = JSON.parse(localStorage.getItem("officeAdmins")) || [];

    const found = admins.find(
      a => a.username === username && a.password === password
    );

    if (found) {
      localStorage.setItem("officeAdminLogin", username);
      router.push("/office-admin/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Office Admin Login</h2>

      <input
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}
