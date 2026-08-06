import { useSectionReveal } from "@/hooks/useScrollReveal";

const items = [
  { emoji: "🧠", label: "Learning AI/ML", status: "In progress", tone: "primary" },
  { emoji: "🚀", label: "Building web applications", status: "Live", tone: "primary" },
  { emoji: "☕", label: "Probably debugging something", status: "Always", tone: "ember" },
];

const CurrentlySection = () => {
  const ref = useSectionReveal<HTMLElement>();

  return (
    <section id="currently" ref={ref} className="hairline py-20 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:max-w-sm">
            <div data-reveal className="eyebrow mb-6">
              Currently
            </div>
            <h2 data-reveal className="display text-display-sm text-bone">
              What I'm <span className="italic text-primary">up to</span>
            </h2>
          </div>

          {/* Glass status cards — the one place besides the hero badge that uses glass */}
          <div className="grid flex-1 gap-3 sm:grid-cols-3 lg:max-w-3xl">
            {items.map((item) => (
              <div
                key={item.label}
                data-reveal
                className="glass-card glass-reflect rounded-xl p-5 transition-colors duration-300 hover:border-bone/25"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-2xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="relative flex h-1.5 w-1.5">
                      <span
                        className={`absolute inline-flex h-full w-full rounded-full animate-status-ping ${
                          item.tone === "ember" ? "bg-ember" : "bg-primary"
                        }`}
                      />
                      <span
                        className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                          item.tone === "ember" ? "bg-ember" : "bg-primary"
                        }`}
                      />
                    </span>
                    {item.status}
                  </span>
                </div>
                <p className="text-sm font-light leading-snug text-bone/90">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlySection;
