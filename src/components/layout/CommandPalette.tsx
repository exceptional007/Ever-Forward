import { memo, useEffect, useMemo, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Compass, Download, Github, Linkedin, Mail, Moon, Sun, Code } from "lucide-react";
import { navSections, profile, RESUME_URL } from "@/data/portfolio";
import { useTheme } from "@/context/theme-context";

type PaletteProps = { open: boolean; onOpenChange: (open: boolean) => void };

export const CommandPalette = memo(function CommandPalette({ open, onOpenChange }: PaletteProps) {
  const { theme, toggle } = useTheme();

  const actions = useMemo(
    () => [
      {
        label: "Download resume",
        icon: Download,
        run: () => window.open(RESUME_URL, "_blank", "noopener"),
      },
      {
        label: "Email Akshhat",
        icon: Mail,
        run: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        label: "GitHub",
        icon: Github,
        run: () => window.open(profile.socials.github, "_blank", "noopener"),
      },
      {
        label: "LinkedIn",
        icon: Linkedin,
        run: () => window.open(profile.socials.linkedin, "_blank", "noopener"),
      },
      {
        label: "LeetCode",
        icon: Code,
        run: () => window.open(profile.socials.leetcode, "_blank", "noopener"),
      },
      {
        label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        icon: theme === "dark" ? Sun : Moon,
        run: toggle,
      },
    ],
    [theme, toggle],
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Jump to a section or run an action…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {navSections.map((s) => (
              <CommandItem
                key={s.id}
                value={`go ${s.label}`}
                onSelect={() => {
                  onOpenChange(false);
                  document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Compass className="size-4" aria-hidden />
                {s.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Actions">
            {actions.map((a) => (
              <CommandItem
                key={a.label}
                value={a.label}
                onSelect={() => {
                  onOpenChange(false);
                  a.run();
                }}
              >
                <a.icon className="size-4" aria-hidden />
                {a.label}
              </CommandItem>
            ))}
          </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
});

/** Registers the Ctrl/Cmd+K shortcut. */
export function useCommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { open, setOpen };
}
