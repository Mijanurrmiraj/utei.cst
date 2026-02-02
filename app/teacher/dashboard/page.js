"use client";
import { useEffect, useState } from "react";

export default function TeacherDashboard() {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("teacher");
    if (data) setTeacher(JSON.parse(data));
  }, []);

  if (!teacher) return <p className="p-10">Unauthorized</p>;

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-xl font-bold text-green-700">
        Welcome {teacher.name}
      </h2>

      <p className="mb-6">
        Subject: <b>{teacher.subject}</b>
      </p>

      <div className="border p-4 rounded">
        <h3 className="font-semibold mb-3">Add Student Result</h3>

        <input className="border p-2 w-full mb-2" placeholder="Roll" />
        <input className="border p-2 w-full mb-2" placeholder="Student Name" />
        <input className="border p-2 w-full mb-2" placeholder="Theory Marks" />
        <input className="border p-2 w-full mb-2" placeholder="Practical Marks" />

        <button className="bg-green-700 text-white px-4 py-2 rounded">
          Save (Demo)
        </button>

        <p className="text-sm text-gray-500 mt-2">
          * Data save system next step
        </p>
      </div>
    </div>
  );
}
