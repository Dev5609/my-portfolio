import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Archive } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import XLogo from "./XLogo";
import { useMagnetic } from "@/hooks/useMagnetic";
import { prefersReducedMotion, useParallax } from "@/hooks/useScrollReveal";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Line-by-line clip reveal used for the hero name + tagline. */
const RevealLine = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <span className="block overflow-hidden pb-[0.06em]">
    <motion.span
      initial={{ y: "110%", clipPath: "inset(0 0 100% 0)" }}
      animate={{ y: "0%", clipPath: "inset(0 0 -10% 0)" }}
      transition={{ duration: 1, delay, ease: EASE }}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  </span>
);

const HeroSection = () => {
  const magnetRef = useMagnetic<HTMLAnchorElement>(0.28);
  const glowRef = useRef<HTMLDivElement>(null);
  const auroraRef = useParallax<HTMLDivElement>(70);

  // Soft cursor-trailing glow — hero only.
  useEffect(() => {
    const el = glowRef.current;
    if (!el || prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const section = el.parentElement;
    if (!section) return;

    const xTo = gsap.quickTo(el, "x", { duration: 1.1, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 1.1, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      xTo(e.clientX - r.left);
      yTo(e.clientY - r.top);
      gsap.to(el, { opacity: 1, duration: 0.6 });
    };
    const onLeave = () => gsap.to(el, { opacity: 0, duration: 0.8 });

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* Aurora mesh gradient — the page's single "wow" background moment */}
      <div
        ref={auroraRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="aurora-blob animate-aurora-a left-[-12%] top-[4%] h-[46vw] w-[46vw] bg-primary/20" />
        <div className="aurora-blob animate-aurora-b right-[-10%] top-[22%] h-[40vw] w-[40vw] bg-ember/[0.16]" />
        <div className="aurora-blob animate-aurora-c left-[26%] bottom-[-16%] h-[42vw] w-[42vw] bg-primary/[0.09]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Cursor-trailing glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/[0.07] opacity-0 blur-3xl"
      />

      {/* Ambient right-side device — fills wide-viewport space without competing */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6%] top-1/2 hidden h-[46vw] w-[46vw] max-h-[720px] max-w-[720px] -translate-y-1/2 lg:block"
      >
        <div className="absolute inset-[14%] rounded-full border border-primary/25 animate-spin-slow">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/70 blur-[1px]" />
        </div>
        <div className="absolute inset-[26%] rounded-full border border-ember/20 animate-spin-slower">
          <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-ember/70" />
        </div>
        <div className="absolute inset-[38%] rounded-full border border-bone/[0.12]" />
        <div className="absolute inset-[8%] rounded-full dot-grid opacity-[0.5] [mask-image:radial-gradient(circle,black,transparent_70%)]" />
        <div className="absolute inset-[30%] rounded-full bg-primary/[0.13] blur-3xl" />
        <div className="absolute inset-[42%] rounded-full bg-ember/[0.09] blur-2xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">

          {/* Status — one of only two pill badges kept as a signature motif */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10 inline-flex items-center gap-3 rounded-full glass-card glass-reflect px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-status-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Available for new projects
            </span>
          </motion.div>

          <h1 className="display text-display-md md:text-display-lg text-bone">
            <RevealLine delay={0.15} className="text-muted-foreground/90">
              Hey, I'm
            </RevealLine>
            <RevealLine delay={0.3}>Devansh Goel</RevealLine>
          </h1>

          <p className="mt-8 max-w-2xl text-xl md:text-3xl font-light leading-snug text-foreground/85">
            <RevealLine delay={0.5}>
              Building Modern Websites{" "}
              <span className="text-ember">&amp;</span> AI Applications
            </RevealLine>
          </p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed text-muted-foreground"
          >
            I build modern websites and AI-powered applications that help
            businesses and creators establish a stronger, more meaningful online
            presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            <a
              ref={magnetRef}
              href="https://github.com/Dev5609"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-shadow glow-primary hover:shadow-2xl"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/devansh-goel09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm text-bone/90 transition-colors hover:border-bone/40 hover:text-bone"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/devanshh_9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm text-bone/90 transition-colors hover:border-bone/40 hover:text-bone"
            >
              <XLogo className="h-3.5 w-3.5" />
              <span>X</span>
            </a>
            <Link
              to="/museum"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-ember"
            >
              <Archive className="h-3.5 w-3.5" />
              <span>Museum</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-bone"
        >
          <span className="h-px w-10 bg-border" />
          Scroll to explore
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
