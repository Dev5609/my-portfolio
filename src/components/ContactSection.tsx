import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Sparkles } from "lucide-react";
import XLogo from "./XLogo";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Dev5609",
    icon: Github,
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/devansh-goel09",
    icon: Linkedin,
    description: "Let's connect",
  },
  {
    name: "X",
    url: "https://x.com/devanshh_9",
    icon: XLogo,
    description: "Follow my journey",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            Let's Build Together
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Got a project in mind? <span className="gradient-text">Let's talk.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you need a business website, a landing page, or an AI-powered
            web app — I'd love to help bring your idea to life.
          </p>
        </motion.div>

        {/* Primary contact CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-3xl p-8 md:p-10 max-w-3xl mx-auto mb-12 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Reach out directly — I usually reply within a day. Let's turn your
              idea into something people love using.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:devanshg5609@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:scale-105 glow-primary"
              >
                <Mail className="w-5 h-5" />
                <span>Hire Me</span>
              </a>
              <a
                href="tel:+917302340393"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full glass-card font-medium transition-all hover:scale-105 hover:border-primary/50"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 73023 40393</span>
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:devanshg5609@gmail.com"
                className="font-mono hover:text-primary transition-colors"
              >
                devanshg5609@gmail.com
              </a>
              <span className="hidden sm:inline text-border">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Currently accepting new projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Social cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/30 hover:scale-105"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="relative w-fit mx-auto flex justify-center items-center">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <ArrowUpRight className="absolute -right-6 top-1 w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </div>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
