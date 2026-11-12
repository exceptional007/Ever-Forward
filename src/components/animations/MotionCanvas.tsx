import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap-motion";

/** Reveals also discover lazy sections and newly expanded archive items. */
export function MotionCanvas({ children, view }: { children: ReactNode; view: string }) {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!root.current) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const scope = root.current!;
      const seen = new WeakSet<Element>();
      const tracked = new Set<Element>();
      const context = gsap.context(() => {}, scope);
      const reveal = (element: Element) => {
        context.add(() =>
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            overwrite: "auto",
            clearProps: "transform,opacity,willChange",
          }),
        );
      };
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            observer.unobserve(target);
            reveal(target);
          });
        },
        { rootMargin: "0px 0px -24px 0px", threshold: 0.05 },
      );
      const discover = () => {
        const nodes = scope.querySelectorAll(
          ".hero-topline, .hero-role, .hero-line, .hero-caption, .editorial-actions, .portrait, .proof-strip > div, .editorial-heading, .work-item, .experience-row, .stack-row, .award-row, .about-layout > div, .contact-editorial > *, .education-list > div",
        );
        let inViewIndex = 0;
        nodes.forEach((node) => {
          if (seen.has(node)) return;
          seen.add(node);
          tracked.add(node);
          const bounds = node.getBoundingClientRect();
          if (bounds.bottom < 0) return;
          context.add(() => {
            gsap.set(node, { opacity: 0, y: node.classList.contains("hero-line") ? 28 : 18 });
            if (bounds.top < window.innerHeight - 24) {
              gsap.to(node, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: Math.min(inViewIndex++ * 0.055, 0.35),
                ease: "power3.out",
                clearProps: "transform,opacity,willChange",
              });
            } else observer.observe(node);
          });
        });
        for (const node of tracked) {
          if (!node.isConnected) {
            observer.unobserve(node);
            gsap.killTweensOf(node);
            tracked.delete(node);
          }
        }
        ScrollTrigger.refresh();
      };
      let frame = 0;
      const mutation = new MutationObserver(() => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(discover);
      });
      discover();
      mutation.observe(scope, { childList: true, subtree: true });
      return () => {
        cancelAnimationFrame(frame);
        mutation.disconnect();
        observer.disconnect();
        context.revert();
      };
    });
    return () => media.revert();
  }, [view]);
  return (
    <div ref={root} className="motion-canvas">
      {children}
    </div>
  );
}
