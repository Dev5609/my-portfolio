import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import MorphMark from "./MorphMark";

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  language: string;
  image?: string;
  featured?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

interface ProjectCardProps {
  project: Project;
  index: number;
  /** The first featured project gets a wider, louder treatment. */
  lead?: boolean;
}

/** Rich, image-led card — the visual centerpiece of the page. */
export const FeaturedProjectCard = ({ project, index, lead = false }: ProjectCardProps) => {
  const [hover, setHover] = useState(false);
  const flipped = !lead && index % 2 === 1;

  return (
    <motion.article
      data-reveal
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
    >
      {/* Screenshot */}
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block overflow-hidden rounded-xl border border-border/70 bg-card transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_40px_90px_-40px_hsl(var(--primary)/0.35)] ${
          lead ? "md:col-span-12" : "md:col-span-7"
        } ${flipped ? "md:order-2" : ""}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} website screenshot`}
            loading={lead ? "eager" : "lazy"}
            decoding="async"
            width={1200}
            height={750}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[900ms] ease-out will-change-transform group-hover:scale-[1.045]"
          />
        ) : (
          <div className="aspect-[16/10] w-full bg-secondary" />
        )}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-40" />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-bone opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
          View live <ArrowUpRight className="h-3 w-3" />
        </span>
      </a>

      {/* Copy */}
      <div className={`${lead ? "md:col-span-12" : "md:col-span-5"} ${flipped ? "md:order-1" : ""}`}>
        <div
          className={
            lead
              ? "flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
              : ""
          }
        >
          <div className={lead ? "md:max-w-xl" : ""}>
            <div className="mb-3 flex items-center gap-3 text-muted-foreground/70 transition-colors group-hover:text-ember">
              <MorphMark active={hover} />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]">
                {project.language}
              </span>
            </div>
            <h3
              className={`font-display leading-tight text-bone ${
                lead ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
              }`}
            >
              {project.name}
            </h3>
            <p
              className={`mt-4 font-light leading-relaxed text-muted-foreground ${
                lead ? "text-base md:text-lg" : "text-sm md:text-base"
              }`}
            >
              {project.description}
            </p>
          </div>

          <div className={lead ? "md:pt-10 md:text-right" : "mt-6"}>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground/60">
              Tech
            </p>
            <p className="mt-2 font-mono text-xs md:text-sm text-bone/80">
              {project.techStack.join(" • ")}
            </p>

            <div
              className={`mt-6 flex items-center gap-5 ${lead ? "md:justify-end" : ""}`}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm text-bone transition-colors hover:text-primary"
              >
                Live site
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="text-muted-foreground transition-colors hover:text-ember"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/** Quieter, compact treatment for the smaller side builds. */
export const CompactProjectCard = ({ project }: { project: Project }) => (
  <motion.article
    data-reveal
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4, ease: EASE }}
    className="group flex gap-5 border-t border-border/70 py-6 transition-colors hover:border-ember/50"
  >
    {project.image && (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden shrink-0 overflow-hidden rounded-lg border border-border/70 sm:block"
      >
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          decoding="async"
          width={320}
          height={200}
          className="h-20 w-32 object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </a>
    )}
    <div className="flex-1">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl md:text-2xl leading-tight text-bone">
          {project.name}
        </h3>
        <div className="flex items-center gap-4 pt-1">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} live site`}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="text-muted-foreground transition-colors hover:text-ember"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-2 max-w-xl text-sm font-light leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <p className="mt-3 font-mono text-[0.7rem] text-bone/70">
        {project.techStack.join(" • ")}
      </p>
    </div>
  </motion.article>
);

export default FeaturedProjectCard;
