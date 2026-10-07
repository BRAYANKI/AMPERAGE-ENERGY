import Projects from "../components/Projects";

export const metadata = {
  title: "Projects & Case Studies",
  description:
    "Explore Amperage Energy Solutions projects and case studies across institutional, residential, healthcare, and heat pump energy solutions in Kenya.",
};

export default function ProjectsPage() {
  return (
    <main>
      {/* Dedicated Projects Hero */}
      <section className="relative bg-green-950 text-white pt-36 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-300">
              Our Work
            </p>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Energy Solutions Engineered for Real-World Needs.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed max-w-2xl">
              Explore our completed projects and see how we design practical
              energy systems around consumption, operational requirements,
              reliability, and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* Existing Projects & Case Studies */}
      <Projects />
    </main>
  );
}