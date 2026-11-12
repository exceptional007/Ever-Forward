import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let scroller: Lenis | null = null;
export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
export function setSmoothScroller(value: Lenis | null) {
  scroller = value;
}
export function scrollToSection(id: string, immediate = false) {
  const target = document.getElementById(id);
  if (!target) {
    if (id === "hero")
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "instant" : "smooth" });
    return;
  }
  const instant = immediate || prefersReducedMotion();
  if (scroller) scroller.scrollTo(target, { offset: -88, immediate: instant, duration: 0.85 });
  else
    window.scrollTo({
      top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 88),
      behavior: instant ? "instant" : "smooth",
    });
}
export function navigatePortfolio(id: string) {
  window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: id }));
}
export { gsap, ScrollTrigger };
