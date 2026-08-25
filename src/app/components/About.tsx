import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import {
  CheckCircle2,
  Target,
  Eye,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
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
              Powering Progress Through
              <span className="text-green-700"> Clean Energy</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We provide dependable solar energy solutions designed to help
              homes, businesses, institutions, and industries achieve greater
              energy independence.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/about-solar.jpg"
                  alt="Solar panels installed by Amperage Energy"
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
                      Trusted Solutions
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Built for reliability
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Reliable Energy Solutions for a Better Future
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed">
                At Amperage Energy, we believe access to reliable and
                sustainable energy is essential for growth. Our approach
                combines quality equipment, professional system design,
                expert installation, and dependable customer support.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                From residential installations to commercial and institutional
                projects, we develop practical solar solutions tailored to each
                customer's energy needs.
              </p>

              {/* Values */}
              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Quality & Reliability
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      We focus on dependable equipment and professional
                      installation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Customer-Centered Solutions
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Every system is designed around the customer's unique
                      energy requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Sustainable Impact
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      We help customers transition toward cleaner and smarter
                      energy.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}
              <a
                href="#services"
                className="group inline-flex items-center gap-2 mt-9 text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                Explore Our Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          </div>

          {/* Mission / Vision / Values */}
          <div className="mt-24 grid md:grid-cols-3 gap-6">

            {/* Mission */}
            <div className="group p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-green-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Our Mission
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                To deliver practical, reliable, and sustainable energy
                solutions that create lasting value for our customers.
              </p>
            </div>

            {/* Vision */}
            <div className="group p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Our Vision
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                To be a trusted renewable energy partner across East Africa,
                accelerating the transition to cleaner energy.
              </p>
            </div>

            {/* Values */}
            <div className="group p-7 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Our Values
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Integrity, innovation, quality, sustainability, and a strong
                commitment to customer satisfaction.
              </p>
            </div>

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}