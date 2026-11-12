import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion, scrollToSection } from "@/lib/gsap-motion";

type View = "home" | "cv";
export function usePortfolioNavigation() {
  const [view, setView] = useState<View>(() => (window.location.hash === "#cv" ? "cv" : "home"));
  const main = useRef<HTMLElement>(null);
  const target = useRef(window.location.hash.slice(1) || "hero");
  const activeView = useRef(view);
  const exit = useRef<gsap.core.Tween | null>(null);
  const frame = useRef(0);
  const navigate = useCallback((id: string, updateHistory = true) => {
    const nextView = id === "cv" ? "cv" : "home";
    target.current = id;
    if (updateHistory) {
      const hash = id === "hero" ? "" : `#${id}`;
      if (window.location.hash !== hash)
        window.history.pushState(
          null,
          "",
          `${window.location.pathname}${window.location.search}${hash}`,
        );
    }
    exit.current?.kill();
    if (nextView === activeView.current) {
      if (main.current) gsap.set(main.current, { clearProps: "opacity,transform" });
      scrollToSection(id);
      return;
    }
    const commit = () => {
      activeView.current = nextView;
      setView(nextView);
    };
    if (prefersReducedMotion() || !main.current) commit();
    else
      exit.current = gsap.to(main.current, {
        opacity: 0,
        y: -8,
        duration: 0.16,
        ease: "power1.in",
        overwrite: true,
        onComplete: commit,
      });
  }, []);
  useLayoutEffect(() => {
    const fromHistory = () => navigate(window.location.hash.slice(1) || "hero", false);
    const fromMenu = (event: Event) => {
      if (event instanceof CustomEvent && typeof event.detail === "string") navigate(event.detail);
    };
    window.addEventListener("hashchange", fromHistory);
    window.addEventListener("popstate", fromHistory);
    window.addEventListener("portfolio:navigate", fromMenu);
    return () => {
      window.removeEventListener("hashchange", fromHistory);
      window.removeEventListener("popstate", fromHistory);
      window.removeEventListener("portfolio:navigate", fromMenu);
      exit.current?.kill();
    };
  }, [navigate]);
  useLayoutEffect(() => {
    const element = main.current;
    if (!element) return;
    gsap.set(element, { clearProps: "opacity,transform" });
    if (!prefersReducedMotion())
      gsap.fromTo(
        element,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", clearProps: "opacity,transform" },
      );
    const position = () => {
      if (document.getElementById(target.current)) {
        scrollToSection(target.current, true);
        return true;
      }
      return false;
    };
    frame.current = requestAnimationFrame(position);
    const observer = new MutationObserver(() => {
      if (position()) observer.disconnect();
    });
    if (!document.getElementById(target.current))
      observer.observe(element, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(frame.current);
      observer.disconnect();
      gsap.killTweensOf(element);
    };
  }, [view]);
  return { view, main, navigate };
}
