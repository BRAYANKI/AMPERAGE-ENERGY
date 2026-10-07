import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function AboutPreview() {
  return (
    <AnimatedSection>
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/about-solar.jpg"
                  alt="Solar energy system installed by Amperage Energy"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-green-950 text-white rounded-xl shadow-xl px-6 py-5">
                <p className="text-2xl font-bold">Energy</p>
                <p className="text-sm text-green-200 mt-1">
                  Engineered around you
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
                About Amperage Energy
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Energy solutions designed around{" "}
                <span className="text-green-700">your operation.</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Energy costs are becoming an increasingly important part of
                running a home, business, or institution. We engineer practical
                energy systems that help customers reduce electricity costs,
                improve reliability, and take greater control of their energy.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <p className="text-gray-700">
                    Practical engineering based on real energy needs
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <p className="text-gray-700">
                    Transparent advice before you invest
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <p className="text-gray-700">
                    Professional installation and long-term support
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 mt-9 text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                Learn more about Amperage
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}