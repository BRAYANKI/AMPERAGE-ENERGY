"use client";

import { motion } from "framer-motion";
import {
  CircleDollarSign,
  ShieldCheck,
  BatteryCharging,
  Fuel,
  Activity,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: CircleDollarSign,
    title: "Reduce Electricity Expenditure",
    description:
      "Generate more of your own power and reduce your dependence on expensive grid electricity.",
  },
  {
    icon: ShieldCheck,
    title: "Protect Critical Loads",
    description:
      "Keep essential equipment and operations running with properly designed solar and battery systems.",
  },
  {
    icon: BatteryCharging,
    title: "Store Excess Solar Energy",
    description:
      "Capture surplus solar generation and use stored energy when you need it most.",
  },
  {
    icon: Fuel,
    title: "Reduce Generator Dependence",
    description:
      "Lower fuel consumption and generator operating costs by using cleaner and smarter energy sources.",
  },
  {
    icon: Activity,
    title: "Improve Energy Resilience",
    description:
      "Build a more predictable and reliable energy system that supports your operations today and in the future.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function SolarBenefits() {
  return (
    <section className="relative overflow-hidden bg-green-950 py-24 lg:py-28">
      {/* Background Decoration */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-800/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-green-900/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-300">
            The Value of Solar
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
            What Can Solar Do
            <span className="text-green-300"> for Your Facility?</span>
          </h2>

          <p className="mt-6 text-lg text-green-100/80 leading-relaxed">
            Solar isn't just about installing panels. When properly engineered,
            it can help reduce operating costs, protect critical operations,
            and give you greater control over how your energy is produced and
            consumed.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group rounded-2xl bg-white/10 border border-white/10 hover:border-green-400/40 hover:bg-white/[0.14] p-6 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-400/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-green-300" />
                </div>

                {/* Number */}
                <p className="text-xs font-bold tracking-widest text-green-400 mb-3">
                  0{benefits.indexOf(benefit) + 1}
                </p>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm text-green-100/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-8"
        >
          <div>
            <p className="text-white font-semibold text-lg">
              Your energy system should work for your business.
            </p>

            <p className="mt-1 text-green-100/70">
              Let's determine what solar can do for your facility.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-green-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 whitespace-nowrap"
          >
            Get My Solar Assessment

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}