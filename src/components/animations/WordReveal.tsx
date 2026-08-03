import { memo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease, viewportOnce } from "@/lib/motion";

type WordRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
};

/** Per-word blur/rise reveal. Renders plain text under reduced motion. */
export const WordReveal = memo(function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.045,
}: WordRevealProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            variants={{
              hidden: { y: "0.9em", opacity: 0, filter: "blur(6px)" },
              show: { y: 0, opacity: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.7, ease }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
});
