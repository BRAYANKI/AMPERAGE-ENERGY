"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      number: 10,
      suffix: "+",
      label: "Years Experience",
    },
    {
      number: 300,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      number: 24,
      suffix: "/7",
      label: "Customer Support",
    },
  ];

  return (
    <AnimatedSection>
      <section
        ref={ref}
        className="relative bg-green-950 text-white py-20 overflow-hidden"
      >
        {/* Background Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-900 to-green-800 opacity-90"
          aria-hidden="true"
        />

        {/* Stats Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {inView ? (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                    />
                  ) : (
                    0
                  )}

                  {stat.suffix}
                </h2>

                <p className="mt-3 text-sm md:text-base text-green-100 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}