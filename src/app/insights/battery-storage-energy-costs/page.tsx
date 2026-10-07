import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

export const metadata = {
  title: "How Battery Storage Can Reduce Energy Costs",
  description:
    "Learn how battery storage can reduce energy costs, protect critical loads, improve energy resilience, and make better use of solar power.",
};

export default function BatteryStorageArticle() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-green-950 text-white">
        <div className="relative h-[520px] w-full overflow-hidden">
          <Image
            src="/battery-storage.jpg"
            alt="Battery energy storage system"
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
                <BatteryCharging className="w-4 h-4 text-green-300" />
                Battery Storage
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
                How Battery Storage Can Reduce Energy Costs
              </h1>

              <p className="mt-6 text-lg md:text-xl text-green-100/90 max-w-3xl leading-relaxed">
                Battery storage can help businesses make better use of solar
                energy, protect critical operations, and take greater control
                of when and how electricity is consumed.
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
            Solar energy can significantly reduce the amount of electricity a
            business purchases from the grid. But solar generation is naturally
            linked to daylight hours, while many businesses continue consuming
            electricity after the sun goes down.
          </p>

          <p>
            This is where battery storage becomes valuable. Instead of using
            all the solar energy immediately, excess electricity can be stored
            and made available when it is needed.
          </p>

          <p>
            The result can be a more flexible and resilient energy system
            designed around the actual operating requirements of your
            facility.
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
                Solar generates energy. Batteries give you more control over
                when you use it.
              </h2>

              <p className="mt-2 text-green-900/70 leading-relaxed">
                The right combination of solar generation and battery storage
                can help reduce grid dependence while improving the reliability
                of critical operations.
              </p>
            </div>
          </div>
        </div>

        {/* HOW BATTERIES HELP */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900">
            How Can Battery Storage Reduce Energy Costs?
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Battery storage can provide several benefits depending on how your
            facility consumes electricity and how the system is designed.
          </p>

          <div className="mt-8 space-y-5">
            {/* ITEM 1 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Store Excess Solar Energy
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  When solar generation exceeds immediate consumption, excess
                  energy can be stored instead of being wasted or exported,
                  depending on the system and applicable arrangements.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Use Stored Energy Later
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Stored energy can be used during periods when solar
                  production is low, allowing more of the generated energy to
                  support the facility's operations.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Reduce Generator Dependence
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Where the battery system is appropriately designed, stored
                  energy can provide an alternative source of power during
                  certain grid interruptions and reduce reliance on generators.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />

              <div>
                <h3 className="font-bold text-gray-900">
                  Protect Critical Loads
                </h3>

                <p className="mt-1 text-gray-600 leading-relaxed">
                  Battery systems can be configured to support selected
                  critical loads, helping important operations continue during
                  power interruptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BATTERY SIZING */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Battery Size Matters
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            A larger battery is not automatically a better investment. The
            correct battery size depends on how much energy your facility
            consumes, when that energy is consumed, and which loads need
            backup or extended support.
          </p>

          <div className="my-8 grid md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
              <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center">
                <BatteryCharging className="w-5 h-5 text-green-700" />
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Energy Capacity
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Determines how much energy the battery can store and make
                available for later use.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
              <div className="w-11 h-11 rounded-lg bg-green-100 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-700" />
              </div>

              <h3 className="mt-4 font-bold text-gray-900">
                Power Capacity
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Determines how much electrical power the battery can deliver
                to connected loads at a given time.
              </p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Proper battery design therefore requires more than looking at
            monthly electricity consumption. Load characteristics, operating
            schedules, backup requirements and future energy needs should also
            be considered.
          </p>
        </section>

        {/* WHEN BATTERY STORAGE MAKES SENSE */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            When Does Battery Storage Make Sense?
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Battery storage can be particularly useful where a business has
            significant energy requirements outside solar production hours,
            critical loads that require backup, or a need for greater control
            over energy usage.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                Businesses operating beyond normal daylight hours.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                Facilities with critical equipment that requires backup power.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                Operations looking to increase their use of self-generated
                solar energy.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
              <p className="text-gray-600 leading-relaxed">
                Facilities where energy resilience is an important operational
                requirement.
              </p>
            </div>
          </div>
        </section>

        {/* FINANCIAL CONSIDERATION */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Consider the Financial Case
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Battery storage is an investment, so the financial case should be
            considered alongside the technical requirements.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            The assessment should consider the cost of the battery system,
            expected energy savings, system lifetime, maintenance requirements,
            replacement considerations, and the value of improved energy
            resilience.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            A properly engineered system should balance technical performance
            with the financial objectives of the customer.
          </p>
        </section>

        {/* AMPERAGE APPROACH */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Start With Your Energy Profile
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            The right battery system is not determined by battery size alone.
            It starts with understanding how your facility consumes
            electricity.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            At Amperage Energy, we look at your electricity bills, operating
            hours, load requirements, critical equipment and future needs
            before recommending a solar and battery solution.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed">
            This approach helps ensure that the system is designed around your
            actual operation rather than simply matching you with a standard
            product.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-2xl bg-green-950 p-8 md:p-10 text-white">
          <p className="text-sm font-bold tracking-[0.15em] uppercase text-green-300">
            Ready to take control of your energy?
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-bold">
            Let&apos;s assess your solar and battery requirements.
          </h2>

          <p className="mt-3 text-green-100/70 leading-relaxed max-w-2xl">
            Share your electricity bill and energy requirements with our team
            and let&apos;s determine whether battery storage can improve your
            energy performance.
          </p>

          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 mt-7 bg-white text-green-900 px-6 py-3.5 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
          >
            Get My Energy Assessment
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