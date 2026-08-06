const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Firebase",
  "Vite",
  "GSAP",
  "Node.js",
  "AI APIs",
  "Supabase",
  "Git",
];

const TechMarquee = () => {
  return (
    <section
      aria-label="Tools and technologies I work with"
      className="hairline py-10 md:py-12"
    >
      <div className="marquee-mask relative overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10 md:gap-16">
          {[...tools, ...tools].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="flex shrink-0 items-center gap-10 md:gap-16 font-mono text-sm md:text-base uppercase tracking-[0.18em] text-muted-foreground/80"
            >
              {tool}
              <span className="h-1 w-1 rounded-full bg-ember/60" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
