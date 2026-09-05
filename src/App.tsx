import { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { CommandPalette, useCommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { HatchRule } from "@/components/layout/Section";
import { Hero } from "@/components/sections/Hero";
import { ThemeProvider } from "@/context/theme-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

// Lazy Load Below-the-fold Sections & Widgets for Initial Bundle Optimization
const About = lazy(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const Experience = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
);
const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Achievements = lazy(() =>
  import("@/components/sections/Achievements").then((m) => ({ default: m.Achievements })),
);
const Faq = lazy(() => import("@/components/sections/Faq").then((m) => ({ default: m.Faq })));
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);
const Resume = lazy(() =>
  import("@/components/sections/Resume").then((m) => ({ default: m.Resume })),
);
const AkshChatbot = lazy(() =>
  import("@/components/common/AkshChatbot").then((m) => ({ default: m.AkshChatbot })),
);

import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

function App() {
  const { open, setOpen } = useCommandPalette();
  const [view, setView] = useState<"home" | "cv">(() => {
    if (typeof window !== "undefined" && window.location.hash === "#cv") {
      return "cv";
    }
    return "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#cv") {
        setView("cv");
      } else {
        setView("home");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = useCallback(
    (id: string) => {
      if (id === "cv") {
        window.location.hash = "#cv";
        setView("cv");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        if (view === "cv") {
          window.location.hash = id === "hero" ? "" : `#${id}`;
          setView("home");
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [view],
  );

  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={150}>
        <SmoothScrollProvider>
          <div className="min-h-screen w-full relative bg-black text-[#fcfdff] overflow-x-hidden pt-14 md:pt-0 pb-20 md:pb-0">
            {/* Pearl Mist Background with Top Glow */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
              }}
            />

            <div className="relative z-10">
              <a
                href="#main"
                className="focus:bg-[#101012] focus:ring-white/50 sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:border-white/14 focus:px-3 focus:py-2 focus:text-sm"
              >
                Skip to content
              </a>

              {/* Desktop Navigation Header */}
              <Navbar
                onOpenPalette={() => setOpen(true)}
                currentView={view}
                onNavigate={handleNavigate}
              />

              {/* Mobile App Navigation (Fixed Top Header + Fixed Bottom Tab Bar) */}
              <MobileNav
                currentView={view}
                onNavigate={handleNavigate}
                onOpenPalette={() => setOpen(true)}
              />

              <CommandPalette open={open} onOpenChange={setOpen} />

              {/* Editorial Canvas Container */}
              <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
                <main id="main" className="relative z-10 w-full flex flex-col">
                  {view === "home" ? (
                    <>
                      {/* Above-the-fold Hero Section */}
                      <Hero />

                      <Suspense fallback={<SectionSkeleton />}>
                        <HatchRule />
                        <About />

                        <HatchRule />
                        <Experience />

                        <HatchRule />
                        <Projects />

                        <HatchRule />
                        <Skills />

                        <HatchRule />
                        <Achievements />

                        <HatchRule />
                        <Faq />

                        <HatchRule />
                        <Contact />
                      </Suspense>
                    </>
                  ) : (
                    <div className="py-4 min-h-[75vh]">
                      <Suspense fallback={<SectionSkeleton />}>
                        <Resume />
                      </Suspense>
                    </div>
                  )}
                </main>

                <Footer />
              </div>

              {/* Chatbot Widget Lazy Loaded */}
              <Suspense fallback={null}>
                <AkshChatbot />
              </Suspense>
            </div>
          </div>
        </SmoothScrollProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
