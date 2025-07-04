import './Footer.css';

export default function Footer() {
  return (
    <footer className="relative foot-bg text-white pt-12 pb-8 px-6 poppins-i">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed text-gray-200">
            We help travelers explore the most beautiful and culturally rich destinations. From mountain treks to beach escapes, your next journey starts with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Destinations</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Packages</a></li>
            <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-200 space-y-2">
            <li>📍 123 Wanderlust Road, Scenic Town</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ hello@travelwithus.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-green-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-green-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-green-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-green-400"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Travel With Us. All rights reserved.
      </div>
    </footer>
  );
}
