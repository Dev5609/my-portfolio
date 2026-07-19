import { motion } from "framer-motion";

const items = [
  { emoji: "🧠", label: "Learning AI/ML" },
  { emoji: "🚀", label: "Building web applications" },
  { emoji: "☕", label: "Probably debugging something" },
];

const CurrentlySection = () => {
  return (
    <section id="currently" className="py-16 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-mono text-primary mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Currently
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            What I'm <span className="gradient-text">up to</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/30"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <p className="font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlySection;
