import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Archive, Calendar } from "lucide-react";
import { useEffect } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const timeline = [
  {
    year: "2021",
    items: [
      "Learned HTML, CSS & JavaScript",
      "Built CodingCafe",
      "Bought my first domain",
      "Hosted it using Google Drive + drv.tw",
    ],
  },
  {
    year: "2022 – 2025",
    items: [
      "Learned Git & GitHub",
      "GitHub Pages",
      "React",
      "TypeScript",
      "Next.js",
      "Firebase",
      "AI integrations",
      "Built production applications",
    ],
  },
  {
    year: "2026",
    items: [
      "Restored CodingCafe using archived HTML, CSS, images and assets recovered from the Wayback Machine.",
    ],
  },
];

const oldProjects = [
  { name: "Calculator", emoji: "🧮" },
  { name: "SnakeItUp", emoji: "🐍" },
  { name: "Clock", emoji: "🕰️" },
  { name: "TicTacToe", emoji: "❌⭕" },
  { name: "Musical Funda", emoji: "🎵" },
];

const Museum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="dark min-h-screen bg-background text-foreground">
      {/* Soft paper backdrop */}
      <div className="fixed inset-0 -z-10 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container px-6 py-12 md:py-20 max-w-3xl mx-auto">
        {/* Back link */}
        <motion.div {...fadeUp}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </motion.div>

        {/* Title */}
        <motion.header {...fadeUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mb-6">
            <Archive className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              Museum · Archive
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            CodingCafe <span className="text-muted-foreground font-normal">(2021)</span>
          </h1>
          <p className="text-muted-foreground text-lg italic">
            My first website, restored from the Internet Archive.
          </p>

          <a
            href="https://coding-cafe-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-full glass-card hover:border-primary/50 hover:scale-105 transition-all text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Open Original Website
          </a>
        </motion.header>

        {/* Timeline card */}
        <motion.section {...fadeUp} className="mb-20">
          <div className="glass-card rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="flex items-center gap-2 mb-8 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">
                The Journey
              </span>
            </div>

            <div className="space-y-8">
              {timeline.map((era, i) => (
                <div key={era.year}>
                  <div className="flex items-baseline gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                      {era.year}
                    </h3>
                  </div>
                  <ul className="space-y-2 pl-1">
                    {era.items.map((item) => (
                      <li
                        key={item}
                        className="text-foreground/80 flex gap-3 leading-relaxed"
                      >
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {i < timeline.length - 1 && (
                    <div className="flex justify-center py-6 text-muted-foreground/50 font-mono text-lg">
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* The Story */}
        <motion.section {...fadeUp} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Story</h2>
          <div className="space-y-5 text-foreground/85 leading-relaxed text-lg">
            <p>
              CodingCafe was my very first website, originally created in 2021
              while I was learning web development.
            </p>
            <p>
              At the time I knew only HTML, CSS and JavaScript. I had never used
              React, Next.js, TypeScript or any modern frameworks. I simply
              wanted a place where I could showcase the small projects I was
              building while learning.
            </p>
            <p>
              I even hosted the website using Google Drive together with drv.tw
              because I didn't know about platforms like Vercel or Netlify yet.
            </p>
            <p>Years later, the original source code was lost.</p>
            <p>
              Fortunately, the Internet Archive had preserved the website. Using
              archived HTML, CSS, images and other surviving assets, I carefully
              restored CodingCafe as faithfully as possible.
            </p>
            <p>
              Rather than redesigning it, I intentionally preserved the original
              layout and beginner imperfections because they represent where my
              programming journey began.
            </p>
          </div>
        </motion.section>

        {/* Projects Included */}
        <motion.section {...fadeUp} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Projects Included
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {oldProjects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-card rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl mb-2">{p.emoji}</div>
                <div className="font-mono text-sm text-foreground/90">
                  {p.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Time capsule note */}
        <motion.aside
          {...fadeUp}
          className="mb-16 border-l-2 border-primary/60 bg-primary/5 rounded-r-xl px-6 py-5"
        >
          <p className="italic text-foreground/85 leading-relaxed">
            "This page is intentionally preserved as a time capsule. It reflects
            my skills in 2021 and has not been modernized."
          </p>
        </motion.aside>

        {/* Footer */}
        <motion.footer
          {...fadeUp}
          className="border-t border-border pt-10 text-sm text-muted-foreground font-mono"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest mb-1 text-muted-foreground/60">
                Original build
              </div>
              <div>November 2021</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest mb-1 text-muted-foreground/60">
                Recovered from
              </div>
              <div>The Internet Archive</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest mb-1 text-muted-foreground/60">
                Restored
              </div>
              <div>July 2026</div>
            </div>
          </div>
          <div className="text-center text-foreground/70 leading-relaxed">
            <div>Built by 2021 Devansh.</div>
            <div>
              Restored by 2026 Devansh. <span className="text-red-500">❤</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
};

export default Museum;
