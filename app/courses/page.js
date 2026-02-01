export const metadata = {
  title: "Courses | UTEI Computer Department",
};

export default function CoursesPage() {
  const courses = [
    {
      title: "Computer Technology",
      duration: "4 Years (8 Semesters)",
      level: "Diploma-in-Engineering",
      description:
        "This course focuses on computer fundamentals, programming, networking, database, and modern IT skills.",
    },
    {
      title: "Web Design & Development",
      duration: "Short Course",
      level: "Professional Skill",
      description:
        "HTML, CSS, JavaScript, modern frameworks and real-world website development training.",
    },
    {
      title: "Computer Hardware & Networking",
      duration: "Short Course",
      level: "Technical Skill",
      description:
        "Computer hardware troubleshooting, LAN, WAN, router configuration and basic networking.",
    },
    {
      title: "Office Application",
      duration: "Short Course",
      level: "Basic Skill",
      description:
        "Microsoft Word, Excel, PowerPoint, internet usage and office productivity skills.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-4">
        Our Courses
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Computer Department – Upashahar Textile Engineering Institute
      </p>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow-md hover:shadow-xl transition p-6"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              {course.title}
            </h2>

            <p className="text-sm text-gray-500 mb-1">
              <strong>Level:</strong> {course.level}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              <strong>Duration:</strong> {course.duration}
            </p>

            <p className="text-gray-700 text-sm">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
