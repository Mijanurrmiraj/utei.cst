"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TeacherLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const login = async () => {
    const res = await fetch("/data/teachers.json");
    const teachers = await res.json();

    const found = teachers.find(
      t => t.username === username && t.password === password
    );

    if (!found) {
      setError("Invalid username or password");
    } else {
      localStorage.setItem("teacher", JSON.stringify(found));
      router.push("/teacher/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Teacher Login
      </h2>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-green-700 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>

      {error && <p className="text-red-600 mt-3">{error}</p>}
    </div>
  );
}
