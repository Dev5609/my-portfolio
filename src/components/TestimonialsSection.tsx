import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import kushAsset from "@/assets/kush-bhargav.png.asset.json";

const testimonials = [
  {
    quote:
      "The portfolio was literally perfect. It was exactly what I wanted, to be honest. I loved the outcome. Thanks for making it so good and well.",
    name: "Kush Bhargav",
    role: "Decten Motion",
    image: kushAsset.url,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            Kind Words
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What clients <span className="gradient-text">say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real people I've had the pleasure to build for.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
              <Quote className="w-10 h-10 text-primary/40 mb-6" />
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover border border-primary/30"
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground font-mono">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
