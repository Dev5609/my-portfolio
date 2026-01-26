import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="font-mono text-sm">© 2026 Devansh Goel</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and lots of</span>
            <span className="font-mono text-primary">☕</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
