import Services from "../components/Services";

export const metadata = {
  title: "Energy Services",
  description:
    "Explore Amperage Energy Solutions services including solar PV installation, battery storage, heat pump systems, energy audits, and maintenance solutions in Kenya.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Dedicated Services Hero */}
      <section className="relative bg-green-950 text-white pt-36 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-300">
              Our Services
            </p>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Energy Solutions Designed Around Your Needs.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed max-w-2xl">
              From solar generation and battery storage to heat pumps,
              energy audits, and ongoing maintenance, we engineer solutions
              around how you actually use energy.
            </p>
          </div>
        </div>
      </section>

      {/* Existing Services Section */}
      <Services />
    </main>
  );
}