"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      interest: formData.get("interest"),
      customerType: formData.get("customerType"),
      electricityBill: formData.get("electricityBill"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setSuccess(
        "Thank you. Your energy assessment request has been sent successfully."
      );

      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-green-700 font-semibold text-sm uppercase tracking-widest">
            Get Started
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Let&apos;s engineer a better energy solution
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Tell us about your energy needs and our team will assess your
            requirements and recommend a practical solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Contact information */}
          <div className="lg:col-span-2 bg-green-950 text-white rounded-2xl p-8 md:p-10">

            <p className="text-green-300 font-semibold text-sm uppercase tracking-widest">
              Amperage Energy
            </p>

            <h3 className="mt-4 text-3xl font-bold">
              Start with an energy assessment
            </h3>

            <p className="mt-5 text-green-100 leading-relaxed">
              Whether you are looking to reduce electricity costs, improve
              power reliability, or explore solar and energy storage, we can
              help you evaluate the right approach.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-green-300">
                    Phone
                  </p>
                  <p className="mt-1 font-medium">
                    Contact our energy team
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-green-300">
                    Email
                  </p>
                  <p className="mt-1 font-medium break-all">
                    info@amperageenergy.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-green-300">
                    Location
                  </p>
                  <p className="mt-1 font-medium">
                    Tatu City, Along Jacaranda Road
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-green-200">
                Practical Engineering • Professional Installation • Reliable
                Support
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="customerType"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Customer Type *
                  </label>

                  <select
                    id="customerType"
                    name="customerType"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="" disabled>
                      Select customer type
                    </option>
                    <option value="Homeowner">Homeowner</option>
                    <option value="Business">Business</option>
                    <option value="Institution">Institution</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    I'm Interested In *
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Solar Installation">
                      Solar Installation
                    </option>
                    <option value="Battery Storage">
                      Battery Storage
                    </option>
                    <option value="Energy Audit">
                      Energy Audit
                    </option>
                    <option value="Heat Pump">
                      Heat Pump
                    </option>
                    <option value="Maintenance">
                      Maintenance & Support
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="electricityBill"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Average Monthly Electricity Bill
                  </label>

                  <select
                    id="electricityBill"
                    name="electricityBill"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  >
                    <option value="">
                      Select range
                    </option>
                    <option value="Below KES 10,000">
                      Below KES 10,000
                    </option>
                    <option value="KES 10,000 - 50,000">
                      KES 10,000 - 50,000
                    </option>
                    <option value="KES 50,000 - 100,000">
                      KES 50,000 - 100,000
                    </option>
                    <option value="KES 100,000 - 250,000">
                      KES 100,000 - 250,000
                    </option>
                    <option value="Above KES 250,000">
                      Above KES 250,000
                    </option>
                  </select>
                </div>

              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Subject *
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Tell us about your energy needs *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your current energy setup, electricity costs, power challenges, or what you would like to achieve."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Success message */}
              {success && (
                <div className="flex items-start gap-3 rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                  <p className="text-sm font-medium">
                    {success}
                  </p>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
                  <p className="text-sm font-medium">
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {loading ? "Sending Request..." : "Request Energy Assessment"}

                {!loading && (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you are requesting an energy
                assessment from Amperage Energy.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
