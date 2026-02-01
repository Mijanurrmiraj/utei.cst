export default function StudentsPage() {
  const students = [
    {
      name: "Mijanur Rahman Miraj",
      batch: "2022–2023",
      roll: "CST-101",
      image: "/students/student1.jpg",
    },
    {
      name: "Manik Islam",
      batch: "2022–2023",
      roll: "CST-102",
      image: "/students/student2.jpg",
    },
    {
      name: "Sadia akter",
      batch: "2023–2024",
      roll: "CST-201",
      image: "/students/student3.jpg",
    },
  ];

  return (
    <div className="p-6 md:p-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-4">
        Our Students
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Computer Department – Upashahar Textile Engineering Institute
      </p>

      {/* Students Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-56 object-cover rounded-t-xl"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-green-700">
                {student.name}
              </h2>
              <p className="text-gray-800 font-medium mt-1">
                Batch: {student.batch}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Roll No: {student.roll}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
