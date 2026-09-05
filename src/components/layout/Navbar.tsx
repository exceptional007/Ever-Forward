import { memo, useCallback } from "react";
import { CommandIcon, MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { navSections, profile } from "@/data/portfolio";
import { useTheme } from "@/context/theme-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavbarProps = {
  onOpenPalette: () => void;
  currentView?: "home" | "cv";
  onNavigate?: (id: string) => void;
};

export const Navbar = memo(function Navbar({
  onOpenPalette,
  currentView = "home",
  onNavigate,
}: NavbarProps) {
  const { theme, toggle } = useTheme();

  const go = useCallback(
    (id: string) => {
      if (onNavigate) {
        onNavigate(id);
        return;
      }
      if (id === "cv") {
        window.location.hash = "#cv";
      } else {
        if (window.location.hash === "#cv") {
          window.location.hash = `#${id}`;
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [onNavigate],
  );

  return (
    <header className="sticky top-0 isolate z-50 w-full bg-[#000000]/90 backdrop-blur-md border-b border-white/06">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          onClick={() => go("hero")}
          className="font-mono text-sm font-semibold tracking-tight text-[#fcfdff] hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-2"
        >
          <span className="size-2 rounded-full bg-[#11ff99] inline-block animate-pulse" />
          <span>{profile.name.toUpperCase()}</span>
        </button>

        {/* Center Nav Links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-6 text-sm text-[#a1a4a5]"
        >
          {navSections.slice(1, 7).map((s) => {
            const isActive =
              (s.id === "cv" && currentView === "cv") ||
              (s.id !== "cv" && currentView === "home" && false);
            return (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`transition-colors cursor-pointer ${
                  isActive ? "text-[#fcfdff] font-semibold" : "hover:text-[#fcfdff]"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <Button
            variant="ghost"
            size="xs"
            onClick={onOpenPalette}
            className="hidden md:flex gap-1.5 text-xs text-[#a1a4a5] bg-[#101012] border border-white/14 px-3 py-1 hover:text-[#fcfdff]"
          >
            <CommandIcon className="size-3" />
            <span className="font-mono text-2xs">⌘K</span>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="size-8 text-[#a1a4a5] hover:text-[#fcfdff]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </Button>

          {/* Primary CTA */}
          <Button
            variant="default"
            size="xs"
            onClick={() => go("contact")}
            className="hidden sm:inline-flex"
          >
            Contact
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8 text-[#a1a4a5]">
                  <MenuIcon className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-[#0a0a0c] border border-white/14 text-[#fcfdff]"
              >
                {navSections.map((s) => (
                  <DropdownMenuItem
                    key={s.id}
                    onClick={() => go(s.id)}
                    className="cursor-pointer hover:bg-[#101012] focus:bg-[#101012]"
                  >
                    {s.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
});
