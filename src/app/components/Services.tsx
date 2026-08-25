"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Sun,
  BatteryCharging,
  Wrench,
  ThermometerSun,
  Zap,
  ArrowRight,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    image: "/solarplates.jpeg",
    icon: <Sun className="w-6 h-6" />,
    title: "Solar Installation",
    description:
      "Professional solar PV installation for homes, businesses, institutions, and other energy-intensive facilities.",
  },
  {
    image: "/Inverter.jpeg",
    icon: <BatteryCharging className="w-6 h-6" />,
    title: "Inverter & Battery Systems",
    description:
      "Reliable inverter and battery storage solutions designed to provide efficient energy management and dependable backup power.",
  },
  {
    image: "/heatpump.jpeg",
    icon: <ThermometerSun className="w-6 h-6" />,
    title: "Heat Pump Solutions",
    description:
      "Energy-efficient heat pump systems for hot water and heating applications, helping reduce energy consumption and operating costs.",
  },
  {
    image: "/maintainance.jpeg",
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance & Support",
    description:
      "Professional maintenance, inspections, troubleshooting, and technical support to keep your energy systems performing efficiently.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Energy
            <span className="text-green-700"> Solutions</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            From solar power generation and energy storage to heat pump
            solutions and system maintenance, we provide practical energy
            solutions designed around your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Service Icon */}
                <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>

                {/* Image Title */}
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="group/link mt-6 inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Energy Audit Feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-2xl bg-green-900"
        >
          <div className="grid lg:grid-cols-[auto_1fr_auto] items-center gap-6 p-7 md:p-9">

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <ClipboardCheck className="w-8 h-8 text-green-300" />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-300">
                Energy Efficiency
              </p>

              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
                Energy Audits & Consultation
              </h3>

              <p className="mt-3 text-green-100/80 leading-relaxed max-w-3xl">
                We assess how energy is being consumed, identify areas of
                inefficiency, and recommend practical ways to reduce energy
                waste and improve overall system performance.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Request an Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-600">
            Looking for the right energy solution for your home or business?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 bg-green-700 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Talk to Our Team
            <Zap className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}