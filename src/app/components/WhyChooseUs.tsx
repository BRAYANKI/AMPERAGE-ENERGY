"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Settings2,
  Calculator,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: BarChart3,
    number: "01",
    title: "We Start With Your Energy Profile",
    description:
      "We don't begin with a panel catalogue. We begin by understanding your electricity consumption, operating patterns, critical loads, and energy challenges.",
  },
  {
    icon: Settings2,
    number: "02",
    title: "Systems Designed Around You",
    description:
      "Every system is sized around your actual requirements, future energy needs, available space, and the way your facility operates.",
  },
  {
    icon: Calculator,
    number: "03",
    title: "Clear Investment Economics",
    description:
      "Before you commit, we help you understand expected savings, system requirements, investment costs, and the potential payback of your energy solution.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Support Beyond Installation",
    description:
      "Our relationship doesn't end at commissioning. We provide monitoring, maintenance, technical support, and guidance to help keep your system performing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-70"
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gray-50 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
            Why Amperage
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose
            <span className="text-green-700"> Amperage?</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We don't just sell solar equipment. We engineer energy solutions
            around your business, your consumption, and your long-term
            requirements.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <div className="p-8 md:p-10 rounded-2xl bg-green-950 text-white shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 border border-green-400/20 flex items-center justify-center mb-7">
                <CheckCircle2 className="w-7 h-7 text-green-300" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Energy Engineering,
                <span className="block text-green-300">
                  Not Just Equipment Supply.
                </span>
              </h3>

              <p className="mt-6 text-green-100/80 leading-relaxed">
                The right energy system isn't necessarily the system with the
                most panels or the biggest battery. It's the system that makes
                sense for your actual energy requirements.
              </p>

              <p className="mt-5 text-green-100/80 leading-relaxed">
                That's why our approach starts with understanding your energy
                profile before recommending a solution.
              </p>

              <a
                href="/contacts"
                className="group inline-flex items-center gap-2 mt-8 bg-white text-green-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
              >
                Talk to Our Energy Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Reasons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="space-y-5"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 25,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{ x: 6 }}
                  className="group flex gap-5 p-6 md:p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-green-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest text-green-600">
                        {reason.number}
                      </span>

                      <h3 className="text-lg md:text-xl font-bold text-gray-900">
                        {reason.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          <div>
            <p className="text-xl font-bold text-gray-900">
              Your energy system should work for you.
            </p>

            <p className="mt-1 text-gray-600">
              Let's engineer a solution around your actual energy needs.
            </p>
          </div>

          <a
            href="/contacts"
            className="group inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
          >
            Start Your Energy Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}