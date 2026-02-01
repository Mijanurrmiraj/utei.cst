export default function Result() {
  return (
    <div className="max-w-xl mx-auto p-10 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
        Result
      </h2>

      <input
        className="w-full p-2 border mb-4"
        placeholder="Enter Roll / Registration No"
      />

      <button className="bg-green-700 text-white px-6 py-2">
        Search Result
      </button>

      <p className="mt-6 text-gray-600">
        Result will be published here.
      </p>
    </div>
  );
}
