import { memo, useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Moon, Sun, Command } from "lucide-react";
import { navSections } from "@/data/portfolio";
import { useScrollState } from "@/hooks/use-scroll-state";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTheme } from "@/context/theme-context";
import { ease, springSnappy } from "@/lib/motion";

type NavbarProps = { onOpenPalette: () => void };

export const Navbar = memo(function Navbar({ onOpenPalette }: NavbarProps) {
  const { scrolled, hidden } = useScrollState();
  const active = useActiveSection();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const go = useCallback((id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden && !open ? -96 : 0, opacity: 1 }}
      transition={springSnappy}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass-strong shadow-soft" : "border border-transparent"
        }`}
      >
        <button
          onClick={() => go("hero")}
          className="group flex items-center gap-2.5 rounded-full px-1.5 py-1 text-sm font-semibold tracking-tight"
          aria-label="Back to top"
        >
          <span className="grid size-8 place-items-center rounded-xl accent-gradient text-[0.7rem] font-bold text-primary-foreground">
            AS
          </span>
          <span className="hidden text-foreground sm:inline">Akshhat</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.slice(1).map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                aria-current={active === s.id ? "true" : undefined}
                className="relative rounded-full px-3.5 py-1.5 text-[0.82rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-strong"
                    transition={springSnappy}
                  />
                )}
                <span className={`relative ${active === s.id ? "text-foreground" : ""}`}>
                  {s.label}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[0.72rem] font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground md:flex"
          >
            <Command className="size-3" aria-hidden />K
          </button>
          <button
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="size-4" aria-hidden />
            ) : (
              <Moon className="size-4" aria-hidden />
            )}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.35, ease }}
            className="glass-strong mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl p-2 shadow-soft lg:hidden"
          >
            <ul className="flex flex-col">
              {navSections.map((s, i) => (
                <motion.li
                  key={s.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease }}
                >
                  <button
                    onClick={() => go(s.id)}
                    className="w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {s.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});
