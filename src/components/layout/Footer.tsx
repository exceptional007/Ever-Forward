import { memo } from "react";
import { ArrowUpIcon } from "lucide-react";
import { profile } from "@/data/portfolio";
import { VisitorCounter } from "@/components/common/VisitorCounter";

export const Footer = memo(function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-white/06 bg-[#000000] px-4 py-8 text-xs text-[#a1a4a5] sm:px-6">
      <div className="mx-auto max-w-4xl flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-[#11ff99]" />
            <p className="font-semibold text-[#fcfdff]">{profile.name}</p>
            <VisitorCounter />
          </div>
          <p className="text-2xs text-[#a1a4a5]">
            {profile.role} · Built with React, TypeScript & Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-2xs">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex size-8 items-center justify-center rounded-full border border-white/14 bg-[#101012] hover:bg-white/10 text-[#fcfdff] transition-colors cursor-pointer"
          >
            <ArrowUpIcon className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
});
