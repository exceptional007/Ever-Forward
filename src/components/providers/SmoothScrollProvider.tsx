import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger, setSmoothScroller } from "@/lib/gsap-motion";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        duration: 0.9,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        autoRaf: false,
        anchors: { offset: -88, duration: 0.85 },
        prevent: (node) =>
          Boolean(
            node.closest('[data-lenis-prevent], [role="dialog"], [cmdk-list], [data-chat-scroll]'),
          ),
      });
      setSmoothScroller(lenis);
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (seconds: number) => lenis.raf(seconds * 1000);
      gsap.ticker.add(tick);
      return () => {
        gsap.ticker.remove(tick);
        setSmoothScroller(null);
        lenis.destroy();
      };
    });
    return () => media.revert();
  }, []);
  return <>{children}</>;
}
