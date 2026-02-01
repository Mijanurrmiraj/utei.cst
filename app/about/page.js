export const metadata = {
  title: "About | UTEI Computer Department",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
        About Computer Department
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Upashahar Textile Engineering Institute, Dinajpur
      </p>

      {/* About Content */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The Computer Department of Upashahar Textile Engineering Institute
          is dedicated to providing quality technical education focused on
          modern computer technology and practical skills. The department
          aims to prepare students for the challenges of the digital world
          through industry-relevant curriculum and hands-on training.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our department emphasizes programming, networking, web development,
          database systems, and computer hardware to ensure that students gain
          both theoretical knowledge and real-world experience.
        </p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Mission */}
          <div className="border-l-4 border-green-600 bg-green-50 p-5 rounded">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700 text-sm">
              To develop skilled and ethical computer professionals by providing
              quality education, practical training, and continuous innovation
              in teaching and learning.
            </p>
          </div>

          {/* Vision */}
          <div className="border-l-4 border-green-600 bg-green-50 p-5 rounded">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700 text-sm">
              To become a leading computer technology department that produces
              competent graduates capable of contributing effectively to the
              national and global IT industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
