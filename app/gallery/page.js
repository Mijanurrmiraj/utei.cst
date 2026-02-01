export const metadata = {
  title: "Gallery | UTEI Computer Department",
};

export default function GalleryPage() {
  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-4">
        Gallery
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Computer Department – Upashahar Textile Engineering Institute
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
