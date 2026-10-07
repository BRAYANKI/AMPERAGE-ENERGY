import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutPreview from "./components/home/AboutPreview";
import ServicesPreview from "./components/home/Services";
import ProjectsPreview from "./components/home/Projects";
import Industries from "./components/home/Industries";
import SolarBenefits from "./components/SolarBenefits";
import TechnologyPartners from "./components/TechnologyPartners";
import Process from "./components/Process";
import TestimonialsPreview from "./components/home/Testimonials";
import Insights from "./components/Insights";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <Industries />
      <SolarBenefits />
      <TechnologyPartners />
      <Process />
      <TestimonialsPreview />
      <Insights />
      <CTA />
    </main>
  );
}