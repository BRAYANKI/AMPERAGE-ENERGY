"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin } from "lucide-react";

const projects = [
  {
    image: "/project1.jpg",
    title: "Institutional Solar Installation",
    location: "Kapsabet",
    type: "Institutional",
    description:
      "Complete solar power system installation for Mosoriot KMTC College.",
  },
  {
    image: "/project2.jpg",
    title: "Residential Solar System",
    location: "Kiambu",
    type: "Residential",
    description:
      "Reliable solar solution helping homeowners reduce electricity costs.",
  },
  {
    image: "/project3.jpg",
    title: "Hospital Backup Power",
    location: "Kisumu",
    type: "Healthcare",
    description:
      "Solar backup system ensuring uninterrupted medical services.",
  },
  {
    image: "/project4.jpg",
    title: "Industrial Solar Plant",
    location: "Mombasa",
    type: "Industrial",
    description:
      "Large-scale renewable energy installation for industrial operations.",
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
      duration: 0.7,
    },
  },
};

export default function Projects() {
  return (
    <section
  id="projects"
  className="py-24 bg-gray-50"
>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Our Recent Projects
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Amperage Energy is transforming homes, businesses,
            industries, and institutions with reliable renewable energy
            solutions.
          </p>

        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              {/* Image */}

              <div className="relative overflow-hidden group">

                <Image
  src={project.image}
  alt={`${project.title} by Amperage Energy`}
  width={600}
  height={450}
  className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
/>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                  <button className="bg-white text-green-700 px-5 py-3 rounded-lg font-semibold flex items-center gap-2">

                    View Project

                    <ArrowRight className="w-5 h-5"/>

                  </button>

                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 mb-2">

                  <MapPin className="w-4 h-4 text-green-600"/>

                  {project.location}

                </div>

                <div className="flex items-center gap-2 text-gray-500 mb-4">

                  <Building2 className="w-4 h-4 text-green-600"/>

                  {project.type}

                </div>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}