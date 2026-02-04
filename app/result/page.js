"use client";
import { useState } from "react";

export default function ResultPage() {
  const [roll, setRoll] = useState("");
  const [results, setResults] = useState([]);

  const searchResult = () => {
    const data = JSON.parse(localStorage.getItem("results")) || [];
    const filtered = data.filter((r) => r.roll === roll);
    setResults(filtered);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Result
      </h1>

      <input
        placeholder="Enter Roll"
        className="w-full border p-2 mb-3"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <button
        onClick={searchResult}
        className="bg-green-700 text-white w-full p-3 rounded mb-4"
      >
        Search Result
      </button>

      {results.length === 0 && roll && (
        <p className="text-center text-gray-500">No result found</p>
      )}

      {results.map((r, i) => (
        <div key={i} className="border p-3 mb-2 rounded">
          <p><b>Name:</b> {r.name}</p>
          <p><b>Subject:</b> {r.subject}</p>
          <p><b>Marks:</b> {r.marks}</p>
        </div>
      ))}
    </div>
  );
}
