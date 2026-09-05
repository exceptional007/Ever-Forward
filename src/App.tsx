import { useEffect, useState, useCallback } from "react";
import { CommandPalette, useCommandPalette } from "@/components/layout/CommandPalette";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HatchRule } from "@/components/layout/Section";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Skills } from "@/components/sections/Skills";
import { ThemeProvider } from "@/context/theme-context";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AkshChatbot } from "@/components/common/AkshChatbot";

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
        <div className="min-h-screen w-full relative bg-black text-[#fcfdff]">
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

            <Navbar
              onOpenPalette={() => setOpen(true)}
              currentView={view}
              onNavigate={handleNavigate}
            />
            <CommandPalette open={open} onOpenChange={setOpen} />

            {/* Resend Editorial Canvas Container */}
            <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
              <main id="main" className="relative z-10 w-full flex flex-col">
                {view === "home" ? (
                  <>
                    <Hero />

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
                  </>
                ) : (
                  <div className="py-4 min-h-[75vh]">
                    <Resume />
                  </div>
                )}
              </main>

              <Footer />
            </div>

            <AkshChatbot />
          </div>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
