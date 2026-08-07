import { useSectionReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "The portfolio was literally perfect. It was exactly what I wanted, to be honest. I loved the outcome. Thanks for making it so good and well.",
    name: "Kush Bhargava",
    role: "Decten Motion",
    image: "/kush-bhargav.png",
  },
];

const TestimonialsSection = () => {
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section id="testimonials" ref={ref} className="hairline relative overflow-hidden py-24 md:py-32">
      {/* Oversized decorative quote mark — anchors the empty right side */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[2%] top-1/2 hidden -translate-y-1/2 select-none font-display text-[34rem] leading-none text-bone/[0.035] lg:block"
      >
        ”
      </span>

      <div className="container relative">
        <div data-reveal className="eyebrow mb-12">
          Kind Words
        </div>

        {/* Pull-quote treatment — deliberately un-boxed */}
        {testimonials.map((t) => (
          <figure key={t.name} className="max-w-4xl">
            <blockquote
              data-reveal
              className="font-display text-3xl leading-[1.2] text-bone md:text-5xl md:leading-[1.15] text-balance"
            >
              <span className="text-ember" aria-hidden="true">
                “
              </span>
              {t.quote}
              <span className="text-ember" aria-hidden="true">
                ”
              </span>
            </blockquote>

            <figcaption
              data-reveal
              className="mt-10 flex items-center gap-4 border-t border-border/70 pt-8"
            >
              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
                decoding="async"
                width={56}
                height={56}
                className="h-12 w-12 rounded-full border border-ember/30 object-cover"
              />
              <div>
                <div className="text-base text-bone">{t.name}</div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {t.role}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
