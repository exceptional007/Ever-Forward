import { memo } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Ambient background: aurora blobs, grid, noise. Fixed, pointer-transparent. */
export const Background = memo(function Background() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise">
      <div className="absolute inset-0 grid-lines opacity-[0.35] [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)]" />

      <div
        className={`absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px] ${reduced ? "" : "blob"}`}
      />
      <div
        className={`absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-violet/18 blur-[150px] ${reduced ? "" : "blob"}`}
        style={{ animationDelay: "-9s" }}
      />
      <div
        className={`absolute bottom-0 -left-32 h-[30rem] w-[30rem] rounded-full bg-primary/12 blur-[140px] ${reduced ? "" : "blob"}`}
        style={{ animationDelay: "-17s" }}
      />

      {!reduced && (
        <motion.div
          className="absolute inset-x-0 top-0 h-px accent-gradient opacity-40"
          animate={{ opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
});
