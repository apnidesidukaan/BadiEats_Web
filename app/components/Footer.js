import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
//===============================================================================
const Footer = () => {
  //===============================================================================
  return (
    <footer className="bg-gradient-to-r shadow rounded from-[#dec9b5]/80 via-[#FFFAF0]/80 to-[#FFFAF0]/80 text-primary-text">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src="/logo.jpg" alt="logo" className="w-24 mb-4 rounded-full" />
          <h4 className="text-2xl font-bold mb-2">Badi Eats</h4>
          <p className="text-sm leading-relaxed text-gray-700">
            From Local Hustle to Global Muscle — powering businesses across
            industries with cutting-edge solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Resources</h5>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Stay Connected</h5>
          <p className="text-sm mb-4 text-gray-700">
            Get the latest updates and insights from the world of smart business.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 border-2 border-accent  rounded-full bg-blue-500 text-white transition-colors"><FaFacebookF /></a>
            <a href="#" className="p-2 border-2 border-accent rounded-full bg-pink-500 text-white transition-colors"><FaInstagram /></a>
            <a href="#" className="p-2 border-2 border-accent rounded-full bg-sky-400 text-white transition-colors"><FaTwitter /></a>
            <a href="#" className="p-2 border-2 border-accent rounded-full bg-blue-700 text-white transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} <strong>Badi Eats</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
