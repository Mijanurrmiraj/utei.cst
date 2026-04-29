export default function TeachersPage() {
  const teachers = [
    {
      name: "Masud Rana Babu",
      designation: "Head of Computer Department",
      qualification: "BSc in CSE",
      image: "/teachers/teacher1.jpg",
    },
    {
      name: "Torun Roy",
      designation: "Instructor (Computer)",
      qualification: "BSC in CSE",
      image: "/teachers/teacher2.jpg",
    },
    {
      name: "Mst Popi",
      designation: "Instructor (non tech)",
      qualification: "",
      image: "/teachers/teacher3.jpg",
    },
     {
      name: "Rubel islam",
      designation: "Instructor",
      qualification: "Bsc in EEE",
      image: "/teachers/teacher4.jpg",
    },
  ];

  return (
    <div className="p-6 md:p-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-4">
        Our Teachers
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Computer Department – Upashahar Textile Engineering Institute
      </p>

      {/* Teachers Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-56 object-cover rounded-t-xl"
            />

            <div className="p-5 text-center">
              <h2 className="text-xl font-semibold text-green-700">
                {teacher.name}
              </h2>
              <p className="text-gray-800 font-medium mt-1">
                {teacher.designation}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {teacher.qualification}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
