import { useState } from "react";
import { useSectionReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites that help businesses look credible and win more customers online.",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to turn visitors into leads and buyers.",
  },
  {
    title: "Portfolio Websites",
    description:
      "Personal portfolios that showcase your work beautifully and leave a strong impression.",
  },
  {
    title: "Website Redesigns",
    description:
      "Modernize your outdated website with a faster, cleaner, and more user-friendly design.",
  },
  {
    title: "AI Integration",
    description:
      "Add smart AI features to your website — chatbots, summarizers, search, and more.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Tailor-made web apps built around your exact workflow, users, and business goals.",
  },
];

const ServicesSection = () => {
  const ref = useSectionReveal<HTMLElement>();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="hairline py-24 md:py-32">
      <div className="container">
        {/* Alignment break: this header sits right */}
        <div className="mb-16 md:mb-20 md:flex md:justify-end">
          <div className="md:max-w-lg md:text-right">
            <div data-reveal className="eyebrow mb-6 md:flex-row-reverse md:before:hidden md:after:block md:after:h-px md:after:w-8 md:after:bg-ember/70 md:after:content-['']">
              What I Offer
            </div>
            <h2 data-reveal className="display text-display-sm md:text-display-md text-bone">
              Services
            </h2>
            <p
              data-reveal
              className="mt-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground"
            >
              Everything you need to build a stronger online presence — from
              simple landing pages to full-fledged AI-powered applications.
            </p>
          </div>
        </div>

        {/* Minimal, un-boxed rows — deliberately quieter than the project cards */}
        <ul className="grid gap-x-16 md:grid-cols-2">
          {services.map((service, i) => (
            <li
              key={service.title}
              data-reveal
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group relative border-t border-border/70 py-7 transition-colors hover:border-ember/50"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-xs text-muted-foreground/60 transition-colors group-hover:text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight text-bone">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm md:text-base font-light leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-px bg-ember transition-all duration-500"
                style={{ width: active === i ? "100%" : "0%" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
