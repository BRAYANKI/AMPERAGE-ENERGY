"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send your message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green-600">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Let&apos;s Power Your Future
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to power your home or business with renewable energy?
            Our team is here to answer your questions and provide expert
            guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Phone */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <Phone className="w-8 h-8 text-green-600 shrink-0" />

              <div>
                <h3 className="font-bold text-xl text-gray-900">
                  Call Us
                </h3>

                <a
                  href="tel:+254726050901"
                  className="text-gray-600 mt-2 block hover:text-green-600 transition"
                >
                  +254 726 050 901
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <Mail className="w-8 h-8 text-green-600 shrink-0" />

              <div>
                <h3 className="font-bold text-xl text-gray-900">
                  Email Us
                </h3>

                <a
                  href="mailto:info@amperageenergy.com"
                  className="text-gray-600 mt-2 block hover:text-green-600 transition"
                >
                  info@amperageenergy.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <MapPin className="w-8 h-8 text-green-600 shrink-0" />

              <div>
                <h3 className="font-bold text-xl text-gray-900">
                  Visit Us
                </h3>

                <p className="text-gray-600 mt-2">
                  Tatu City
                  <br />
                  Along Jacaranda Road
                  <br />
                  Kenya
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
              <Clock3 className="w-8 h-8 text-green-600 shrink-0" />

              <div>
                <h3 className="font-bold text-xl text-gray-900">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Monday - Friday
                  <br />
                  8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                Follow Us
              </h3>

              <div className="flex items-center gap-4">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1BhygU6ZTc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amperage Energy on Facebook"
                  className="w-11 h-11 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@amperage.energy.sol?_r=1&_t=ZS-98sUkvpkmXg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Amperage Energy on TikTok"
                  className="w-11 h-11 rounded-full bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2-2.76V9.4a6.32 6.32 0 1 0 5.45 6.27V8.26a8.16 8.16 0 0 0 4.77 1.52V6.69h-1z" />
                  </svg>
                </a>

              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >

            <h3 className="text-2xl font-bold text-gray-900">
              Request a Consultation
            </h3>

            <p className="mt-2 text-gray-600">
              Tell us about your energy needs and our team will get back to
              you.
            </p>

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6 mt-7">

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Kibet"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

            </div>

            {/* Phone */}
            <div className="mt-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+254 726 050 901"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Solar Installation Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            {/* Success */}
            {success && (
              <p
                role="status"
                className="mt-6 text-green-700 font-medium"
              >
                {success}
              </p>
            )}

            {/* Error */}
            {error && (
              <p
                role="alert"
                className="mt-6 text-red-600 font-medium"
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              <Send className="w-5 h-5" />

              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto px-6 mt-24">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Visit Our Office
          </h2>

          <p className="text-center text-gray-600 mb-10">
            Find us in Tatu City along Jacaranda Road.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

            <iframe
              src="https://www.google.com/maps?q=Tatu%20City%2C%20Jacaranda%20Road%2C%20Kenya&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Amperage Energy Location - Tatu City"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}