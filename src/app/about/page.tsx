import About from "../components/About";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Amperage Energy Solutions, our mission, vision, values, and approach to practical, reliable, and sustainable energy solutions in Kenya and East Africa.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Dedicated About Hero */}
      <section className="relative bg-green-950 text-white pt-36 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-300">
              About Amperage Energy
            </p>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Engineering Better Energy for a More Reliable Future.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed max-w-2xl">
              We design practical energy systems that help homes, businesses,
              institutions, and industries reduce energy costs and improve
              power reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Existing About Design */}
      <About />
    </main>
  );
}