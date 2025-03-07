"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 to-black overflow-hidden shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="S.A. Mirza Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-orange-400 transition-all duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-400 transition-all duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-orange-400 transition-all duration-300">
              Expertise
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-orange-400 transition-all duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* My Blogs Button (Visible only on larger screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="https://shahzadmirza.com/blog/"
            className="text-white font-medium text-lg flex items-center gap-2 hover:text-orange-400 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>My Blogs</span>
          </Link>

          {/* Get Started Button */}
          <Link href="/contact">
            <button className="bg-orange-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-orange-300 transition-all duration-300 shadow-md">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 w-64 h-full bg-[#081830] text-white py-4 px-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <ul className="space-y-4 text-lg">
          <li>
            <Link
              href="/"
              className="block hover:text-yellow-400 transition-all duration-300"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:text-yellow-400 transition-all duration-300"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block hover:text-yellow-400 transition-all duration-300"
              onClick={closeMenu}
            >
              Expertise
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block hover:text-yellow-400 transition-all duration-300"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;