export default function HomePage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="bg-green-700 text-white py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Upashahar Textile Engineering Institute
            </h1>
            <h2 className="text-xl mb-4">Computer Department</h2>
            <p className="mb-6 text-green-100">
              Govt. Approved | Modern Lab | Skilled Teachers
            </p>

            <div className="flex gap-4">
              <a
                href="/admission"
                className="bg-white text-green-700 px-5 py-2 rounded font-semibold"
              >
                Admission Open
              </a>
              <a
                href="/courses"
                className="border border-white px-5 py-2 rounded"
              >
                View Courses
              </a>
            </div>
          </div>

          <div>
            <img
              src="/gallery/hero.jpg"
              alt="Institute"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-2xl font-bold text-green-700">500+</h3>
            <p>Students</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-2xl font-bold text-green-700">20+</h3>
            <p>Teachers</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-2xl font-bold text-green-700">3</h3>
            <p>Computer Labs</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-2xl font-bold text-green-700">95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {/* NOTICE */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Latest Notices
          </h2>
          <ul className="space-y-2">
            <li>📌 Admission Notice 2026</li>
            <li>📌 Semester Exam Routine Published</li>
            <li>📌 Result Available</li>
          </ul>
          <a href="/notice" className="text-green-700 font-semibold mt-3 inline-block">
            View All Notices →
          </a>
        </div>
      </section>

      {/* ABOUT DEPARTMENT */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-green-700">
            Why Computer Department?
          </h2>
          <p>
            We provide practical based education, modern syllabus and industry
            focused computer technology training to prepare students for real
            world jobs.
          </p>
        </div>
      </section>

      {/* HOD MESSAGE */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
          <img
            src="/teachers/hod.jpg"
            alt="HOD"
            className="rounded shadow"
          />
          <div>
            <h3 className="text-xl font-bold mb-2 text-green-700">
              Message from Head of Department
            </h3>
            <p>
              Our goal is to build skilled computer professionals with strong
              ethical values and technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY SLIDER (Simple Version) */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-green-700">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/gallery/1.jpg" className="rounded" />
            <img src="/gallery/2.jpg" className="rounded" />
            <img src="/gallery/3.jpg" className="rounded" />
            <img src="/gallery/4.jpg" className="rounded" />
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <section className="bg-green-700 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Admission Going On – 2026
        </h2>
        <a
          href="/admission"
          className="bg-white text-green-700 px-6 py-2 rounded font-semibold"
        >
          Apply Now
        </a>
      </section>

    </main>
  );
}
