import HomeSlider from "../components/HomeSlider";

export default function HomePage() {
  return (
    <main className="bg-gray-50">

      {/* Gallery Slider */}
      <HomeSlider />

      {/* Welcome Section */}
      <section className="text-center py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">
          Welcome to Computer Department
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Upashahar Textile Engineering Institute এর Computer Department
          আধুনিক শিক্ষা, দক্ষ শিক্ষক এবং বাস্তবমুখী প্রশিক্ষণে বিশ্বাসী।
        </p>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-16 pb-10">
        <div className="bg-white rounded-xl shadow-md p-5 text-center">
          <h3 className="text-2xl font-bold text-green-700">1200+</h3>
          <p className="text-gray-600">Students</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 text-center">
          <h3 className="text-2xl font-bold text-green-700">15+</h3>
          <p className="text-gray-600">Teachers</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 text-center">
          <h3 className="text-2xl font-bold text-green-700">Modern</h3>
          <p className="text-gray-600">Lab</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 text-center">
          <h3 className="text-2xl font-bold text-green-700">100%</h3>
          <p className="text-gray-600">Practical</p>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-white py-10">
        <h2 className="text-center text-2xl font-bold text-green-700 mb-6">
          Our Courses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-16">
          <div className="border rounded-lg p-4 text-center">Computer Fundamentals</div>
          <div className="border rounded-lg p-4 text-center">Programming</div>
          <div className="border rounded-lg p-4 text-center">Web Design</div>
          <div className="border rounded-lg p-4 text-center">Networking</div>
        </div>
      </section>

      {/* Admission */}
      <section className="bg-green-700 text-white py-10 text-center">
        <h2 className="text-2xl font-bold">Admission Going On</h2>
        <p className="mt-2">Computer Department – 2026</p>
        <button className="mt-4 bg-white text-green-700 px-6 py-2 rounded-full font-semibold">
          Apply Now
        </button>
      </section>

    </main>
  );
}
