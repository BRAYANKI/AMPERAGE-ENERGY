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

    setSuccess("✅ Your message has been sent successfully!");

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
    <section
  id="contact"
  className="py-24 bg-gray-50"
>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to power your home or business with renewable energy?
            Our team is here to answer your questions and provide expert guidance.
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

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

              <Phone className="w-8 h-8 text-green-600"/>

              <div>
                <h3 className="font-bold text-xl">
                  Call Us
                </h3>

                <p className="text-gray-600 mt-2">
                  +254 700 123 456
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

              <Mail className="w-8 h-8 text-green-600"/>

              <div>
                <h3 className="font-bold text-xl">
                  Email Us
                </h3>

                <p className="text-gray-600 mt-2">
                  info@amperageenergy.com
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

              <MapPin className="w-8 h-8 text-green-600"/>

              <div>
                <h3 className="font-bold text-xl">
                  Visit Us
                </h3>

                <p className="text-gray-600 mt-2">
                  Nairobi, Kenya
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">

              <Clock3 className="w-8 h-8 text-green-600"/>

              <div>
                <h3 className="font-bold text-xl">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Monday - Friday
                  <br />
                  8:00 AM - 5:00 PM
                </p>
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

            <div className="grid md:grid-cols-2 gap-6">

              <input
  type="text"
  name="name"
  placeholder="Full Name"
  value={formData.name}
  onChange={handleChange}
  required
  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>

              <input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
  required
  className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>

            </div>

            <input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  required
  className="w-full mt-6 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>
            <input
  type="text"
  name="subject"
  placeholder="Subject"
  value={formData.subject}
  onChange={handleChange}
  required
  className="w-full mt-6 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>

            <textarea
  rows={6}
  name="message"
  placeholder="Your Message"
  value={formData.message}
  onChange={handleChange}
  required
  className="w-full mt-6 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
/>
{success && (
  <p className="mt-6 text-green-700 font-medium">
    {success}
  </p>
)}

{error && (
  <p className="mt-6 text-red-600 font-medium">
    {error}
  </p>
)}
            <button
  type="submit"
  disabled={loading}
  className="mt-6 bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition"
>
  <Send className="w-5 h-5" />

  {loading ? "Sending..." : "Send Message"}

</button>

          </motion.form>

        </div>

      </div>
      {/* Google Map */}

<div className="mt-24">

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
      Stop by our office and let’s discuss your renewable energy project.
    </p>

    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8169065.704649098!2d27.035832725000013!3d-1.2935050999999982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1100077cd95f%3A0xcba2be27997a49ac!2sTHE%20PRIORY!5e0!3m2!1sen!2ske!4v1784048603902!5m2!1sen!2ske"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Amperage Energy Location"
      />

    </div>

  </motion.div>

</div>
    </section>
  );
}