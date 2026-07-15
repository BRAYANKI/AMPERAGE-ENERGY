export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-green-500">
              Amperage Energy
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Delivering reliable and sustainable solar energy solutions for
              homes, businesses, and industries across East Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Solar Installation</li>
              <li>Battery Storage</li>
              <li>Maintenance</li>
              <li>Energy Audits</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              5-Star, Mbuni Drive
            </p>

            <p className="text-gray-400">
              Garden City, Nairobi
            </p>

            <p className="mt-3 text-gray-400">
              +254 020 200 0700
            </p>

            <p className="text-gray-400">
              info@yegosun.com
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Amperage Energy. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}