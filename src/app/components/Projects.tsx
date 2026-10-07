"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  MapPin,
  X,
  Zap,
  BatteryCharging,
  CircleDollarSign,
  PlayCircle,
} from "lucide-react";

type Project = {
  image: string;
  title: string;
  location: string;
  category: string;
  shortDescription: string;
  overview: string;
  systemSize: string;
  inverter: string;
  battery: string;
  energyDemand: string;
  monthlyBill: string;
  annualSavings: string;
  photos: string[];
  video?: string[];
};

const projects: Project[] = [
  {
    image: "/project1.jpg",
    title: "Institutional Solar Installation",
    location: "Kapsabet",
    category: "Education",
    shortDescription:
      "A complete solar PV system designed and installed for a public training institution to reduce electricity costs, improve energy reliability and support uninterrupted learning.",
    overview:
      "Amperage Energy Solutions delivered a 12.3 kWp solar PV system for Mosoriot KMTC, designed to enhance energy reliability and reduce the institution's dependence on conventional grid electricity. The system comprises a 12-kW inverter and 30 kWh battery storage capacity, offsetting an average monthly electricity bill of approximately KES 30,000. With an estimated annual energy demand of 12,240 kWh supplied by the solar system, the project is projected to deliver annual energy savings of up to KES 360,000. The project involved professional system installation, electrical integration, and commissioning, resulting in a cleaner and more reliable energy solution for the institution. Beyond immediate cost savings, the system supports long-term operational efficiency, improved energy resilience, and sustainable energy use.",
    systemSize: "12.3 kWp",
    inverter: "12 kW",
    battery: "30 kWh",
    energyDemand: "12,240 kWh / year",
    monthlyBill: "KES 30,000",
    annualSavings: "Up to KES 360,000 / year",
    photos: [
      "/ms1.jpeg",
      "/ms2.jpeg",
      "/ms3.jpeg",
      "/ms4.jpeg",
      "/ms5.jpeg",
      "/ms6.jpeg",
      "/ms7.jpeg",
      "/inverter.jpeg",
    ],
  },

  {
    image: "/project2.jpg",
    title: "Residential Solar System",
    location: "Kiambu",
    category: "Residential",
    shortDescription:
      "A customized residential solar energy solution designed and installed to provide reliable, affordable and cleaner power for everyday household energy needs.",
    overview:
      "Amperage Energy Solutions delivered a 4.9 kWp residential solar PV system in Kiambu, featuring a 5 kW inverter and 10 kWh battery storage capacity. The system was designed to meet the household's energy needs, improve power reliability and reduce dependence on conventional grid electricity. With an annual energy demand of approximately 5,045 kWh, the solution was tailored to help offset the household's average monthly electricity bill of KES 12,000. The system is estimated to deliver annual energy savings of up to KES 129,600, providing the homeowner with a more predictable and cost-efficient energy solution. The project demonstrates how a properly sized solar and battery system can transform residential energy consumption, offering greater energy independence, improved backup power availability and long-term savings through cleaner energy use.",
    systemSize: "4.9 kWp",
    inverter: "5 kW",
    battery: "10 kWh",
    energyDemand: "5,045 kWh / year",
    monthlyBill: "KES 12,000",
    annualSavings: "Up to KES 129,600 / year",
    photos: [
      "/m1.jpeg",
      "/mr1.jpeg",
      "/mr2.jpeg",
      "/mr3.jpeg",
      "/mr4.jpeg",
      "/mr5.jpeg",
      "/mr6.jpeg",
      "/mr7.jpeg",
    ],
    video: ["/mrvid.mp4"],
  },

  {
    image: "/project3.jpg",
    title: "Hospital Backup Power",
    location: "Nairobi",
    category: "Healthcare",
    shortDescription:
      "A dependable solar backup system designed to keep critical hospital operations running, avoid power interruptions and support essential medical equipment.",
    overview:
      "At Chukaimbo Subcounty Hospital, Amperage Energy Solutions delivered a 90 kWp solar PV system featuring a 100 kW inverter and 239 kWh battery storage capacity. The solution was designed to improve energy reliability, support critical healthcare operations, and reduce the facility's dependence on conventional grid electricity. With an average monthly electricity bill of approximately KES 200,000, the system is projected to deliver annual energy savings of up to KES 2,160,000. The solar solution was designed around the facility's annual energy demand of 83,964 kWh, providing a more efficient and sustainable approach to managing its energy needs. The project demonstrates the value of properly engineered solar and battery storage solutions in healthcare environments, where reliable power is essential for uninterrupted operations.",
    systemSize: "90 kWp",
    inverter: "100 kW",
    battery: "239 kWh",
    energyDemand: "83,964 kWh / year",
    monthlyBill: "KES 200,000",
    annualSavings: "Up to KES 2,160,000 / year",
    photos: [
      "/m4.jpeg",
      "/m6h.jpeg",
      "/m7h.jpeg",
      "/m8h.jpeg",
      "/m9h.jpeg",
      "/m10.jpeg",
      "/minspr.jpeg",
    ],
    video: ["/mhvid.mp4", "/mhvid2.mp4"],
  },

  {
    image: "/heat_pump.jpg",
    title: "Heat Pump Water Heating",
    location: "Ruiru",
    category: "Residential",
    shortDescription:
      "A highly efficient heat pump water heating solution designed to reduce electricity consumption while providing reliable hot water for a household of seven.",
    overview:
      "Amperage Energy Solutions delivered and installed a 300-litre heat pump water heating system for a residential client in Ruiru, serving a household of seven users. The solution replaced conventional instant electric showers that were consuming significant amounts of electricity, creating an opportunity to improve the home's hot water efficiency and reduce energy costs. Through the use of heat pump technology, the system harnesses ambient heat from the surrounding environment to heat water, reducing electricity consumption and supporting lower operational costs. The project involved system sizing, professional installation, plumbing integration, electrical connection, and commissioning. This project demonstrates how the right technology can transform household energy consumption while delivering dependable hot water for everyday use.",
    systemSize: "300 Litres",
    inverter: "N/A",
    battery: "N/A",
    energyDemand: "Reduced water-heating demand",
    monthlyBill: "Energy efficiency solution",
    annualSavings: "Reduced electricity consumption",
    photos: ["/heatpump1.jpeg"],
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
            Our Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Projects &{" "}
            <span className="text-green-700">Case Studies</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore how we engineer energy solutions around real-world
            consumption, operational requirements, and the need for reliable
            and cost-effective power.
          </p>
        </div>

        {/* Project Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={`${project.title} by Amperage Energy Solutions`}
                  width={600}
                  height={450}
                  className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-green-700 px-5 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-50 transition"
                  >
                    View Case Study
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="mb-3">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  {project.location}
                </div>

                <p className="text-gray-600 leading-relaxed mb-5">
                  {project.shortDescription}
                </p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Explore Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-5 right-5 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Hero Image */}
              <div className="relative h-72 md:h-96">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-6 md:left-10 text-white">
                  <span className="inline-block bg-green-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {selectedProject.category}
                  </span>

                  <h2 className="text-3xl md:text-4xl font-bold">
                    {selectedProject.title}
                  </h2>

                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-5 h-5" />
                    {selectedProject.location}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-10">

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Project Overview
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.overview}
                </p>

                {/* Project Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

                  <div className="bg-gray-50 rounded-2xl p-5">
                    <Zap className="w-7 h-7 text-green-600 mb-3" />
                    <p className="text-sm text-gray-500">
                      Solar System
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {selectedProject.systemSize}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5">
                    <Zap className="w-7 h-7 text-green-600 mb-3" />
                    <p className="text-sm text-gray-500">
                      Inverter
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {selectedProject.inverter}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5">
                    <BatteryCharging className="w-7 h-7 text-green-600 mb-3" />
                    <p className="text-sm text-gray-500">
                      Battery Storage
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {selectedProject.battery}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5">
                    <Zap className="w-7 h-7 text-green-600 mb-3" />
                    <p className="text-sm text-gray-500">
                      Annual Energy Demand
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {selectedProject.energyDemand}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5">
                    <CircleDollarSign className="w-7 h-7 text-green-600 mb-3" />
                    <p className="text-sm text-gray-500">
                      Monthly Electricity Bill
                    </p>
                    <p className="font-bold text-gray-900 text-lg">
                      {selectedProject.monthlyBill}
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-5">
                    <CircleDollarSign className="w-7 h-7 text-green-600 mb-3" />
                    <p className="text-sm text-gray-500">
                      Estimated Annual Savings
                    </p>
                    <p className="font-bold text-green-700 text-lg">
                      {selectedProject.annualSavings}
                    </p>
                  </div>

                </div>

                {/* Videos */}
                {selectedProject.video &&
                  selectedProject.video.length > 0 && (
                    <div className="mt-12">

                      <div className="flex items-center gap-3 mb-6">
                        <PlayCircle className="w-7 h-7 text-green-600" />

                        <h3 className="text-2xl font-bold text-gray-900">
                          Project Videos
                        </h3>
                      </div>

                      <div
                        className={`grid gap-5 ${
                          selectedProject.video.length > 1
                            ? "md:grid-cols-2"
                            : "grid-cols-1"
                        }`}
                      >
                        {selectedProject.video.map((video, index) => (
                          <div
                            key={index}
                            className="relative overflow-hidden rounded-2xl bg-black shadow-lg"
                          >
                            <video
                              controls
                              preload="metadata"
                              className="w-full h-auto max-h-[500px]"
                            >
                              <source src={video} type="video/mp4" />
                              Your browser does not support video playback.
                            </video>
                          </div>
                        ))}
                      </div>

                    </div>
                  )}

                {/* Photos */}
                <div className="mt-12">

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Project Photos
                  </h3>

                  {selectedProject.photos.length > 0 ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                      {selectedProject.photos.map((photo, index) => (
                        <div
                          key={index}
                          className="relative h-56 rounded-2xl overflow-hidden"
                        >
                          <Image
                            src={photo}
                            alt={`${selectedProject.title} project photo ${
                              index + 1
                            }`}
                            fill
                            className="object-cover hover:scale-105 transition duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center">
                      <Building2 className="w-10 h-10 text-gray-400 mx-auto mb-3" />

                      <p className="text-gray-500">
                        Project photos will be added soon.
                      </p>
                    </div>
                  )}

                </div>

                {/* Contact CTA */}
                <div className="mt-12 bg-green-900 rounded-2xl p-7 text-white flex flex-col md:flex-row items-center justify-between gap-6">

                  <div>
                    <h3 className="text-xl font-bold">
                      Want a solution engineered around your energy needs?
                    </h3>

                    <p className="text-green-100 mt-1">
                      Share your electricity bill with our team and let&apos;s
                      assess your energy requirements.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition whitespace-nowrap"
                  >
                    Engineer My Energy Solution
                    <ArrowRight className="w-5 h-5" />
                  </a>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}