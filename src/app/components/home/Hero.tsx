"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
>
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/solar-bg.jpg')] bg-cover bg-center"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative max-w-7xl mx-auto px-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Powering a
          <span className="text-green-700"> Sustainable Future</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Innovative solar energy solutions for homes, businesses and industries
          across East Africa.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition">
            Get Started
          </button>

          <button className="border border-green-700 text-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition">
            Our Services
          </button>
        </div>
      </motion.div>
    </section>
  );
}