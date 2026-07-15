"use client";

import { motion, type Variants } from "framer-motion";
import {
  Sun,
  BatteryCharging,
  Zap,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <Sun className="w-12 h-12 text-green-600" />,
    title: "Solar Installation",
    description:
      "Professional solar panel installation for homes, businesses, and institutions.",
  },
  {
    icon: <BatteryCharging className="w-12 h-12 text-green-600" />,
    title: "Battery Storage",
    description:
      "Reliable energy storage systems for uninterrupted power supply day and night.",
  },
  {
    icon: <Zap className="w-12 h-12 text-green-600" />,
    title: "Energy Audits",
    description:
      "Optimize your electricity consumption with detailed energy assessments.",
  },
  {
    icon: <Wrench className="w-12 h-12 text-green-600" />,
    title: "Maintenance",
    description:
      "Routine maintenance and technical support to keep your solar systems efficient.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
  duration: 0.6,
},
  },
};

export default function Services() {
  return (
    <section
  id="services"
  className="py-24 bg-white"
>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver innovative renewable energy solutions tailored to homes,
            businesses, industries, and institutions.
          </p>

        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl"
            >
              <div className="mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}