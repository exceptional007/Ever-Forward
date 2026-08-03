import { useEffect, useRef, useState } from "react";

/**
 * Tracks scroll position without layout thrashing: reads happen inside a
 * requestAnimationFrame tick driven by a passive scroll listener.
 */
export function useScrollState(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const frame = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const read = () => {
      const y = window.scrollY;
      setScrolled(y > threshold);
      const delta = y - lastY.current;
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 160);
        lastY.current = y;
      }
      frame.current = 0;
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(read);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    read();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [threshold]);

  return { scrolled, hidden };
}
