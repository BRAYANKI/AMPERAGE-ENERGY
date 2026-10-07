import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Sun } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const projects = [
  {
    title: "Mosoriot KMTC",
    location: "Mosoriot, Kenya",
    description:
      "A 12.3 kWp solar system with 12 kW inverter capacity and 30 kWh battery storage.",
    image: "/m1.jpeg",
    solar: "12.3 kWp",
    battery: "30 kWh",
  },
  {
    title: "Kiambu Residential",
    location: "Kiambu, Kenya",
    description:
      "A residential energy system combining 4.9 kWp solar generation with 10 kWh battery storage.",
    image: "/mr1.jpeg",
    solar: "4.9 kWp",
    battery: "10 kWh",
  },
  {
    title: "Chukaimbo Hospital",
    location: "Nairobi, Kenya",
    description:
      "A large-scale 90 kWp solar installation designed to support reliable hospital operations.",
    image: "/mh2.jpeg",
    solar: "90 kWp",
    battery: "239 kWh",
  },
];

export default function Projects() {
  return (
    <AnimatedSection>
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
                Featured Projects
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Energy systems delivering{" "}
                <span className="text-green-700">real results.</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Explore selected projects where practical engineering has
                helped customers reduce energy costs and improve power
                reliability.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors shrink-0"
            >
              View all projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Projects */}
          <div className="grid lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-green-950/70 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-green-100">
                      {project.location}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">

                    {/* Solar */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
                        <Sun
                          className="w-5 h-5 text-yellow-500 animate-pulse drop-shadow-[0_0_6px_rgba(234,179,8,0.8)]"
                          strokeWidth={2.5}
                        />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">Solar</p>
                        <p className="font-semibold text-gray-900">
                          {project.solar}
                        </p>
                      </div>
                    </div>

                    {/* Battery */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <BatteryCharging className="w-5 h-5 text-green-700" />
                      </div>

                      <div>
                        <p className="text-xs text-gray-500">Storage</p>
                        <p className="font-semibold text-gray-900">
                          {project.battery}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 mt-6 text-green-700 font-semibold hover:text-green-800"
                  >
                    Explore project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}