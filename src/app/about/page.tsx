
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Rocket,
  MessageCircle,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your goals, audience, and business challenges.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the right approach, features, and project priorities.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop a responsive, user-friendly digital solution.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We use feedback to refine the experience and support future growth.",
  },
];

const values = [
  {
    title: "Clear Communication",
    description:
      "Keeping project goals, progress, and expectations easy to understand.",
    icon: MessageCircle,
  },
  {
    title: "User-Focused Design",
    description:
      "Creating digital experiences that are intuitive, accessible, and easy to use.",
    icon: Palette,
  },
  {
    title: "Quality and Reliability",
    description:
      "Building with attention to performance, usability, and maintainability.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100D10] text-white">
      {/* Hero Section */}
      <section className="relative border-b border-white/10 bg-[#100D10] px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#ED555F]/10 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#ED555F]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ED555F]/30 bg-[#ED555F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#FF858C]">
              <Sparkles size={15} />
              About Ethixweb India
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              We build digital experiences that move businesses{" "}
              <span className="text-[#ED555F]">forward.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
              We help businesses strengthen their online presence with
              thoughtful web design, reliable development, and practical
              digital solutions.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#ED555F] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9434D] hover:shadow-lg hover:shadow-[#ED555F]/20"
            >
              Let&apos;s Work Together
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#ED555F]/50 to-transparent opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#191519]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                alt="Team collaborating on a digital project"
                className="h-[320px] w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100 md:h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100D10]/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#100D10]/80 p-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">
                  Thoughtful design. Reliable technology.
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Digital solutions built around your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are — No Photo */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ED555F]">
            Who We Are
          </p>

          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Your partner in building a stronger{" "}
            <span className="text-[#ED555F]">digital presence.</span>
          </h2>

          <p className="mt-7 text-base leading-8 text-gray-400 md:text-lg">
            At Ethixweb India, we believe technology should make business
            simpler, not more complicated. We focus on creating digital
            solutions that are useful, accessible, and designed around
            real business needs.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-400 md:text-lg">
            From professional websites to custom web applications, our goal
            is to help businesses connect with their customers, improve
            their workflows, and grow with confidence.
          </p>

          <div className="mt-9 h-px w-full bg-gradient-to-r from-[#ED555F]/60 via-white/10 to-transparent" />
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="border-y border-white/5 bg-[#151115] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ED555F]">
              What Drives Us
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Technology with a clear purpose.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="group rounded-2xl border border-white/10 bg-[#100D10] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED555F]/50 hover:shadow-xl hover:shadow-black/20">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#ED555F]/20 bg-[#ED555F]/10 text-[#ED555F] transition-colors group-hover:bg-[#ED555F] group-hover:text-white">
                <Target size={27} />
              </div>

              <h3 className="text-2xl font-semibold">Our Mission</h3>

              <p className="mt-4 leading-8 text-gray-400">
                To make effective digital solutions more accessible to
                businesses through quality development, user-focused design,
                and dependable technical support.
              </p>
            </div>

            {/* Vision */}
            <div className="group rounded-2xl border border-white/10 bg-[#100D10] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED555F]/50 hover:shadow-xl hover:shadow-black/20">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#ED555F]/20 bg-[#ED555F]/10 text-[#ED555F] transition-colors group-hover:bg-[#ED555F] group-hover:text-white">
                <Rocket size={27} />
              </div>

              <h3 className="text-2xl font-semibold">Our Vision</h3>

              <p className="mt-4 leading-8 text-gray-400">
                To become a trusted digital partner for businesses by
                combining creativity, technology, and a commitment to
                continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ED555F]">
              Our Approach
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              From your idea to a{" "}
              <span className="text-[#ED555F]">practical solution.</span>
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              We keep the process clear, collaborative, and focused on
              the outcomes that matter to your business.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl border border-white/10 bg-[#151115] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED555F]/50"
              >
                <p className="text-sm font-bold tracking-widest text-[#ED555F]">
                  STEP {step.number}
                </p>

                <div className="my-5 h-px w-full bg-white/10 transition-colors group-hover:bg-[#ED555F]/60" />

                <h3 className="text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-y border-white/5 bg-[#151115] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ED555F]">
              What Matters to Us
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Good work starts with the{" "}
              <span className="text-[#ED555F]">right values.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-white/10 bg-[#100D10] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ED555F]/50 hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ED555F]/10 text-[#ED555F] transition-all duration-300 group-hover:bg-[#ED555F] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#ED555F]/30 bg-[#151115] px-6 py-14 text-center sm:px-12 md:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#ED555F]/10 blur-[100px]" />

          <div className="relative">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ED555F]">
              Let&apos;s Connect
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
              Let&apos;s discuss your goals and explore how the right digital
              solution can help your business move forward.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#ED555F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9434D] hover:shadow-lg hover:shadow-[#ED555F]/20"
            >
              Contact Us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
