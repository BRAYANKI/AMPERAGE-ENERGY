import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact/>
      <Footer />

    
    
    </>
  );
}