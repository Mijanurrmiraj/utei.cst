"use client";

import { useState } from "react";

export default function StudentsPage() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [batch, setBatch] = useState("");
  const [file, setFile] = useState(null);
  const [students, setStudents] = useState([]);

  const handleAddStudent = async () => {
    if (!file) return alert("Image select করো");

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "YOUR_UPLOAD_PRESET");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();

    const newStudent = {
      name,
      roll,
      batch,
      photo: result.secure_url,
    };

    setStudents([...students, newStudent]);

    setName("");
    setRoll("");
    setBatch("");
    setFile(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Students Management</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Roll" onChange={(e) => setRoll(e.target.value)} />
      <input placeholder="Batch" onChange={(e) => setBatch(e.target.value)} />

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={handleAddStudent}>Add Student</button>

      <div>
        {students.map((s, i) => (
          <div key={i}>
            <img src={s.photo} width="120" />
            <h3>{s.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
