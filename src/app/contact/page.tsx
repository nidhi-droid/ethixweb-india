"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Frontend demo only: no API, database, or email submission.
    setIsSuccess(true);
    event.currentTarget.reset();
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#151215] px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#ED555F] focus:ring-2 focus:ring-[#ED555F]/15";

  return (
    <main className="min-h-screen overflow-hidden bg-[#100D10] text-white">
      <section className="relative border-b border-white/10 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#ED555F]/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-40 w-72 rounded-full bg-[#ED555F]/5 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ED555F]/30 bg-[#ED555F]/10 px-4 py-2 text-xs font-medium tracking-wide text-[#FF858C]">
            <Sparkles size={14} />
            LET'S BUILD SOMETHING GREAT
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Have a project in mind?
            <span className="mt-2 block text-[#ED555F]">Let's talk.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Have an idea, a challenge, or a goal you want to achieve?
            Tell us about it. We’ll help you explore the right digital
            solution for your business.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED555F]">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-snug sm:text-4xl">
              Let’s turn your
              <span className="text-[#ED555F]"> vision </span>
              into reality.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-gray-400">
              Whether you need a website, a mobile application, or a
              complete digital solution, our team is ready to hear from you.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:hello@ethixweb.com"
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:border-[#ED555F]/50 hover:bg-[#ED555F]/[0.05]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ED555F]/10 text-[#ED555F] transition-colors group-hover:bg-[#ED555F] group-hover:text-white">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email us</p>
                  <p className="mt-1 break-all font-medium text-white">
                    hello@ethixweb.com
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Click to send us an email
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="ml-auto mt-1 shrink-0 text-gray-500 transition-all group-hover:translate-x-1 group-hover:text-[#ED555F]"
                />
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ED555F]/10 text-[#ED555F]">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Our reach</p>
                  <p className="mt-1 font-medium text-white">India & beyond</p>
                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    Digital solutions for businesses ready to grow.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#ED555F]/20 bg-gradient-to-br from-[#ED555F]/10 to-transparent p-6">
                <MessageSquare size={24} className="text-[#ED555F]" />

                <h3 className="mt-4 text-lg font-semibold">
                  Not sure where to start?
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Share your requirements with us. We can discuss your goals
                  and possible next steps.
                </p>

                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ED555F] transition-colors hover:text-[#FF858C]"
                >
                  Explore our services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#171317] p-5 shadow-2xl shadow-black/20 sm:p-9">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#ED555F]">
                Project enquiry
              </p>

              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Tell us about your project
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Fill in the details below to preview the enquiry form.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Full name <span className="text-[#ED555F]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email address <span className="text-[#ED555F]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-300">
                  Company name <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  autoComplete="organization"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-300">
                  What do you need? <span className="text-[#ED555F]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="web-development">Website Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                  Project details <span className="text-[#ED555F]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your idea, goals, timeline, or requirements..."
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              {isSuccess && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400"
                >
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                  <p>
                    Demo form submitted successfully. No enquiry was sent or saved.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#ED555F] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#D9434D] hover:shadow-lg hover:shadow-[#ED555F]/20"
              >
                Preview submission
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                This is a frontend-only demo. Your details will not be sent or stored.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#ED555F]/20 bg-[#171317] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-[#ED555F]/10 blur-[80px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ED555F]">
              Your next big idea starts here
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-5xl">
              Let’s create something that matters.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Great digital experiences start with a conversation. We’re ready when you are.
            </p>

            <a
              href="mailto:hello@ethixweb.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#ED555F] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#ED555F]"
            >
              <Mail size={17} />
              Email our team
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
