
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Cloud,
  CheckCircle2,
  Menu,
  Sparkles,
  Layers3,
  Target,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, scalable websites for businesses, startups, and organisations.",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Seamless digital experiences across mobiles, tablets, and desktops.",
    number: "02",
  },
  {
    icon: Cloud,
    title: "Digital Solutions",
    description:
      "Practical technology solutions tailored to your business needs.",
    number: "03",
  },
];

const steps = [
  ["01", "Discuss", "Understand your goals, requirements, and audience."],
  ["02", "Plan", "Define the right approach and project priorities."],
  ["03", "Develop", "Build, test, and refine your digital solution."],
  ["04", "Deliver", "Launch your website and take your next step forward."],
];

const benefits = [
  "User-focused design",
  "Mobile-responsive layouts",
  "Solutions built around your goals",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100D10] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#100D10]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            aria-label="Ethixweb home"
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-3xl text-[#ED555F]">E</span>
            thixweb<span className="text-[#ED555F]">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <Link href="/" className="transition-colors hover:text-[#ED555F]">
              Home
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-[#ED555F]"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-[#ED555F]"
            >
              About
            </Link>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#ED555F] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#D9434D] hover:shadow-lg hover:shadow-[#ED555F]/20"
          >
            Contact Us
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative border-b border-white/5">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#ED555F]/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#ED555F]/5 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:gap-16 lg:py-28">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ED555F]/30 bg-[#ED555F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#FF858C] sm:text-sm">
              <Sparkles size={15} />
              Digital Solutions for Modern Businesses
            </p>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Build Your Business Online with{" "}
              <span className="text-[#ED555F]">Ethixweb.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              We help businesses and startups create responsive websites
              and useful digital solutions that strengthen their online
              presence and support growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#ED555F] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9434D] hover:shadow-xl hover:shadow-[#ED555F]/20"
              >
                Start a Project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-4 font-semibold text-white transition-all hover:border-[#ED555F]/60 hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
              {[
                "Responsive Design",
                "Modern Websites",
                "Practical Solutions",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#ED555F]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#ED555F]/50 via-[#ED555F]/10 to-transparent blur-lg" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#171317]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85"
                alt="Laptop displaying a web development workspace"
                className="h-[320px] w-full object-cover opacity-85 transition duration-700 hover:scale-105 hover:opacity-100 sm:h-[400px] lg:h-[480px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#100D10]/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ED555F] text-white">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Ideas into experiences.
                    </p>
                    <p className="mt-1 text-sm text-gray-300">
                      Design · Development · Digital
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/10 bg-[#1B161B] p-4 shadow-xl sm:block md:-left-8">
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-[#ED555F]" />
                <div>
                  <p className="text-sm font-semibold">Built for your goals</p>
                  <p className="text-xs text-gray-400">
                    Thoughtful digital solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ED555F]">
                Our Services
              </p>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Digital solutions for{" "}
                <span className="text-[#ED555F]">real-world needs.</span>
              </h2>
            </div>

            <Link
              href="/services"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-[#ED555F]"
            >
              View all services
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151115] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#ED555F]/50 hover:shadow-xl hover:shadow-black/20 sm:p-8"
                >
                  <span className="absolute right-6 top-6 text-sm font-semibold text-white/20">
                    {service.number}
                  </span>

                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-[#ED555F]/20 bg-[#ED555F]/10 text-[#ED555F] transition-all duration-300 group-hover:bg-[#ED555F] group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[72px] leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ED555F] transition-colors hover:text-[#FF858C]"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-white/5 bg-[#151115] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#ED555F]/30 to-transparent opacity-70 blur-lg" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
                alt="A modern office workspace"
                className="h-[300px] w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100 md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100D10]/50 to-transparent" />
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ED555F]">
              About Ethixweb
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
              We turn ideas into{" "}
              <span className="text-[#ED555F]">
                digital experiences.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              We focus on understanding business requirements and creating
              practical digital experiences. Our goal is to help businesses
              develop useful websites and improve their online presence.
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#ED555F]"
                  />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-white/15 px-6 py-3.5 font-semibold transition-all hover:border-[#ED555F]/50 hover:bg-[#ED555F]/10"
            >
              More About Us
              <ArrowRight
                size={17}
                className="text-[#ED555F] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ED555F]">
              Our Process
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              How we bring your ideas{" "}
              <span className="text-[#ED555F]">to life.</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              A clear, collaborative approach from the first conversation
              to the final delivery.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <article
                key={number}
                className="group rounded-2xl border border-white/10 bg-[#151115] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED555F]/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ED555F]/10 text-lg font-bold text-[#ED555F] transition-colors group-hover:bg-[#ED555F] group-hover:text-white">
                  {number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">{title}</h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {description}
                </p>

                <div className="mt-6 h-px w-full bg-white/10 transition-colors group-hover:bg-[#ED555F]/50" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#ED555F]/25 bg-[#171317] px-6 py-14 sm:px-12 md:py-20">
          <div className="pointer-events-none absolute -right-10 -top-32 h-80 w-80 rounded-full bg-[#ED555F]/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 left-0 h-72 w-72 rounded-full bg-[#ED555F]/10 blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ED555F]">
                Have a project in mind?
              </p>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-[#ED555F]">great together.</span>
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                Tell us about your requirements and let&apos;s explore
                the right digital solution for your business.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-[#ED555F] px-7 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#D9434D] hover:shadow-lg hover:shadow-[#ED555F]/20"
            >
              Let&apos;s Talk
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0B090B] px-5 py-9 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-[#ED555F]">E</span>thixweb
            <span className="text-[#ED555F]">.</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-[#ED555F]">
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-[#ED555F]"
            >
              About
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-[#ED555F]"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-[#ED555F]"
            >
              Contact
            </Link>
          </div>

          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Ethixweb. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
