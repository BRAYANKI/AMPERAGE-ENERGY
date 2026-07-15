import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
export default function About() {
  return (
    <AnimatedSection>   
    <section
  id="about"
  className="py-20 bg-gray-50"
>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            About Amperage Energy
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Amperage Energy is a trusted provider of renewable energy solutions,
            committed to delivering reliable, efficient, and sustainable solar
            systems for homes, businesses, institutions, and industries across
            East Africa.
          </p>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our experienced team designs and installs high-quality solar
            solutions that reduce electricity costs while promoting clean,
            environmentally friendly energy. We believe in innovation,
            reliability, and customer satisfaction.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">

            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Our Mission
              </h3>

              <p className="mt-2 text-gray-600">
                Deliver affordable and sustainable energy solutions for everyone.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-700">
                Our Vision
              </h3>

              <p className="mt-2 text-gray-600">
                To become East Africa's leading renewable energy company.
              </p>
            </div>

          </div>
        </div>

        {/* Image */}
        <div>
          <Image
  src="/about-solar.jpg"
  alt="Solar panels installed by Amperage Energy"
  width={700}
  height={500}
  className="rounded-2xl shadow-xl w-full h-auto"
  priority={false}
/>
        </div>

      </div>
    </section>
    </AnimatedSection>
  );
}