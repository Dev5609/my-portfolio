import { Heart, Archive } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            © 2026 Devansh Goel
          </span>

          <div className="flex items-center gap-2 text-sm font-light text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-ember text-ember" />
            <span>and lots of</span>
            <span>☕</span>
          </div>

          <Link
            to="/museum"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-ember"
          >
            <Archive className="h-3.5 w-3.5" />
            Visit the Museum — Coding-Cafe (2021)
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
