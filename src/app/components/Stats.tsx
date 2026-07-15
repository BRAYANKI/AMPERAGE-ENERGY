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
        className="bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            {stats.map((stat, index) => (
              <div key={index}>

                <h2 className="text-5xl font-bold">

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

                <p className="mt-3 text-lg text-green-100">
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