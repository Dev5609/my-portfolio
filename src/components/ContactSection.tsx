import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import XLogo from "./XLogo";
import { useSectionReveal } from "@/hooks/useScrollReveal";
import { useMagnetic } from "@/hooks/useMagnetic";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Dev5609", icon: Github, description: "Check out my code" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/devansh-goel09", icon: Linkedin, description: "Let's connect" },
  { name: "X", url: "https://x.com/devanshh_9", icon: XLogo, description: "Follow my journey" },
];

const ContactSection = () => {
  const ref = useSectionReveal<HTMLElement>();
  const magnetRef = useMagnetic<HTMLAnchorElement>(0.25);

  return (
    <section id="contact" ref={ref} className="hairline py-24 md:py-32">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left: the ask */}
          <div className="lg:col-span-7">
            <div data-reveal className="eyebrow mb-6">
              Let's Build Together
            </div>
            <h2 data-reveal className="display text-display-sm md:text-display-md text-bone">
              Got a project in mind?{" "}
              <span className="italic text-primary">Let's talk.</span>
            </h2>
            <p
              data-reveal
              className="mt-8 max-w-xl text-base md:text-lg font-light leading-relaxed text-muted-foreground"
            >
              Whether you need a business website, a landing page, or an
              AI-powered web app — I'd love to help bring your idea to life.
              Reach out directly; I usually reply within a day.
            </p>

            <div data-reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                ref={magnetRef}
                href="mailto:devanshg5609@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-shadow glow-primary hover:shadow-2xl"
              >
                <Mail className="h-4 w-4" />
                <span>Hire Me</span>
              </a>
              <a
                href="tel:+917302340393"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-sm text-bone transition-colors hover:border-ember/50 hover:text-ember"
              >
                <Phone className="h-4 w-4" />
                <span>+91 73023 40393</span>
              </a>
            </div>

            <div
              data-reveal
              className="mt-8 flex flex-col gap-3 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-6"
            >
              <a
                href="mailto:devanshg5609@gmail.com"
                className="transition-colors hover:text-bone"
              >
                devanshg5609@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-status-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                Currently accepting new projects
              </span>
            </div>
          </div>

          {/* Right: quiet link list, not another card grid */}
          <div className="lg:col-span-5 lg:pt-4">
            <ul>
              {socialLinks.map((link) => (
                <li key={link.name} data-reveal>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-t border-border/70 py-6 transition-colors hover:border-ember/50"
                  >
                    <span className="flex items-center gap-4">
                      <link.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-ember" />
                      <span>
                        <span className="block font-display text-xl text-bone">
                          {link.name}
                        </span>
                        <span className="block text-sm font-light text-muted-foreground">
                          {link.description}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
