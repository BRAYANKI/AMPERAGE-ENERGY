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
      "Professionally engineered solar PV systems designed around your electricity consumption, operating patterns, available space, and future energy requirements.",
    cta: "Get My Solar Assessment",
  },
  {
    image: "/Inverter.jpeg",
    icon: <BatteryCharging className="w-6 h-6" />,
    title: "Inverter & Battery Systems",
    description:
      "Smart inverter and battery storage solutions that help reduce grid dependence, protect critical loads, manage energy efficiently, and provide reliable backup power.",
    cta: "Get My Energy Savings",
  },
  {
    image: "/heatpump.jpeg",
    icon: <ThermometerSun className="w-6 h-6" />,
    title: "Heat Pump Solutions",
    description:
      "Energy-efficient heat pump systems for hot water applications, engineered to reduce electricity consumption and lower long-term operating costs.",
    cta: "Calculate My Hot Water Savings",
  },
  {
    image: "/maintainance.jpeg",
    icon: <Wrench className="w-6 h-6" />,
    title: "Maintenance & Support",
    description:
      "Professional inspections, preventive maintenance, troubleshooting, and technical support to keep your energy system performing efficiently long after commissioning.",
    cta: "Keep Your System Performing",
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
            Energy Solutions
            <span className="text-green-700"> Built Around You</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            We don't begin with a product catalogue. We begin with your
            energy profile — understanding how you consume electricity,
            where costs are coming from, and what your facility needs to
            operate reliably.
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  {service.cta}

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
          className="relative mt-10 overflow-hidden rounded-2xl min-h-[380px] md:min-h-[420px]"
        >
          {/* Background Image */}
          <Image
            src="/energy-audit.jpg"
            alt="Energy audits and consultation"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/80 to-green-950/40" />

          {/* Energy Audit Content */}
          <div className="relative z-10 min-h-[380px] md:min-h-[420px] flex items-center">
            <div className="max-w-3xl p-7 md:p-12">

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <ClipboardCheck className="w-7 h-7 text-green-300" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-green-300">
                Energy Efficiency
              </p>

              <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
                Energy Audits & Consultation
              </h3>

              <p className="mt-5 text-base md:text-lg text-green-50/90 leading-relaxed">
                Find out where your money is going before you invest in
                solar. We analyze your electricity consumption, operating
                patterns, and energy-intensive loads to identify
                opportunities to reduce costs and improve efficiency.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center justify-center gap-2 bg-white text-green-800 px-6 py-3.5 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg"
              >
                Find Out Where Your Money Is Going
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
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
            Not sure which energy solution is right for you?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 bg-green-700 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Talk to Our Energy Team
            <Zap className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}