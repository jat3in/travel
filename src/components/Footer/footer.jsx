
import { Luggage } from 'lucide-react';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="container mx-auto flex flex-col items-center ">
        {/* Logo Section */}
        <div>
        <a href="#" className="flex items-center gap-x-2">
          <span className="flex items-center justify-center text-black rounded-full bg-primary p-1">
            <Luggage />
          </span>
          <span className="font-medium text-white">Bharat Travel</span>
        </a>
      </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center space-x-6 mb-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/destinations" className="hover:underline">Destinations</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>

        {/* Social Media Links  */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-blue-500">
            <i className="fab fa-facebook-f">faceboook Link</i> 
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <i className="fab fa-twitter">Tweeter Link</i> 
          </a>
          <a href="https://instagram.com" className="hover:text-pink-500">
            <i className="fab fa-instagram">Instagram Link</i> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
