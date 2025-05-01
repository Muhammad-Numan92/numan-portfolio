"use client"; // This line makes this component a Client Component

import { useState } from "react";
import "./header.css";
import { FaCode } from "react-icons/fa6";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const IconComponent = FaCode;

  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between relative">
        <div className="flex items-center space-x-2 text-lg font-bold">
          <span className="text-teal-500 text-4xl">
            <IconComponent />
          </span>
          <span className="text-2xl bg-gradient-to-r from-teal-500 via-gray-300 to-pink-600 bg-clip-text text-transparent">
            Developer Numan
          </span>
        </div>
        {/* <button
          className="md:hidden flex items-center z-50"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button> */}
        {/* <ul
          className={`fixed inset-0 bg-gray-900 text-white md:relative md:flex md:space-x-4 md:space-y-0 space-y-4 md:space-y-0 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 z-40`}
        >
          <li>
            <a href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">Home</a>
          </li>
          <li>
            <a href="/about" className="block px-4 py-2 hover:bg-gray-700 rounded">About</a>
          </li>
          <li>
            <a href="/contact" className="block px-4 py-2 hover:bg-gray-700 rounded">Contact</a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}
