import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  TrendingDown,
} from "lucide-react";

export const metadata = {
  title: "Understanding Solar ROI for Your Business",
  description:
    "Learn how to evaluate solar investment, energy savings, payback period, and the long-term value of solar energy for your business.",
};

export default function SolarROIArticle() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950 text-white">
        {/* Hero Image */}
        <div className="relative h-[520px] w-full overflow-hidden">
          <Image
            src="/solar-roi.jpg"
            alt="Solar energy investment for businesses"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-green-950/65" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-5xl mx-auto w-full px-6 py-20">
              <Link
                href="/#insights"
                className="inline-flex items-center gap-2 text-green-300 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Energy Insights
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Calculator className="w-4 h-4 text-green-300" />
                Solar Investment
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
                Understanding Solar ROI for Your Business
              </h1>

              <p className="mt-6 text-lg md:text-xl text-green-100/90 max-w-3xl leading-relaxed">
                Solar is more than a renewable energy investment. When
                properly designed, it can become a tool for reducing operating
                costs and improving long-term energy resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 py-20 lg:py-24">
        {/* INTRODUCTION */}
        <div className="text-lg text-gray-600 leading-relaxed space-y-5">
          <p>
            For many businesses, electricity is a significant operating
            expense. As energy costs continue to affect business margins,
            generating part of your own electricity through solar can provide
            an opportunity to take greater control of those costs.
          </p>

          <p>
            But the important question is not simply whether solar works. The
            real question is whether the investment makes financial sense for
            your specific operation.
          </p>

          <p>
            This is where solar return on investment, or ROI, becomes
            important.
          </p>
        </div>

        {/* KEY MESSAGE */}
        <div className="my-12 rounded-2xl bg-green-50 border border-green-200 p-7">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center shrink-0">
              <TrendingDown className="w-6 h-6 text-white" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-green-950">
                The goal is not simply to install solar.
              </h2>

              <p className="mt-2 text-green-900/70 leading-relaxed">
                The goal is to engineer an energy system that reduces your
                electricity expenditure while delivering a sensible return on
                your investment.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT DETERMINES ROI */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            What Determines Solar ROI?
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Several factors influence how quickly a solar investment can
            recover its initial cost. A good assessment should consider the
            entire energy profile of the business rather than focusing only on
            the number of solar panels.
          </p>

          <div className="mt-8 space-y-5">
            {/* ITEM 1 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Electricity Consumption
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Your electricity usage determines how much energy the solar
                  system can potentially offset.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Operating Hours
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Businesses operating during daylight hours may be able to
                  consume a significant portion of solar generation directly.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  System Size and Design
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Oversizing or undersizing a system can affect the financial
                  performance of the investment. Proper engineering is
                  therefore essential.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Battery Storage
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Where appropriate, batteries can store excess solar energy
                  for use later, particularly when energy requirements extend
                  beyond solar production hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PAYBACK PERIOD */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Understanding Payback Period
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            The payback period is the estimated time required for the savings
            generated by the solar system to recover the initial investment.
          </p>

          <div className="my-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
            <p className="font-mono text-center text-lg text-green-800">
              Payback Period = Initial Investment ÷ Annual Energy Savings
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            For example, if a system requires an investment of KSh 2,000,000
            and generates approximately KSh 400,000 in annual electricity
            savings, the simple payback period would be approximately five
            years.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Actual financial performance can vary depending on electricity
            consumption, system performance, maintenance, financing,
            electricity tariffs, and other operating factors.
          </p>
        </section>

        {/* ROI BEYOND PAYBACK */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Solar ROI Is About More Than Payback
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            A strong solar investment case should look beyond the payback
            period. The system may continue generating electricity and
            delivering savings for many years after the initial investment has
            been recovered.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Businesses should also consider the value of improved energy
            resilience, reduced generator dependence, protection of critical
            operations, and greater predictability of energy costs.
          </p>
        </section>

        {/* ENERGY PROFILE */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Start With Your Energy Profile
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            The best solar system is not necessarily the system with the most
            panels. It is the system designed around how your business actually
            consumes energy.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            At Amperage Energy, we start by understanding your electricity
            bills, loads, operating patterns and critical energy requirements.
            We then use that information to develop a practical system and
            financial case.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-green-950 p-8 md:p-10 text-white">
          <p className="text-sm font-bold tracking-[0.15em] uppercase text-green-300">
            Ready to understand your numbers?
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-bold">
            Let&apos;s assess your energy profile.
          </h2>

          <p className="mt-3 text-green-100/70 leading-relaxed max-w-2xl">
            Share your electricity bill and energy requirements with our team
            and let&apos;s determine whether solar makes financial sense for
            your operation.
          </p>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 mt-7 bg-white text-green-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
          >
            Get My Solar Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* BACK TO INSIGHTS */}
        <div className="mt-12 text-center">
          <Link
            href="/#insights"
            className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Energy Insights
          </Link>
        </div>
      </article>
    </main>
  );
}