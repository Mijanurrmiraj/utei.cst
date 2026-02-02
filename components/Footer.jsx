export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Institute Info */}
        <div>
          <h3 className="text-lg font-bold text-green-700">
            Upashahar Textile Engineering Institute
          </h3>
          <p className="mt-2 text-sm">
            Computer Department <br />
            New Town 4, Sadar,Dinajpur, Bangladesh
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-2">
            Important Links
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="https://moedu.gov.bd"
                target="_blank"
                className="hover:underline"
              >
                Ministry of Education
              </a>
            </li>
            <li>
              <a
                href="https://bteb.gov.bd"
                target="_blank"
                className="hover:underline"
              >
                BTEB
              </a>
            </li>
            <li>
              <a href="/notice" className="hover:underline">
                Notice Board
              </a>
            </li>
            <li>
              <a href="/admission" className="hover:underline">
                Admission Info
              </a>
            </li>
          </ul>
        </div>

        {/* Developer Info */}
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-2">
            Developer
          </h3>
          <p className="text-sm">
            Developed by{"Miraj "}
            <a
              href="https://www.facebook.com/Mijanurrmiraj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-semibold hover:underline"
            >
              Miraj
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-700 text-white text-center text-sm py-3">
        © 2026 Upashahar Textile Engineering Institute. All rights reserved.
      </div>
    </footer>
  );
}
