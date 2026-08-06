import { useSectionReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="hairline py-24 md:py-32">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div data-reveal className="eyebrow mb-6">
              About Me
            </div>
            <h2
              data-reveal
              className="display text-display-sm text-bone md:sticky md:top-28"
            >
              A quick <span className="italic text-ember">intro</span>
            </h2>
          </div>

          <div className="md:col-span-8 md:pt-2">
            <p
              data-reveal
              className="text-2xl md:text-[2rem] font-light leading-[1.35] text-bone/90 text-balance"
            >
              I'm a 17-year-old developer focused on building modern web
              applications and exploring AI technologies.
            </p>
            <p
              data-reveal
              className="mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed text-muted-foreground"
            >
              I enjoy turning ideas into clean, fast, and user-friendly digital
              products — whether that's a business website, a landing page, or
              an AI-powered tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
