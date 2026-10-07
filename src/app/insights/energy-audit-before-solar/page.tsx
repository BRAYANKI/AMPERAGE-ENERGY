import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Search,
  TrendingDown,
} from "lucide-react";

export const metadata = {
  title: "Why an Energy Audit Should Come Before Solar",
  description:
    "Learn why an energy audit can help identify energy waste, improve efficiency, and ensure your solar system is properly designed around your actual energy requirements.",
};

export default function EnergyAuditArticle() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950 text-white">
        <div className="relative h-[520px] w-full overflow-hidden">
          <Image
            src="/energy-audit.jpg"
            alt="Energy audit and energy management"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-green-950/65" />

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
                <ClipboardCheck className="w-4 h-4 text-green-300" />
                Energy Management
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
                Why an Energy Audit Should Come Before Solar
              </h1>

              <p className="mt-6 text-lg md:text-xl text-green-100/90 max-w-3xl leading-relaxed">
                Before investing in solar, understand where your electricity
                is going. An energy audit can reveal opportunities to reduce
                consumption, improve efficiency, and build a stronger solar
                investment case.
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
            Installing solar can be an effective way to reduce electricity
            costs. However, solar should not always be the first step.
          </p>

          <p>
            Before generating more electricity, it is important to understand
            how electricity is currently being consumed and whether some of
            that consumption can be reduced through better efficiency.
          </p>

          <p>
            This is where an energy audit becomes valuable.
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
                The smartest energy investment may begin with understanding
                your consumption.
              </h2>

              <p className="mt-2 text-green-900/70 leading-relaxed">
                An energy audit helps identify where energy is being used,
                where it may be wasted, and which improvements can deliver the
                greatest value.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT IS AN ENERGY AUDIT */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            What Is an Energy Audit?
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            An energy audit is a structured assessment of how a facility
            consumes electricity and other forms of energy.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            The objective is to understand consumption patterns, identify
            inefficiencies, and determine practical opportunities for reducing
            energy costs and improving system performance.
          </p>

          <div className="mt-8 space-y-5">
            {/* ITEM 1 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Review Electricity Consumption
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Electricity bills and historical consumption data can reveal
                  important trends in how much energy a facility uses.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Identify Major Energy Loads
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Large equipment, HVAC systems, pumps, water heating,
                  refrigeration, lighting and other loads can contribute
                  significantly to energy consumption.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Identify Energy Waste
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Inefficient equipment, unnecessary operating hours, poor
                  controls and other factors can increase electricity
                  consumption without adding corresponding value.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Establish an Energy Baseline
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  A baseline provides a reference point for measuring the
                  impact of future energy efficiency and solar investments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY BEFORE SOLAR */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Should an Audit Come Before Solar?
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Solar systems are normally designed to offset a portion of your
            electricity consumption. If the underlying consumption pattern is
            not properly understood, the solar system may not be optimally
            sized.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            An energy audit can therefore help answer an important question:
            should the facility first reduce its energy demand before investing
            in additional generation capacity?
          </p>

          <div className="my-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5 text-green-700" />
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Efficiency First. Generation Second.
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  Reducing unnecessary consumption can lower your energy bill
                  before solar is even installed. The remaining demand can then
                  be used to develop a more informed solar system design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOAD PROFILE */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Understanding Your Load Profile
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            One of the most important parts of energy planning is understanding
            when electricity is being consumed.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Two businesses may have similar monthly electricity bills but
            completely different operating patterns. One may consume most of
            its electricity during daylight hours, while another may have
            significant demand at night.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            These differences can significantly influence solar sizing,
            battery requirements, and the expected financial performance of the
            system.
          </p>
        </section>

        {/* BENEFITS */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            What Can an Energy Audit Reveal?
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6">
              <h3 className="font-bold text-emerald-950">
                Energy Efficiency Opportunities
              </h3>

              <p className="mt-2 text-emerald-900/70 leading-relaxed">
                Identify equipment and processes where efficiency improvements
                could reduce energy consumption.
              </p>
            </div>

            <div className="rounded-xl bg-sky-50 border border-sky-200 p-6">
              <h3 className="font-bold text-sky-950">
                Solar Sizing Information
              </h3>

              <p className="mt-2 text-sky-900/70 leading-relaxed">
                Develop a clearer understanding of the energy demand that solar
                generation should help offset.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-6">
              <h3 className="font-bold text-amber-950">
                Battery Requirements
              </h3>

              <p className="mt-2 text-amber-900/70 leading-relaxed">
                Determine whether energy storage may be useful and what role it
                should play in the overall system.
              </p>
            </div>

            <div className="rounded-xl bg-violet-50 border border-violet-200 p-6">
              <h3 className="font-bold text-violet-950">
                Investment Priorities
              </h3>

              <p className="mt-2 text-violet-900/70 leading-relaxed">
                Compare different opportunities and focus investment on
                measures that can provide meaningful operational value.
              </p>
            </div>
          </div>
        </section>

        {/* SOLAR INVESTMENT */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Building a Better Solar Investment Case
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            An energy audit provides useful information for determining how a
            solar system should be designed and what level of energy savings
            may realistically be expected.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Instead of simply asking how many solar panels can fit on a roof,
            the focus becomes how much energy the facility actually needs,
            when it needs it, and how solar, batteries and efficiency
            improvements can work together.
          </p>
        </section>

        {/* AMPERAGE APPROACH */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Start With Understanding. Then Engineer the Solution.
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            At Amperage Energy, we believe good energy engineering starts with
            understanding the customer&apos;s operation.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            We look at electricity consumption, operating patterns, major
            loads, critical requirements and future needs before recommending
            the appropriate solution.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            This allows us to build energy systems around the facility rather
            than forcing the facility to fit a standard system.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-green-950 p-8 md:p-10 text-white">
          <p className="text-sm font-bold tracking-[0.15em] uppercase text-green-300">
            Not sure where your energy costs are coming from?
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-bold">
            Start with an energy assessment.
          </h2>

          <p className="mt-3 text-green-100/70 leading-relaxed max-w-2xl">
            Let our team review your energy profile and identify opportunities
            to improve efficiency, reduce costs, and determine whether solar
            is the right next step.
          </p>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 mt-7 bg-white text-green-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
          >
            Start My Energy Assessment
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