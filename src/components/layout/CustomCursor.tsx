import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useFinePointer } from "@/hooks/use-fine-pointer";

/** Custom cursor — desktop pointers only, disabled under reduced motion. */
export const CustomCursor = memo(function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!fine || reduced) return;

    let frame = 0;
    let next = { x: -100, y: -100 };

    const onMove = (e: PointerEvent) => {
      next = { x: e.clientX, y: e.clientY };
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a,button,[data-cursor='hover'],input,textarea");
      setActive(Boolean(interactive));
      if (!frame) {
        frame = requestAnimationFrame(() => {
          setPos(next);
          frame = 0;
        });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [fine, reduced]);

  if (!fine || reduced) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 rounded-full bg-primary mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: active ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 900, damping: 40 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full border border-primary/60 mix-blend-difference"
        style={{ height: 36, width: 36 }}
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: active ? 1.5 : 1,
          opacity: active ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      />
    </>
  );
});
