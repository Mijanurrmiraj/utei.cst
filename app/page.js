import HomeSlider from "@/components/HomeSlider";

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      {/* Slider */}
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
        {[
          ["1200+", "Students"],
          ["15+", "Teachers"],
          ["Modern", "Lab"],
          ["100%", "Practical"],
        ].map(([num, title], i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-5 text-center"
          >
            <h3 className="text-2xl font-bold text-green-700">{num}</h3>
            <p className="text-gray-600">{title}</p>
          </div>
        ))}
      </section>

      {/* Courses Preview */}
      <section className="bg-white py-10">
        <h2 className="text-center text-2xl font-bold text-green-700 mb-6">
          Our Courses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-16">
          {[
            "Computer Fundamentals",
            "Programming",
            "Web Design",
            "Networking",
          ].map((course, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 text-center hover:bg-green-50"
            >
              {course}
            </div>
          ))}
        </div>
      </section>

      {/* Teachers & Students */}
      <section className="py-10 px-4 md:px-16 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            Our Teachers
          </h3>
          <p className="text-gray-600">
            দক্ষ ও অভিজ্ঞ শিক্ষকমন্ডলী দ্বারা পরিচালিত।
          </p>
          <a className="text-green-600 font-semibold mt-2 inline-block">
            View Teachers →
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-green-700 mb-3">
            Our Students
          </h3>
          <p className="text-gray-600">
            প্রতিভাবান ও ভবিষ্যৎমুখী শিক্ষার্থীরা।
          </p>
          <a className="text-green-600 font-semibold mt-2 inline-block">
            View Students →
          </a>
        </div>
      </section>

      {/* Notice & Admission */}
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
