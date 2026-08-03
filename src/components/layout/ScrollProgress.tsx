import { memo } from "react";
import { motion, useScroll, useSpring } from "motion/react";

/** Top scroll progress bar. */
export const ScrollProgress = memo(function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left accent-gradient"
      style={{ scaleX }}
    />
  );
});
