// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Finland Office */}
          <div>
            <h3 className="text-xl font-bold mb-4">Finland Office</h3>
            <p className="text-gray-300">Kotikylantie 4 F 8502770</p>
            <p className="text-gray-300">Espoo, Finland</p>
            <p className="mt-2">
              <Link href="tel:+358451777909" className="hover:underline text-gray-300">
                Contact: +358451777909
              </Link>
            </p>
            <p>
              <Link href="mailto:rahimucharity@gmail.com" className="hover:underline text-gray-300">
                Email: rahimucharity@gmail.com
              </Link>
            </p>
          </div>

          {/* Ghana Office */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ghana Office</h3>
            <p className="text-gray-300">P.O.Box KS 16203- Adum</p>
            <p className="text-gray-300">Kumasi - Ghana</p>
            <p className="mt-2">
              <Link href="tel:+223257191337" className="hover:underline text-gray-300">
                Contact: +223257191337
              </Link>
            </p>
            <p>
              <Link href="mailto:rahimucharity@gmail.com" className="hover:underline text-gray-300">
                Email: rahimucharity@gmail.com
              </Link>
            </p>
          </div>

          {/* Social Networks */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-3xl text-gray-300 hover:text-white transition-colors duration-300" />
              </Link>
              <Link href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-3xl text-gray-300 hover:text-white transition-colors duration-300" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-3xl text-gray-300 hover:text-white transition-colors duration-300" />
              </Link>
            </div>
            <p className="mt-8 text-sm text-gray-400 text-center md:text-left">
              © 2024 - 2025 All rights reserved. <Link href="https://www.rahimucharity.org" className="hover:underline">rahimucharity.org</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;