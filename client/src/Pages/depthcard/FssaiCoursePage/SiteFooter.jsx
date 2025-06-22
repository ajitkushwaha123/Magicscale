// src/components/Footer/SiteFooter.jsx
import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 md:px-20 mt-20 pb-32 md:pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-4">MagicScale Legal</h4>
          <p>
            Empowering food businesses across India with expert license consultation, compliance support, and document management.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/fssai-license" className="hover:underline">FSSAI License</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li>Email: support@magicscale.in</li>
            <li>Phone: +91 8069029400</li>
            <li>Hours: 10AM - 6PM (Mon-Sat)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} MagicScale Legal. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
