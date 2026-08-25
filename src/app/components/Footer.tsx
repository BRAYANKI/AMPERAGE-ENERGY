"use client";

import Image from "next/image";
import {
  Phone,
  MapPin,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/logoo.png"
                alt="Amperage Energy"
                width={70}
                height={70}
                className="object-contain"
              />

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  AMPERAGE
                </h2>

                <p className="text-xs tracking-[0.3em] text-green-300 font-semibold">
                  ENERGY
                </p>
              </div>
            </a>

            <p className="mt-6 text-green-100 leading-relaxed">
              Reliable and innovative renewable energy solutions designed
              to power homes, businesses, institutions, and industries
              across East Africa.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-7">

              <a
                href="https://www.facebook.com/share/1BhygU6ZTc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amperage Energy on Facebook"
                className="px-4 py-2 rounded-lg bg-white/10 text-sm font-semibold hover:bg-green-600 transition"
              >
                Facebook
              </a>

              <a
                href="https://www.tiktok.com/@amperage.energy.sol?_r=1&_t=ZS-98sUkvpkmXg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Amperage Energy on TikTok"
                className="px-4 py-2 rounded-lg bg-white/10 text-sm font-semibold hover:bg-green-600 transition"
              >
                TikTok
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a
                  href="#home"
                  className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
                >
                  Contact Us
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">

  <li>
    <a
      href="#services"
      className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
    >
      Solar Installation
    </a>
  </li>

  <li>
    <a
      href="#services"
      className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
    >
      Battery Storage
    </a>
  </li>

  <li>
    <a
      href="#services"
      className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
    >
      Heat Pump Water Heating
    </a>
  </li>

  <li>
    <a
      href="#services"
      className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
    >
      Energy Audits
    </a>
  </li>

  <li>
    <a
      href="#services"
      className="text-green-100 hover:text-white hover:translate-x-1 inline-block transition"
    >
      Solar System Maintenance
    </a>
  </li>

</ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              {/* Location */}
              <div className="flex items-start gap-3">

                <MapPin className="w-5 h-5 text-green-400 mt-1 shrink-0" />

                <p className="text-green-100 leading-relaxed">
                  Tatu City
                  <br />
                  Along Jacaranda Road
                  <br />
                  Kenya
                </p>

              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">

                <Phone className="w-5 h-5 text-green-400 shrink-0" />

                <a
                  href="tel:+254726050901"
                  className="text-green-100 hover:text-white transition"
                >
                  +254 726 050 901
                </a>

              </div>

              {/* Email */}
              <div className="flex items-center gap-3">

                <Mail className="w-5 h-5 text-green-400 shrink-0" />

                <a
                  href="mailto:info@amperageenergy.com"
                  className="text-green-100 hover:text-white transition break-all"
                >
                  info@amperageenergy.com
                </a>

              </div>

            </div>

            {/* Quote Button */}
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-green-200 text-center md:text-left">
              © {new Date().getFullYear()} Amperage Energy Solutions.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">

              <a
                href="#contact"
                className="text-green-200 hover:text-white transition"
              >
                Privacy
              </a>

              <a
                href="#contact"
                className="text-green-200 hover:text-white transition"
              >
                Terms
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}