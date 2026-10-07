import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Droplets,
  Sun,
} from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const services = [
  {
    title: "Solar Energy Systems",
    description:
      "Engineered solar systems designed to reduce electricity costs and improve energy reliability.",
    image: "/solarplates.jpeg",
    icon: Sun,
  },
  {
    title: "Battery Energy Storage",
    description:
      "Store excess solar energy and keep critical operations running when grid power is unavailable.",
    image: "/battery-storage.jpg",
    icon: BatteryCharging,
  },
  {
    title: "Energy Audits & Consultation",
    description:
      "Understand where your energy is being consumed and identify practical opportunities to reduce costs.",
    image: "/energy-audit.jpg",
  },
  {
    title: "Heat Pump Solutions",
    description:
      "Efficient hot-water solutions that can significantly reduce the energy required for heating.",
    image: "/heatpump.jpeg",
    icon: Droplets,
  },
];

export default function Services() {
  return (
    <AnimatedSection>
      <section className="py-24 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Energy solutions built around{" "}
              <span className="text-green-700">your needs.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              From solar generation and battery storage to energy audits and
              heat pump solutions, we help you understand, improve, and take
              control of your energy system.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent"
                      aria-hidden="true"
                    />

                    {/* Icon - only for services that have one */}
                    {Icon && (
                      <div className="absolute bottom-4 left-4 w-11 h-11 rounded-lg bg-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-green-700" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-green-700 hover:text-green-800"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Explore all services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}