export default function Admission() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Online Admission Form
      </h2>

      <form className="space-y-4">
        <input className="w-full p-2 border" placeholder="Student Name" />
        <input className="w-full p-2 border" placeholder="Father's Name" />
        <input className="w-full p-2 border" placeholder="Mother's Name" />
        <input className="w-full p-2 border" placeholder="Phone Number" />
        <input className="w-full p-2 border" placeholder="SSC Result / GPA" />
        <select className="w-full p-2 border">
          <option>Select Course</option>
          <option>Computer Department</option>
        </select>
        <button className="bg-green-700 text-white px-6 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}
