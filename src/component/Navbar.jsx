import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-gray-800">
            <a href="#Hero">Shubham</a>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-600">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-700 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50
  transform transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 px-6 py-20 font-medium text-gray-700">
          <a onClick={() => setIsOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setIsOpen(false)} href="#skills">
            Skills
          </a>
          <a onClick={() => setIsOpen(false)} href="#experience">
            Experience
          </a>
          <a onClick={() => setIsOpen(false)} href="#projects">
            Projects
          </a>
          <a onClick={() => setIsOpen(false)} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
