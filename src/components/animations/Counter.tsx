import { memo, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "motion/react";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** rAF-driven count-up, started once on entry. */
export const Counter = memo(function Counter({
  value,
  suffix = "",
  duration = 1600,
  className,
}: CounterProps) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [display, setDisplay] = useState(reduced ? value : 0);
  const frame = useRef(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [inView, reduced, value, duration]);

  const decimals = Number.isInteger(value) ? 0 : 2;

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
});
