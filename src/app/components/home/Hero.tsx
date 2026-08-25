"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sun } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/solar-bg.jpg')] bg-cover bg-center"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/60 via-transparent to-black/20" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center"
      >
        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm text-white text-sm font-medium"
        >
          <Sun className="w-4 h-4 text-yellow-300" />
          Reliable Solar Energy Solutions
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-5xl mx-auto"
        >
          Powering a
          <span className="block text-green-300">
            Sustainable Future
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
        >
          Innovative and reliable solar energy solutions for homes,
          businesses, and institutions across East Africa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-green-800 transition-all duration-300"
          >
            Explore Our Services
          </a>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-sm text-gray-200"
        >
          Clean Energy • Professional Installation • Reliable Support
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/80 hover:text-white transition"
        aria-label="Scroll to About section"
      >
        <span className="text-xs mb-2 tracking-widest uppercase">
          Explore
        </span>

        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}