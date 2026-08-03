import { memo, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  as?: "div" | "span" | "li";
};

/** Blur + fade-up reveal on first entry. GPU-only properties. */
export const Reveal = memo(function Reveal({
  children,
  delay = 0,
  y = 24,
  blur = true,
  className,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as];

  if (reduced) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, delay, ease }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </Comp>
  );
});
