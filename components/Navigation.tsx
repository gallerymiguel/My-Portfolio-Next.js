"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-cyan-400 transition-colors">
          My Portfolio
        </Link>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
          } lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto absolute top-full left-0 w-full bg-gray-900 lg:static lg:w-auto lg:flex transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">
            {[
              { href: "/", label: "About Me" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/contact", label: "Contact" },
              { href: "/resume", label: "Resume" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 px-3 rounded hover:bg-cyan-600 hover:text-white transition-colors"
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
