"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ArrowRight,
  Home,
  Users,
  Sun,
  FolderKanban,
  Mail,
} from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: Users,
  },
  {
    name: "Services",
    href: "/services",
    icon: Sun,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Why Choose Us",
    href: "/why-choose-us",
    icon: Sun,
  },
  {
    name: "Contact Us",
    href: "/contacts",
    icon: Mail,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ===================================================== */}
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="h-[92px] flex items-center">

            {/* =================================================
                BRAND / LOGO
            ================================================= */}
            <Link
              href="/"
              aria-label="Amperage Energy Home"
              className="flex items-center gap-4 group shrink-0"
              onClick={closeMenu}
            >
              <div className="relative w-[78px] h-[78px] flex items-center justify-center">
                <Image
                  src="/logoo.png"
                  alt="Amperage Energy Logo"
                  width={78}
                  height={78}
                  priority
                  className="
                    w-full
                    h-full
                    object-contain
                    scale-[1.35]
                    transition-transform
                    duration-300
                    group-hover:scale-[1.45]
                  "
                />
              </div>

              <div className="leading-none">
                <h1
                  className="
                    text-[27px]
                    font-extrabold
                    tracking-[0.03em]
                    text-gray-900
                  "
                >
                  AMPERAGE
                </h1>

                <p
                  className="
                    mt-2
                    text-[11px]
                    tracking-[0.48em]
                    text-green-600
                    font-bold
                  "
                >
                  ENERGY
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}
            <div className="hidden lg:flex items-center ml-auto">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="
                        relative
                        py-3
                        text-[15px]
                        font-semibold
                        text-gray-700
                        hover:text-green-700
                        transition-colors
                        duration-300
                        group
                      "
                    >
                      {link.name}

                      <span
                        className="
                          absolute
                          left-0
                          -bottom-0.5
                          h-0.5
                          w-0
                          bg-green-600
                          group-hover:w-full
                          transition-all
                          duration-300
                        "
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* =================================================
                  RIGHT ACTIONS
              ================================================= */}
              <div className="flex items-center gap-5 ml-9">

                {/* Call Us */}
                <a
                  href="tel:+254741480031"
                  className="
                    flex
                    items-center
                    gap-2
                    text-[15px]
                    font-semibold
                    text-gray-700
                    hover:text-green-700
                    transition-colors
                  "
                >
                  <Phone className="w-[18px] h-[18px] text-green-600" />
                  <span>Call Us</span>
                </a>

                {/* Get a Quote */}
                <Link
                  href="/contacts"
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    bg-green-700
                    hover:bg-green-800
                    text-white
                    px-6
                    py-3.5
                    rounded-xl
                    text-[15px]
                    font-bold
                    shadow-md
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  <span>Get a Quote</span>

                  <ArrowRight
                    className="
                      w-[18px]
                      h-[18px]
                      group-hover:translate-x-1
                      transition-transform
                      duration-300
                    "
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              className="
                lg:hidden
                ml-auto
                p-2.5
                rounded-xl
                text-gray-700
                hover:bg-gray-100
                hover:text-green-700
                transition
              "
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="
                fixed
                inset-0
                bg-black/50
                backdrop-blur-sm
                z-[60]
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Mobile Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="
                fixed
                top-0
                right-0
                h-full
                w-[88%]
                max-w-sm
                bg-white
                z-[70]
                shadow-2xl
              "
              aria-label="Mobile navigation"
            >

              {/* =================================================
                  MOBILE HEADER
              ================================================= */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  border-b
                  border-gray-100
                "
              >
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-3"
                >
                  <div className="relative w-[55px] h-[55px] flex items-center justify-center">
                    <Image
                      src="/logoo.png"
                      alt="Amperage Energy Logo"
                      width={55}
                      height={55}
                      className="w-full h-full object-contain scale-[1.25]"
                    />
                  </div>

                  <div className="leading-none">
                    <p className="text-lg font-extrabold tracking-wide text-gray-900">
                      AMPERAGE
                    </p>

                    <p className="mt-1.5 text-[9px] tracking-[0.35em] text-green-600 font-bold">
                      ENERGY
                    </p>
                  </div>
                </Link>

                <button
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="
                    p-2.5
                    rounded-xl
                    text-gray-700
                    hover:bg-gray-100
                    hover:text-green-700
                    transition
                  "
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* =================================================
                  MOBILE LINKS
              ================================================= */}
              <div className="px-6 py-8">
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-gray-400
                    font-semibold
                    mb-5
                  "
                >
                  Navigation
                </p>

                <ul className="space-y-2">
                  {navLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="
                            flex
                            items-center
                            gap-4
                            px-4
                            py-4
                            rounded-xl
                            text-gray-700
                            font-semibold
                            hover:bg-green-50
                            hover:text-green-700
                            transition-all
                            duration-200
                          "
                        >
                          <Icon className="w-5 h-5 text-green-600" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* =================================================
                    MOBILE CTA
                ================================================= */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    href="/contacts"
                    onClick={closeMenu}
                    className="
                      group
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-green-700
                      hover:bg-green-800
                      text-white
                      py-4
                      rounded-xl
                      font-bold
                      shadow-md
                      hover:shadow-lg
                      transition-all
                      duration-300
                    "
                  >
                    <span>Get a Quote</span>

                    <ArrowRight
                      className="
                        w-5
                        h-5
                        group-hover:translate-x-1
                        transition-transform
                      "
                    />
                  </Link>

                  <a
                    href="tel:+254700000000"
                    className="
                      mt-5
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-sm
                      font-semibold
                      text-gray-600
                      hover:text-green-700
                      transition
                    "
                  >
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>Call Amperage Energy</span>
                  </a>
                </div>
              </div>

              {/* =================================================
                  MOBILE FOOTER
              ================================================= */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  px-6
                  py-5
                  bg-gray-50
                  border-t
                  border-gray-100
                "
              >
                <p className="text-xs text-center text-gray-500">
                  Powering a Sustainable Future
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
