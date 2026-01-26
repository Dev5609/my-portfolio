import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Dev5609",
    icon: Github,
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/",
    icon: Linkedin,
    description: "Let's connect",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/",
    icon: Twitter,
    description: "Follow my journey",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to 
            discussing new opportunities and ideas.
          </p>
        </motion.div>

        {/* Contact cards */}
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
              <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors flex items-center justify-center gap-2">
                {link.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:hello@devanshgoel.dev"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:scale-105 glow-primary"
          >
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
