"use client"; // Optional if you add hooks later

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-3">
      <div className="flex justify-center mb-2 space-x-6">
        <a
          href="https://github.com/gallerymiguel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/miguelurdialesgallery/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/miguel__urdiales/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Miguel Urdiales. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
