import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A quick <span className="gradient-text">intro</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm a 17-year-old developer focused on building modern web applications
            and exploring AI technologies. I enjoy turning ideas into clean, fast,
            and user-friendly digital products — whether that's a business website,
            a landing page, or an AI-powered tool.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
