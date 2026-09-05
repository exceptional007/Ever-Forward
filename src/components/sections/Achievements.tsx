import { memo } from "react";
import { BadgeCheckIcon, QuoteIcon, TrophyIcon } from "lucide-react";
import { achievements, certifications, testimonials } from "@/data/portfolio";
import { SectionHeading } from "@/components/layout/Section";
import { SectionBackground } from "@/components/layout/SectionBackground";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function getAwardBadge(award: string) {
  const a = award.toLowerCase();
  if (a.includes("1st") || a.includes("runner")) {
    return "bg-[#3b9eff]/10 text-[#3b9eff] border-transparent group-hover:border-[#3b9eff]/30";
  }
  if (a.includes("active")) {
    return "bg-[#11ff99]/10 text-[#11ff99] border-transparent group-hover:border-[#11ff99]/30";
  }
  return "bg-white/05 text-[#fcfdff] border-transparent group-hover:border-white/14";
}

function getCertBadge(issuer: string) {
  if (issuer.toLowerCase().includes("nptel")) {
    return "bg-[#3b9eff]/10 text-[#3b9eff] border-transparent group-hover:border-[#3b9eff]/30";
  }
  return "bg-white/05 text-[#a1a4a5] border-transparent group-hover:border-white/10";
}

export const Achievements = memo(function Achievements() {
  return (
    <section
      aria-labelledby="achievements-heading"
      id="achievements"
      className="relative overflow-hidden w-full py-6"
    >
      <SectionBackground variant="achievements" />
      <div className="relative z-10">
        <SectionHeading id="achievements-heading">Achievements & Recognition</SectionHeading>

        <div className="flex flex-col gap-6 px-4 py-4 sm:px-6">
          {/* Hackathon Podiums */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#a1a4a5] uppercase">
              <TrophyIcon className="size-3.5 text-[#3b9eff]" />
              <span>Hackathons & Competitions</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col gap-1.5 rounded-xl border border-transparent bg-[#08080c] p-3.5 sm:p-4 transition-all duration-200 hover:border-white/20 hover:bg-[#0c0c10]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap min-w-0">
                      <h3 className="text-xs sm:text-sm font-semibold text-[#fcfdff]">
                        {item.title}
                      </h3>
                      <span
                        className={`font-mono text-2xs py-0.5 px-2.5 rounded-full border transition-colors ${getAwardBadge(
                          item.award,
                        )}`}
                      >
                        {item.award}
                      </span>
                    </div>

                    <span className="font-mono text-2xs text-[#a1a4a5] bg-[#101014] border border-transparent group-hover:border-white/10 px-2.5 py-0.5 rounded-full shrink-0 transition-colors">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#a1a4a5] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#a1a4a5] uppercase">
              <BadgeCheckIcon className="size-3.5 text-[#11ff99]" />
              <span>Certifications & Training</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="group relative flex flex-col gap-1.5 rounded-xl border border-transparent bg-[#08080c] p-3.5 sm:p-4 transition-all duration-200 hover:border-white/20 hover:bg-[#0c0c10]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap min-w-0">
                      <h3 className="text-xs sm:text-sm font-semibold text-[#fcfdff]">{c.title}</h3>
                      <span
                        className={`font-mono text-2xs py-0.5 px-2.5 rounded-full border transition-colors ${getCertBadge(
                          c.issuer,
                        )}`}
                      >
                        {c.issuer}
                      </span>
                    </div>

                    <span className="font-mono text-2xs text-[#a1a4a5] bg-[#101014] border border-transparent group-hover:border-white/10 px-2.5 py-0.5 rounded-full shrink-0 transition-colors">
                      {c.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#a1a4a5] leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#a1a4a5] uppercase">
              <QuoteIcon className="size-3.5 text-[#3b9eff]" />
              <span>Mentor & Lead Endorsements</span>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-transparent bg-[#08080c] p-4 text-xs transition-all duration-200 hover:border-white/20 hover:bg-[#0c0c10]"
                >
                  <p className="italic text-[#a1a4a5] mb-4 leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-2.5 border-t border-transparent group-hover:border-white/06 pt-3 transition-colors">
                    <Avatar className="size-7 rounded-full border border-transparent group-hover:border-white/14 bg-[#101012] transition-colors">
                      <AvatarFallback className="text-2xs font-bold font-mono text-[#fcfdff] bg-[#101012]">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-[#fcfdff] text-xs">{t.name}</p>
                      <p className="text-2xs text-[#a1a4a5]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
