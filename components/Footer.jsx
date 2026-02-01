"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">

        <div>
          <h3 className="font-bold mb-2">
            Upashahar Textile Engineering Institute
          </h3>
          <p>Computer Department</p>
          <p>Dinajpur, Bangladesh</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Important Links</h3>
          <ul className="space-y-1">
            <li><a href="https://moedu.gov.bd" target="_blank">Ministry of Education</a></li>
            <li><a href="https://bteb.gov.bd" target="_blank">BTEB</a></li>
            <li><a href="https://www.dte.gov.bd" target="_blank">Directorate of Technical Education</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p>Phone: 01XXXXXXXXX</p>
          <p>Email: info@utei.edu.bd</p>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t">
        © {new Date().getFullYear()} Upashahar Textile Engineering Institute
      </div>
    </footer>
  );
}
