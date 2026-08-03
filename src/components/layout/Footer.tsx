import { memo } from "react";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Footer = memo(function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8">
      <div className="hairline mb-8" />
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold tracking-tight text-foreground">{profile.name}</p>
          <p className="mt-1 text-[0.75rem] text-muted-foreground">
            {profile.role} · Built with React, TypeScript & Motion.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-[0.72rem] text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <a
            href="#hero"
            aria-label="Back to top"
            className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
          >
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
});
