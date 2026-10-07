import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function CTA() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-green-950 px-8 py-14 md:px-14 md:py-16">

            {/* Background decoration */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-green-800/40 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-green-700/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl">
              <div className="w-12 h-12 rounded-xl bg-green-800 flex items-center justify-center">
                <Zap className="w-6 h-6 text-green-300" />
              </div>

              <p className="mt-7 text-sm font-bold tracking-[0.2em] uppercase text-green-300">
                Take Control of Your Energy
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to engineer a smarter energy system?
              </h2>

              <p className="mt-6 text-lg text-green-100 leading-relaxed max-w-2xl">
                Tell us about your facility, your energy costs, and what you
                want to achieve. We Will help you evaluate a practical path
                forward.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacts"
                  className="group inline-flex items-center justify-center gap-2 bg-green-500 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-green-400 transition-colors"
                >
                  Request an Energy Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}