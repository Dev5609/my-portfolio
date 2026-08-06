import { motion } from "framer-motion";

/**
 * Small decorative mark that morphs between a code-bracket and a
 * diamond outline on hover. Deliberately tiny in scope.
 */
const BRACKET =
  "M 9 5 L 4 12 L 9 19 M 15 5 L 20 12 L 15 19 M 12 4 L 12 20";
const DIAMOND =
  "M 12 4 L 5 12 L 12 20 M 12 4 L 19 12 L 12 20 M 5 12 L 19 12";

const MorphMark = ({ active = false }: { active?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-4 w-4"
    aria-hidden="true"
    strokeWidth={1.5}
    strokeLinecap="round"
  >
    <motion.path
      d={BRACKET}
      animate={{ d: active ? DIAMOND : BRACKET }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      stroke="currentColor"
    />
  </svg>
);

export default MorphMark;
