import { Quote } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const testimonials = [
  {
    quote:
      "Amperage took the time to understand our energy requirements before recommending a solution. The process was practical, clear, and professionally handled.",
    name: "Amperage Energy Client",
    role: "Commercial Client",
  },
  {
    quote:
      "The team approached our project with a clear understanding of our operational needs and delivered a solution designed around them.",
    name: "Amperage Energy Client",
    role: "Institutional Client",
  },
  {
    quote:
      "What stood out was the attention to detail and the focus on finding an energy solution that made sense for our facility.",
    name: "Amperage Energy Client",
    role: "Residential Client",
  },
];

export default function Testimonials() {
  return (
    <AnimatedSection>
      <section className="py-24 lg:py-28 bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-3xl mb-14">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-300">
              Client Experience
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              What our clients{" "}
              <span className="text-green-300">say about us.</span>
            </h2>

            <p className="mt-6 text-lg text-green-100 leading-relaxed">
              We believe good energy solutions start with understanding the
              people and operations they are designed to support.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name + testimonial.role}
                className="bg-white/10 border border-white/10 rounded-2xl p-7 backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-green-800 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-green-300" />
                </div>

                <p className="mt-6 text-green-50 leading-relaxed">
                  “{testimonial.quote}”
                </p>

                <div className="mt-7 pt-5 border-t border-white/10">
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-green-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}