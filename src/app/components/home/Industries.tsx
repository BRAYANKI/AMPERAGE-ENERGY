"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Homes",
    description:
      "Smarter energy solutions for homes looking to reduce electricity costs and improve energy independence.",
    image: "/home.jpg",
  },
  {
    title: "Businesses",
    description:
      "Reliable energy systems designed to reduce operating costs and support business continuity.",
    image: "/business.jpg",
  },
  {
    title: "Industrial",
    description:
      "High-performance energy solutions designed around demanding industrial operations.",
    image: "/industry.jpg",
  },
  {
    title: "Institutions",
    description:
      "Practical energy systems for schools, universities, offices, and other facilities.",
    image: "/institution.jpg",
  },
  {
    title: "Healthcare",
    description:
      "Energy solutions designed around critical loads, reliability, and uninterrupted operations.",
    image: "/hospital.jpg",
  },
  {
    title: "Hospitality",
    description:
      "Efficient energy solutions for hotels, lodges, restaurants, and hospitality facilities.",
    image: "/hotel.jpg",
  },
];

export default function Industries() {
  return (
    <section className="relative bg-gray-50 py-24 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
            Who We Serve
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Energy solutions for
            <span className="text-green-700"> the way you operate.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From homes to industrial facilities, we design energy systems
            around your consumption, operating environment, and long-term
            energy goals.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
              <div className="relative h-[390px] overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-500">
                {/* Background image */}
                <Image
                  src={industry.image}
                  alt={`${industry.title} energy solutions`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

                {/* Card content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/80 max-w-sm">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-7 md:p-8 rounded-2xl bg-green-950 text-white"
        >
          <div>
            <p className="text-xl md:text-2xl font-bold">
              Not sure which solution fits your operation?
            </p>

            <p className="mt-2 text-green-100/80">
              Let's understand your energy needs and recommend the right
              approach.
            </p>
          </div>

          <Link
            href="/contacts"
            className="group inline-flex items-center gap-2 shrink-0 bg-white text-green-900 px-6 py-3.5 rounded-xl font-bold hover:bg-green-50 transition-all duration-300"
          >
            Talk to Our Team

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}