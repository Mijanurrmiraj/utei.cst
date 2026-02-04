"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TeacherLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch("/data/teachers.json");
      const teachers = await res.json();

      const user = teachers.find(
        (t) =>
          t.username === username &&
          t.password === password
      );

      if (user) {
        alert("Login successful");
        router.push("/teacher/dashboard");
      } else {
        alert("Invalid username or password");
      }
    } catch (err) {
      alert("Error loading teacher data");
      console.error(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Teacher Login
      </h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border p-3 mb-3"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-3 mb-4"
      />

      <button
        type="button"
        onClick={handleLogin}
        className="bg-green-700 text-white w-full py-3 rounded"
      >
        Login
      </button>
    </div>
  );
}
