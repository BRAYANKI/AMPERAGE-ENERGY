
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <nav
  aria-label="Main navigation"
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/80 backdrop-blur-lg shadow-xl"
      : "bg-white shadow-md"
  }`}
>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
  <Image
    src="/logoo.png"
    alt="Amperage Energy"
    width={150}
    height={150}
    priority
  />

  <div>
    <h1 className="text-xl font-bold tracking-wide text-gray-900">
      AMPERAGE
    </h1>

    <p className="text-xs tracking-[0.3em] text-green-600 font-semibold">
      ENERGY
    </p>
  </div>
</a>

        {/* Navigation Links */}
    <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">

  <li>
    <a
  href="#home"
  className="hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded transition-colors"
>
      Home
    </a>
  </li>

  <li>
    <a
  href="#about"
  className="hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded transition-colors"
>
      About
    </a>
  </li>

  <li>
    <a
  href="#services"
  className="hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded transition-colors"
>
      Services
    </a>
  </li>

  <li>
    <a
  href="#projects"
  className="hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded transition-colors"
>
      Projects
    </a>
  </li>

  <li>
    <a
  href="#contact"
  className="hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded transition-colors"
>
      Contact
    </a>
  </li>

</ul>

        {/* Desktop CTA */}

<button className="hidden md:flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition">
  
  Get a Quote
</button>

{/* Mobile Menu Button */}

<button
  onClick={() => setIsOpen(true)}
  className="md:hidden text-gray-700"
>
  <Menu className="w-8 h-8" />
</button>

      </div>
      <AnimatePresence>
  {isOpen && (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 p-8"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-7 h-7 text-gray-700" />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="mt-10 space-y-6 text-lg font-medium text-gray-700">

          <li onClick={() => setIsOpen(false)} className="hover:text-green-700 cursor-pointer">
            Home
          </li>

          <li onClick={() => setIsOpen(false)} className="hover:text-green-700 cursor-pointer">
            About
          </li>

          <li onClick={() => setIsOpen(false)} className="hover:text-green-700 cursor-pointer">
            Services
          </li>

          <li onClick={() => setIsOpen(false)} className="hover:text-green-700 cursor-pointer">
            Projects
          </li>

          <li onClick={() => setIsOpen(false)} className="hover:text-green-700 cursor-pointer">
            Products
          </li>

          <li onClick={() => setIsOpen(false)} className="hover:text-green-700 cursor-pointer">
            Blog
          </li>

          <li onClick={() => setIsOpen(false)} className="hover:text-green-700 cursor-pointer">
            Contact
          </li>

        </ul>

        {/* CTA Button */}
        <button
          className="mt-10 w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg transition"
        >
          
          Get a Quote
        </button>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </nav>
  );
}