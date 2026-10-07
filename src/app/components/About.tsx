import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import {
  CheckCircle2,
  Target,
  Eye,
  ArrowRight,
  ShieldCheck,
  Leaf,
} from "lucide-react";

export default function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="py-24 lg:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
              About Amperage Energy
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Reduce Your Energy Costs.
              <span className="text-green-700"> Improve Reliability.</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We engineer practical energy systems designed around how you
              consume electricity, helping homes, businesses, institutions,
              and industries operate with greater confidence and control.
            </p>
          </div>

          {/* Main Content */}
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

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Experience Card */}
              <div className="absolute -bottom-7 -right-4 sm:right-6 bg-white rounded-xl shadow-xl p-5 sm:p-6 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-green-700" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Engineered for You
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Built around your energy needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Energy Costs Are an Operating Cost We Can Engineer Down
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Energy costs are becoming an increasingly important part of
                running a home, business, or institution.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We believe customers shouldn&apos;t have to choose between
                reliable power and sustainable energy. Amperage was built to
                bridge that gap through practical engineering, transparent
                advice, and professionally delivered energy systems.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We look beyond individual products and focus on the complete
                energy picture — your consumption, operating patterns,
                critical loads, future requirements, and investment goals.
              </p>

              {/* Values */}
              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Practical Engineering
                    </h4>

                    <p className="text-sm text-gray-600 mt-1">
                      We design systems around real consumption patterns,
                      operating requirements, and future energy needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Transparent Advice
                    </h4>

                    <p className="text-sm text-gray-600 mt-1">
                      We help you understand your energy costs, expected
                      savings, system requirements, and investment before you
                      commit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Long-Term Support
                    </h4>

                    <p className="text-sm text-gray-600 mt-1">
                      Our relationship doesn&apos;t end at commissioning. We
                      support system performance through monitoring,
                      maintenance, and technical assistance.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <a
                href="/services"
                className="group inline-flex items-center gap-2 mt-9 text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                Reduce your electricity costs, Improve energy reliability
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          </div>

          {/* Mission / Vision / Values */}
          <div className="mt-24 grid md:grid-cols-3 gap-6">

            {/* Mission */}
            <div className="group p-7 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-emerald-950">
                Our Mission
              </h3>

              <p className="mt-3 text-emerald-900/70 leading-relaxed">
                To engineer practical, reliable, and sustainable energy
                solutions that reduce costs, improve energy resilience, and
                create lasting value for our customers.
              </p>

              <div className="mt-6 h-1 w-16 rounded-full bg-emerald-500 group-hover:w-24 transition-all duration-300" />
            </div>

            {/* Vision */}
            <div className="group p-7 rounded-2xl bg-sky-50 border border-sky-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                <Eye className="w-6 h-6 text-sky-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-sky-950">
                Our Vision
              </h3>

              <p className="mt-3 text-sky-900/70 leading-relaxed">
                To become a trusted energy engineering partner across East
                Africa, helping customers take control of their energy costs
                and transition toward smarter, cleaner power.
              </p>

              <div className="mt-6 h-1 w-16 rounded-full bg-sky-500 group-hover:w-24 transition-all duration-300" />
            </div>

            {/* Values */}
            <div className="group p-7 rounded-2xl bg-amber-50 border border-amber-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-amber-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-amber-950">
                Our Values
              </h3>

              <p className="mt-3 text-amber-900/70 leading-relaxed">
                Integrity, practical innovation, quality, transparency,
                sustainability, and a commitment to long-term customer value.
              </p>

              <div className="mt-6 h-1 w-16 rounded-full bg-amber-500 group-hover:w-24 transition-all duration-300" />
            </div>

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}