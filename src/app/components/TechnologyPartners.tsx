"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Zap,
  ArrowRight,
} from "lucide-react";

const partners = [
  {
    name: "DEYE",
    image: "/Deye.png",
  },
  {
    name: "SRNE",
    image: "/srne.png",
  },
  {
    name: "SOLIS",
    image: "/solis.png",
  },
  {
    name: "FOX ESS",
    image: "/Fox ess.png",
  },
  {
    name: "JINKO",
    image: "/jinko.png",
  },
  {
    name: "LONGi",
    image: "/longi.png",
  },
  {
    name: "HUAWEI",
    image: "/huawei.png",
  },
];

export default function TechnologyPartners() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-green-100/50 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
            Technology Partners
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            We Select the Right{" "}
            <span className="text-green-700">
              Technology Partners.
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            We work with established global technology manufacturers to
            deliver reliable, efficient and scalable energy systems.
          </p>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-2 text-sm font-medium text-green-800">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            Proven Technology
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-2 text-sm font-medium text-green-800">
            <Award className="w-4 h-4 text-green-600" />
            Quality Components
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-2 text-sm font-medium text-green-800">
            <Zap className="w-4 h-4 text-green-600" />
            System Compatibility
          </div>
        </motion.div>

        {/* Partner Logos */}
        <div className="mt-14 relative overflow-hidden">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Scrolling logos */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="mx-3 md:mx-4 w-40 md:w-48 h-24 rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center px-5 hover:bg-white hover:border-green-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-16">
                  <Image
                    src={partner.image}
                    alt={`${partner.name} technology partner`}
                    fill
                    sizes="(max-width: 768px) 160px, 192px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200 pt-8"
        >
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-gray-900">
              The right technology makes a difference.
            </p>

            <p className="mt-1 text-gray-500">
              We select components based on your energy requirements,
              not simply what is available.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 whitespace-nowrap"
          >
            Discuss Your Energy System
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}