export const metadata = {
  title: "Contact | UTEI Computer Department",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Computer Department – Upashahar Textile Engineering Institute
      </p>

      {/* Contact Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Get in Touch
          </h2>

          <p className="text-gray-700">
            📍 <strong>Address:</strong> Upashahar Textile Engineering Institute,
            Dinajpur, Bangladesh
          </p>

          <p className="text-gray-700">
            📞 <strong>Phone:</strong> 01XXXXXXXXX
          </p>

          <p className="text-gray-700">
            ✉️ <strong>Email:</strong> info@utei.edu.bd
          </p>

          <p className="text-gray-600 text-sm">
            Office hours: Sunday – Thursday (9:00 AM – 4:00 PM)
          </p>
        </div>

        {/* Google Map */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Dinajpur,Bangladesh&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
