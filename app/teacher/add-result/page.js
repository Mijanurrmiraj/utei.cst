"use client";
import { useState } from "react";

export default function AddResult() {
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = () => {
    alert(
      `Result Added\nRoll: ${roll}\nName: ${name}\nSubject: ${subject}\nMarks: ${marks}`
    );
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold text-green-700 mb-4">
        Add Student Result
      </h2>

      <input
        placeholder="Roll"
        className="w-full border p-2 mb-2"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <input
        placeholder="Student Name"
        className="w-full border p-2 mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Subject"
        className="w-full border p-2 mb-2"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        placeholder="Marks"
        className="w-full border p-2 mb-4"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-700 text-white w-full p-3 rounded"
      >
        Save Result
      </button>
    </div>
  );
}
