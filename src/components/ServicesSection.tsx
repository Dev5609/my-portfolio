import { motion } from "framer-motion";
import { Briefcase, LayoutTemplate, User, RefreshCw, Sparkles, Code2 } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional websites that help businesses look credible and win more customers online.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into leads and buyers.",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description: "Personal portfolios that showcase your work beautifully and leave a strong impression.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description: "Modernize your outdated website with a faster, cleaner, and more user-friendly design.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Add smart AI features to your website — chatbots, summarizers, search, and more.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Tailor-made web apps built around your exact workflow, users, and business goals.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 relative">
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
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build a stronger online presence — from simple
            landing pages to full-fledged AI-powered applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
