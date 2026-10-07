"use client";

import { motion, type Variants } from "framer-motion";
import { Quote, Star, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Shanki Kiptoo",
    role: "Business Owner",
    image: "/client1.jpg",
    review:
      "Amperage Energy transformed the way we manage our energy. The solar solution has helped reduce our electricity costs while giving us greater confidence in the reliability of our power supply.",
  },
  {
    name: "Grace Jepkorir",
    role: "Homeowner",
    image: "/client2.jpg",
    review:
      "The entire process was handled professionally, from the initial consultation through installation and support. The team was responsive, efficient, and made the transition to solar straightforward.",
  },
  {
    name: "Peter Otieno",
    role: "School Director",
    image: "/client3.jpg",
    review:
      "Amperage Energy delivered a dependable solar solution for our institution. The system has helped us maintain reliable power for our operations while reducing our dependence on grid electricity.",
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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#f7faf8] py-24 md:py-32"
    >
      {/* Background Energy Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />

        {/* Technical Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#166534 1px, transparent 1px), linear-gradient(90deg, #166534 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative Energy Lines */}
        <div className="absolute left-[8%] top-[22%] h-px w-32 bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

        <div className="absolute right-[8%] top-[30%] h-px w-40 bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

        <div className="absolute bottom-[20%] left-[15%] h-px w-28 bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
              <Zap className="h-3.5 w-3.5 fill-green-700 text-green-700" />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
              Client Experiences
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-950 md:text-5xl lg:text-6xl">
            Trusted to Engineer
            <span className="text-green-700"> Better Energy</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            From homes and businesses to institutions, our customers trust us
            to deliver practical energy solutions built around reliability,
            efficiency, and long-term value.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                },
              }}
              className={`group relative overflow-hidden rounded-[2rem] border bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(22,101,52,0.12)] md:p-8 ${
                index === 1
                  ? "border-green-200 lg:-translate-y-4 lg:shadow-[0_20px_60px_rgba(22,101,52,0.10)]"
                  : "border-gray-100"
              }`}
            >
              {/* Green Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-700 opacity-80" />

              {/* Decorative Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-500/5 blur-3xl transition-all duration-500 group-hover:bg-green-500/10" />

              {/* Large Background Quote */}
              <Quote className="absolute right-6 top-6 h-24 w-24 rotate-6 text-green-700/[0.045]" />

              {/* Quote Icon */}
              <div className="relative mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 ring-1 ring-green-100 transition-transform duration-300 group-hover:scale-105">
                <Quote className="h-6 w-6 text-green-700" />
              </div>

              {/* Review */}
              <p className="relative min-h-[155px] text-[16px] leading-7 text-gray-600 md:text-[17px]">
                &quot;{testimonial.review}&quot;
              </p>

              {/* Rating / Verification */}
              <div className="mt-7 flex items-center justify-between">
                <div
                  className="flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-[17px] w-[17px] fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Client Experience
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

              {/* Client */}
              <div className="flex items-center gap-4">
                {/* Client Image */}
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-green-500 to-emerald-300 opacity-20 transition-opacity duration-300 group-hover:opacity-40" />

                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    width={64}
                    height={64}
                    className="relative h-16 w-16 rounded-full border-4 border-white object-cover shadow-md"
                    loading="lazy"
                  />

                  {/* Verified Dot */}
                  <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-green-700">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Card Number */}
              <div className="absolute bottom-7 right-8 text-xs font-bold tracking-widest text-gray-200">
                0{index + 1}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl border border-green-100 bg-white px-7 py-7 shadow-sm md:flex-row md:px-9">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-gray-900">
                Ready to take control of your energy costs?
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Let&apos;s understand your energy profile and engineer the
                right solution.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 whitespace-nowrap rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl hover:shadow-green-700/25"
            >
              Get My Energy Assessment

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}