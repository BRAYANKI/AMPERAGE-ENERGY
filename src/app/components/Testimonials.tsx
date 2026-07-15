"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Business Owner",
    image: "/client1.jpg",
    review:
      "Amperage Energy transformed our business with a reliable solar solution. Our electricity costs have dropped significantly.",
  },
  {
    name: "Grace Jepkorir",
    role: "Homeowner",
    image: "/client2.jpg",
    review:
      "Professional team, timely installation, and excellent after-sales support. I highly recommend Amperage Energy.",
  },
  {
    name: "Peter Otieno",
    role: "School Director",
    image: "/client3.jpg",
    review:
      "Their solar installation has ensured uninterrupted learning. Excellent workmanship and customer service.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
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

export default function Testimonials() {
  return (
    <section
  id="testimonials"
  className="py-24 bg-white"
>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are proud to deliver reliable renewable energy solutions that make
            a real difference for our clients.
          </p>

        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <Quote className="w-10 h-10 text-green-600 mb-6" />

              <p className="text-gray-600 leading-relaxed italic mb-6">
                "{testimonial.review}"
              </p>

              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Image
  src={testimonial.image}
  alt={`${testimonial.name}, ${testimonial.role}`}
  width={60}
  height={60}
  className="rounded-full object-cover"
  loading="lazy"
/>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}