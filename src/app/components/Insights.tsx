"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CalendarDays } from "lucide-react";

const insights = [
  {
    image: "/solar-roi.jpg",
    category: "Solar Investment",
    title: "Understanding Solar ROI for Your Business",
    description:
      "Discover how to evaluate solar investment, energy savings, payback period, and the long-term value of generating your own electricity.",
    date: "Energy Guide",
    link: "/insights/solar-roi-for-business",
  },
  {
    image: "/battery-storage.jpg",
    category: "Battery Storage",
    title: "How Battery Storage Can Reduce Energy Costs",
    description:
      "Learn how battery storage can help businesses manage energy demand, protect critical loads, and make better use of solar power.",
    date: "Energy Guide",
    link: "/insights/battery-storage-energy-costs",
  },
  {
    image: "/energy-audit.jpg",
    category: "Energy Management",
    title: "Why an Energy Audit Should Come Before Solar",
    description:
      "Before investing in solar, understand where your electricity is going. An energy audit can reveal opportunities to reduce consumption and improve efficiency.",
    date: "Energy Guide",
    link: "/insights/energy-audit-before-solar",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-gray-50 py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-green-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-green-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-green-700" />
            </div>

            <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
              Energy Insights
            </p>
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Make Better{" "}
            <span className="text-green-700">Energy Decisions.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Practical insights to help you understand your energy costs,
            evaluate investments, and make smarter decisions about solar,
            batteries, and energy efficiency.
          </p>
        </motion.div>

        {/* Insight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-green-800 shadow-sm">
                    {insight.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7">
                {/* Date / Type */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CalendarDays className="w-4 h-4 text-green-600" />
                  {insight.date}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-gray-900 leading-snug group-hover:text-green-700 transition-colors">
                  {insight.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {insight.description}
                </p>

                {/* Read More */}
                <a
                  href={insight.link}
                  className="mt-6 inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-gray-200 pt-8"
        >
          <div>
            <p className="text-lg font-semibold text-gray-900">
              Not sure where to start?
            </p>

            <p className="mt-1 text-gray-500">
              Start with your energy profile and let us identify the right
              opportunity for you.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-green-800 transition-all duration-300 whitespace-nowrap"
          >
            Talk to Our Energy Team
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}