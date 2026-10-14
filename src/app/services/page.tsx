
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    description:
      "Responsive, reliable websites and web applications designed around your business needs.",
    items: ["Business websites", "Full-stack applications", "API integration"],
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Responsive Experiences",
    description:
      "Thoughtful interfaces that make your digital presence easy to use across devices.",
    items: ["Mobile-first layouts", "Accessible interfaces", "User-focused design"],
  },
  {
    icon: Layers3,
    number: "03",
    title: "Digital Product Engineering",
    description:
      "Turn an early idea into a structured digital product with a clear path to launch.",
    items: ["Product prototyping", "Frontend engineering", "Ongoing improvements"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#100D10] text-[#F5EEEE]">
      <section className="section-block">
        <p className="section-kicker">OUR SERVICES</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Digital solutions for your{" "}
          <span className="text-[#ED555F]">next chapter.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#B4A7AA] md:text-base">
          From websites to digital products, we bring thoughtful design and
          engineering together to solve real business problems.
        </p>
        <Link href="/contact" className="button-primary mt-8">
          Discuss your project <ArrowRight size={18} />
        </Link>
      </section>

      <section className="section-block pt-0">
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, description, items }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top">
                <span className="service-number">{number}</span>
                <span className="service-icon"><Icon size={23} /></span>
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
              <ul className="mt-5 grid gap-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#D7CBCD]">
                    <CheckCircle2 size={16} className="shrink-0 text-[#ED555F]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          <p className="section-kicker">LET&apos;S BUILD SOMETHING USEFUL</p>
          <h2>Have a challenge?<br /><span>Let&apos;s talk.</span></h2>
          <p>Tell us what you are working on and what you want to achieve.</p>
          <Link href="/contact" className="button-light">
            Contact our team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
