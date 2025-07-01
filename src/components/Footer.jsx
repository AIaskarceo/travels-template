export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-green-200 via-green-100 to-green-50 text-gray-800 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We help travelers explore the most beautiful and culturally rich destinations. From mountain treks to beach escapes, your next journey starts with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Destinations</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Packages</a></li>
            <li><a href="#" className="hover:text-green-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">📍 123 Wanderlust Road, Scenic Town</p>
          <p className="text-sm mb-2">📞 +91 98765 43210</p>
          <p className="text-sm mb-4">✉️ hello@travelwithus.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <a href="#"><i className="fab fa-facebook-f hover:text-green-600"></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-green-600"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-green-600"></i></a>
            <a href="#"><i className="fab fa-youtube hover:text-green-600"></i></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Travel With Us. All rights reserved.
      </div>
    </footer>
  );
}
