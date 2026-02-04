"use client";

import { useEffect, useState } from "react";

export default function OfficeAdminStudents() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    roll: "",
    batch: "",
    photo: "",
  });

  // load students
  useEffect(() => {
    fetch("/data/students.json")
      .then(res => res.json())
      .then(data => setStudents(data || []));
  }, []);

  const handleAdd = () => {
    if (!form.name || !form.roll) {
      alert("Name & Roll required");
      return;
    }

    const updated = [...students, form];
    setStudents(updated);

    alert("Student added (local preview)");
    setForm({ name: "", roll: "", batch: "", photo: "" });
  };

  const handleDelete = (roll) => {
    const filtered = students.filter(s => s.roll !== roll);
    setStudents(filtered);
    alert("Student deleted (local preview)");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Students Management
      </h1>

      {/* Add student */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="font-semibold mb-3">Add Student</h2>

        <input
          placeholder="Student Name"
          className="input"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Roll No"
          className="input"
          value={form.roll}
          onChange={e => setForm({ ...form, roll: e.target.value })}
        />

        <input
          placeholder="Batch"
          className="input"
          value={form.batch}
          onChange={e => setForm({ ...form, batch: e.target.value })}
        />

        <input
          placeholder="Photo URL"
          className="input"
          value={form.photo}
          onChange={e => setForm({ ...form, photo: e.target.value })}
        />

        <button
          onClick={handleAdd}
          className="bg-green-700 text-white px-4 py-2 rounded mt-2"
        >
          Add Student
        </button>
      </div>

      {/* Student list */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="font-semibold mb-3">Student List</h2>

        {students.length === 0 && (
          <p className="text-gray-500">No students added yet</p>
        )}

        {students.map((s, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm text-gray-600">
                Roll: {s.roll} | Batch: {s.batch}
              </p>
            </div>

            <button
              onClick={() => handleDelete(s.roll)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
