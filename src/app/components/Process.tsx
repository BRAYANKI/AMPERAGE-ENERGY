"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Search,
  PenTool,
  Calculator,
  Wrench,
  Activity,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Energy Assessment",
    description:
      "We analyze your electricity bills, energy consumption, loads and operating profile to understand where your energy costs are coming from.",
    card: "bg-emerald-50 border-emerald-200",
    iconBg: "bg-emerald-600",
    numberColor: "text-emerald-200",
    accent: "text-emerald-700",
  },
  {
    number: "02",
    icon: Search,
    title: "Site Survey",
    description:
      "We assess the roof, structure, electrical system, available space, shading and other site conditions that affect system performance.",
    card: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-600",
    numberColor: "text-sky-200",
    accent: "text-sky-700",
  },
  {
    number: "03",
    icon: PenTool,
    title: "System Design",
    description:
      "We engineer the right solution including PV sizing, inverter selection, battery capacity, protection and system configuration.",
    card: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-500",
    numberColor: "text-amber-200",
    accent: "text-amber-700",
  },
  {
    number: "04",
    icon: Calculator,
    title: "Financial Analysis",
    description:
      "We show the expected energy savings, investment requirements, payback period and overall financial case before you commit.",
    card: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-600",
    numberColor: "text-violet-200",
    accent: "text-violet-700",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Installation",
    description:
      "Our team professionally installs, tests and commissions the system to ensure it is safe, reliable and ready for operation.",
    card: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-600",
    numberColor: "text-orange-200",
    accent: "text-orange-700",
  },
  {
    number: "06",
    icon: Activity,
    title: "Monitoring & O&M",
    description:
      "We continue supporting your system through performance monitoring, maintenance and technical support long after commissioning.",
    card: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-600",
    numberColor: "text-teal-200",
    accent: "text-teal-700",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 lg:py-28">
      {/* Background decoration */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-green-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-green-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
            How We Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            From Energy Assessment to{" "}
            <span className="text-green-700">
              Long-Term Performance.
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Every Amperage project follows a structured engineering process.
            We understand your energy requirements first, then design,
            install and support a system built around your needs.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-emerald-300 via-amber-300 to-teal-300"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -8 }}
                  className={`group relative rounded-2xl border p-7 shadow-sm hover:shadow-xl transition-all duration-300 ${step.card}`}
                >
                  {/* Number + icon */}
                  <div className="relative flex items-center justify-between mb-7">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${step.iconBg}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <span
                      className={`text-5xl font-black ${step.numberColor}`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step indicator */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-semibold ${step.accent}`}
                  >
                    <span>Step {index + 1}</span>

                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Bottom accent */}
                  <div
                    className={`absolute bottom-0 left-7 right-7 h-1 rounded-full opacity-40 ${step.iconBg}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-2xl bg-green-950 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-green-300 text-sm font-bold tracking-[0.15em] uppercase">
              Ready to get started?
            </p>

            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white">
              Let's understand your energy profile.
            </h3>

            <p className="mt-2 text-green-100/70">
              Start with an assessment before making an investment.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-green-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 whitespace-nowrap"
          >
            Start My Energy Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}