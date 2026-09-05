import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  FolderKanban,
  Cpu,
  Briefcase,
  FileText,
  Menu,
  X,
  UserCheck,
  Trophy,
  HelpCircle,
  Mail,
  Search,
  Sparkles,
  Github,
  Linkedin,
  Code,
  GripHorizontal,
} from "lucide-react";
import { profile } from "@/data/portfolio";

interface MobileNavProps {
  currentView: "home" | "cv";
  onNavigate: (id: string) => void;
  onOpenPalette: () => void;
}

const TABS = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "experience", label: "Exp", icon: Briefcase },
  { id: "cv", label: "CV", icon: FileText },
];

export function MobileNav({ currentView, onNavigate, onOpenPalette }: MobileNavProps) {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    if (currentView === "cv") {
      setActiveSection("cv");
      return;
    }

    const sections = [
      "hero",
      "projects",
      "skills",
      "experience",
      "about",
      "achievements",
      "faq",
      "contact",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  const handleTabClick = (id: string) => {
    setShowMoreMenu(false);
    if (id === "more") {
      setShowMoreMenu(true);
      return;
    }
    setActiveSection(id);
    onNavigate(id);
  };

  return (
    <>
      {/* Mobile Top App Header (< md screens) */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 pt-[calc(0.75rem+env(safe-area-inset-top))] flex items-center justify-between transition-colors">
        <button
          onClick={() => handleTabClick("hero")}
          className="flex items-center gap-2 text-left group"
        >
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/14 flex items-center justify-center text-sm font-semibold text-white group-active:scale-95 transition-transform">
            {profile.initials}
          </div>
          <div>
            <span className="text-sm font-semibold tracking-tight text-white block leading-none">
              Akshhat.ai
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase mt-0.5 block">
              {currentView === "cv" ? "CV View" : activeSection}
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-xs font-medium text-zinc-300 active:scale-95 transition-all"
            aria-label="Search command palette"
          >
            <Search className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-mono text-[10px]">Cmd+K</span>
          </button>
        </div>
      </header>

      {/* Mobile Draggable Navigation Bar (< md screens) */}
      <motion.nav
        drag
        dragConstraints={{ left: -100, right: 100, top: -500, bottom: 20 }}
        dragElastic={0.1}
        dragMomentum={false}
        whileDrag={{ scale: 1.02, cursor: "grabbing" }}
        className="md:hidden fixed bottom-3 left-3 right-3 z-50 bg-[#0c0c10]/92 backdrop-blur-2xl border border-white/16 rounded-2xl pb-[calc(0.4rem+env(safe-area-inset-bottom))] pt-1.5 px-2 shadow-2xl cursor-grab active:cursor-grabbing touch-none"
        aria-label="Mobile Navigation (Draggable)"
      >
        {/* Drag Handle Bar */}
        <div className="flex items-center justify-center mb-1 cursor-grab">
          <GripHorizontal className="w-6 h-3 text-white/30 hover:text-white/60 transition-colors" />
        </div>

        <div className="flex items-center justify-around max-w-lg mx-auto relative">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive =
              (currentView === "cv" && tab.id === "cv") ||
              (currentView === "home" && activeSection === tab.id);

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl min-w-[54px] min-h-[44px] transition-all duration-200 active:scale-95 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileTabActive"
                    className="absolute inset-0 bg-white/12 border border-white/16 rounded-xl shadow-inner"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  className={`w-4.5 h-4.5 relative z-10 ${isActive ? "text-white scale-110" : ""}`}
                />
                <span
                  className={`text-[10px] font-medium tracking-tight mt-0.5 relative z-10 ${
                    isActive ? "font-semibold text-white" : ""
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}

          {/* More Sheet Trigger Button */}
          <button
            onClick={() => setShowMoreMenu(true)}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl min-w-[54px] min-h-[44px] transition-all duration-200 active:scale-95 ${
              showMoreMenu ? "text-white" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {showMoreMenu && (
              <motion.div
                layoutId="mobileTabActive"
                className="absolute inset-0 bg-white/12 border border-white/16 rounded-xl shadow-inner"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Menu
              className={`w-4.5 h-4.5 relative z-10 ${showMoreMenu ? "text-white scale-110" : ""}`}
            />
            <span className="text-[10px] font-medium tracking-tight mt-0.5 relative z-10">
              More
            </span>
          </button>
        </div>
      </motion.nav>

      {/* More Bottom Sheet Drawer Modal */}
      <AnimatePresence>
        {showMoreMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMoreMenu(false)}
              className="md:hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#121215] border-t border-white/16 rounded-t-3xl p-6 pb-[calc(2rem+env(safe-area-inset-bottom))] shadow-2xl max-h-[80vh] overflow-y-auto"
            >
              {/* Drag Pill */}
              <div className="w-12 h-1.5 bg-zinc-700/60 rounded-full mx-auto mb-6" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" /> Navigation & Links
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Explore additional portfolio sections
                  </p>
                </div>
                <button
                  onClick={() => setShowMoreMenu(false)}
                  className="p-2 rounded-full bg-white/8 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  onClick={() => handleTabClick("about")}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-98 text-left transition-all"
                >
                  <UserCheck className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-sm font-medium text-white">About Me</div>
                    <div className="text-[11px] text-zinc-400">Background & bio</div>
                  </div>
                </button>

                <button
                  onClick={() => handleTabClick("achievements")}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-98 text-left transition-all"
                >
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <div>
                    <div className="text-sm font-medium text-white">Achievements</div>
                    <div className="text-[11px] text-zinc-400">Awards & podiums</div>
                  </div>
                </button>

                <button
                  onClick={() => handleTabClick("faq")}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-98 text-left transition-all"
                >
                  <HelpCircle className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="text-sm font-medium text-white">FAQ</div>
                    <div className="text-[11px] text-zinc-400">Common questions</div>
                  </div>
                </button>

                <button
                  onClick={() => handleTabClick("contact")}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-98 text-left transition-all"
                >
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-sm font-medium text-white">Contact</div>
                    <div className="text-[11px] text-zinc-400">Get in touch</div>
                  </div>
                </button>
              </div>

              {/* Quick Social Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-around">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 active:scale-95"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 active:scale-95"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
                </a>
                <a
                  href={profile.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 active:scale-95"
                >
                  <Code className="w-4 h-4 text-amber-400" /> LeetCode
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
