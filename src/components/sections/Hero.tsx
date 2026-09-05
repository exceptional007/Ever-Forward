import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CheckIcon,
  DownloadIcon,
  MailIcon,
  SparklesIcon,
  TrophyIcon,
  Globe2Icon,
} from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
import { Magnetic } from "@/components/animations/Magnetic";
import { LocalTime } from "@/components/common/LocalTime";
import { SectionBackground } from "@/components/layout/SectionBackground";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ROLES = [
  "Software Engineer & AI Engineer",
  "Multilingual NLP Pipeline Architect",
  "RAG & Vector Search Developer",
  "Full-Stack .NET & FastAPI Builder",
];

function RoleCycle() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 3000);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <span className="relative inline-flex overflow-hidden font-mono text-xs text-[#a1a4a5]">
      <motion.span
        key={index}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {ROLES[index]}
      </motion.span>
    </span>
  );
}

function LiveAvatar() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="group relative shrink-0 overflow-hidden rounded-full border border-transparent bg-[#0a0a0c] p-1 transition-all hover:border-white/30">
          <div className="relative size-16 overflow-hidden rounded-full border border-transparent bg-[#101012] select-none sm:size-20">
            {/* Fallback Initials behind Image */}
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xl font-bold bg-[#101012] text-[#fcfdff]">
              {profile.initials}
            </div>

            {/* Avatar Image in Front */}
            <img
              src="/avatar.png"
              alt={profile.name}
              className="relative z-10 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
          <span
            className="absolute bottom-0 right-0 z-20 size-3.5 rounded-full bg-[#11ff99] border-2 border-black"
            title="Open to work"
          />
        </div>
      </TooltipTrigger>
      <TooltipContent className="text-xs bg-[#101012] border border-transparent text-[#fcfdff]">
        {profile.availability}
      </TooltipContent>
    </Tooltip>
  );
}

export const Hero = memo(function Hero() {
  return (
    <section className="relative overflow-hidden w-full pt-12 pb-16 px-4 sm:px-6">
      <SectionBackground variant="hero" />
      <div className="relative z-10 mx-auto max-w-4xl flex flex-col gap-6">
        <div className="flex items-start gap-5">
          <LiveAvatar />

          <div className="flex min-w-0 flex-1 flex-col gap-1.5 pt-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-3xl font-semibold tracking-tighter text-[#fcfdff] sm:text-4xl md:text-5xl">
                {profile.name}
              </h1>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.span
                    className="inline-flex shrink-0 items-center cursor-pointer select-none"
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg
                      className="size-5 sm:size-6 text-[#1d9bf0]"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.43-1.55-.02-3.23-1.192-4.4-1.17-1.17-2.85-1.62-4.4-1.192C14.11 2.04 12.74 1.165 11.165 1.165s-2.945.875-3.595 2.148c-1.55-.43-3.23.02-4.4 1.192-1.17 1.17-1.62 2.85-1.192 4.4C.705 9.55-.17 10.92-.17 12.5s.875 2.945 2.148 3.595c-.43 1.55.02 3.23 1.192 4.4 1.17 1.17 2.85 1.62 4.4 1.192 1.3 1.273 2.67 2.148 4.245 2.148s2.945-.875 3.595-2.148c1.55.43 3.23-.02 4.4-1.192 1.17-1.17 1.62-2.85 1.192-4.4 1.273-1.3 2.148-2.67 2.148-4.245z"
                        fill="#1D9BF0"
                      />
                      <path
                        d="M9.8 15.6l-3.4-3.4 1.4-1.4 2 2 5.6-5.6 1.4 1.4-7 7z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </motion.span>
                </TooltipTrigger>
                <TooltipContent className="text-xs bg-[#101012] border border-transparent text-[#fcfdff]">
                  Verified Software & AI Engineer
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex items-center gap-3">
              <RoleCycle />
            </div>

            <div className="mt-1">
              <LocalTime />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl">
          <p className="text-sm sm:text-base leading-relaxed text-[#rgba(252,253,255,0.86)]">
            {profile.summary}
          </p>

          {/* Hero Quick Stat Bento Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="group relative flex items-center gap-3 rounded-xl border border-transparent bg-[#08080c] p-3.5 transition-all duration-200 hover:border-white/20 hover:bg-[#0d0d12]">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#ff801f]/10 border border-transparent group-hover:border-[#ff801f]/30 text-[#ff801f] transition-colors">
                <Globe2Icon className="size-4" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold text-[#fcfdff]">22 Indic Languages</p>
                <p className="font-mono text-2xs text-[#a1a4a5]">Multilingual NLP</p>
              </div>
            </div>

            <div className="group relative flex items-center gap-3 rounded-xl border border-transparent bg-[#08080c] p-3.5 transition-all duration-200 hover:border-white/20 hover:bg-[#0d0d12]">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#3b9eff]/10 border border-transparent group-hover:border-[#3b9eff]/30 text-[#3b9eff] transition-colors">
                <TrophyIcon className="size-4" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold text-[#fcfdff]">3 Podiums</p>
                <p className="font-mono text-2xs text-[#a1a4a5]">Hackathon Finishes</p>
              </div>
            </div>

            <div className="group relative flex items-center gap-3 rounded-xl border border-transparent bg-[#08080c] p-3.5 transition-all duration-200 hover:border-white/20 hover:bg-[#0d0d12]">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#11ff99]/10 border border-transparent group-hover:border-[#11ff99]/30 text-[#11ff99] transition-colors">
                <SparklesIcon className="size-4" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold text-[#fcfdff]">82.27% Average</p>
                <p className="font-mono text-2xs text-[#a1a4a5]">CSE (Data Science)</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.2}>
              <Button
                size="default"
                variant="default"
                className="bg-[#fcfdff] text-[#000000] hover:bg-white/90 font-mono text-xs font-semibold py-2.5 px-5 rounded-xl shadow-lg transition-all"
                asChild
              >
                <a href={`mailto:${profile.email}`}>
                  <MailIcon className="size-4 text-[#000000]" />
                  <span>Send an email</span>
                </a>
              </Button>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Button
                size="default"
                variant="ghost"
                className="border border-transparent bg-[#0a0a0c] text-[#fcfdff] hover:bg-white/10 hover:border-white/30 font-mono text-xs font-semibold py-2.5 px-5 rounded-xl transition-all"
                asChild
              >
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <DownloadIcon className="size-4" />
                  <span>Download Résumé</span>
                </a>
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
});
