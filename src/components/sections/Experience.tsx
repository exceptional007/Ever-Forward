import { memo } from "react";
import { experiences, type Experience as ExperienceType } from "@/data/portfolio";
import { SectionHeading } from "@/components/layout/Section";
import { SectionBackground } from "@/components/layout/SectionBackground";
import { SkillIcon } from "@/components/common/SkillIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function getCompanyBadge(company: string) {
  if (company.includes("String AI")) {
    return { initials: "SA", color: "text-[#3b9eff] border-[#3b9eff]/30 bg-[#3b9eff]/10" };
  }
  if (company.includes("10-week")) {
    return {
      initials: "10W",
      color: "text-[#3b9eff] border-transparent group-hover:border-[#3b9eff]/30 bg-[#3b9eff]/10",
    };
  }
  if (company.includes("Buddha") || company.includes("IEEE")) {
    return { initials: "BIT", color: "text-[#11ff99] border-[#11ff99]/30 bg-[#11ff99]/10" };
  }
  return {
    initials: company.slice(0, 2).toUpperCase(),
    color: "text-[#fcfdff] border-white/14 bg-white/05",
  };
}

function ExperienceRow({ experience, index }: { experience: ExperienceType; index: number }) {
  const badge = getCompanyBadge(experience.company);

  return (
    <AccordionItem
      value={`exp-${index}`}
      className="group rounded-xl border border-transparent bg-[#08080c] transition-all duration-200 hover:border-white/25 hover:bg-[#0c0c10] my-2.5 overflow-hidden"
    >
      <AccordionTrigger hideChevron className="hover:no-underline px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3.5 w-full text-left">
          {/* Company Logo / Badge */}
          <div className="relative flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-[#0f0f14] overflow-hidden transition-transform duration-200 group-hover:scale-105 shadow-sm">
            {experience.logo ? (
              <img
                src={experience.logo}
                alt={experience.company}
                className="size-full object-cover rounded-xl"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                  const sibling = (e.target as HTMLElement).nextElementSibling;
                  if (sibling) (sibling as HTMLElement).style.display = "flex";
                }}
              />
            ) : null}
            <span
              className={`flex size-full items-center justify-center font-mono text-xs font-bold ${
                experience.logo ? "hidden" : ""
              } ${badge.color}`}
            >
              {badge.initials}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-[#fcfdff] min-w-0 truncate text-sm sm:text-base font-semibold leading-snug">
                {experience.company}
              </h3>
              <span className="text-[#a1a4a5] shrink-0 text-xs font-mono tabular-nums">
                {experience.period}
              </span>
            </div>

            <p className="text-[#a1a4a5] truncate text-xs leading-snug mt-1">
              <span className="text-[#fcfdff] font-medium">{experience.role}</span>{" "}
              <span className="text-white/30">•</span> {experience.location}
            </p>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-4 pb-5 pt-1 sm:px-5 sm:pl-18 text-xs leading-relaxed text-[#rgba(252,253,255,0.86)] border-t border-transparent group-hover:border-white/06 transition-colors">
        <p className="font-medium text-[#fcfdff] my-3 leading-relaxed">{experience.summary}</p>

        <ul className="space-y-2 mb-4">
          {experience.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-[#a1a4a5]">
              <span className="size-1.5 rounded-full bg-[#3b9eff] shrink-0 mt-1.5" />
              <span className="text-[#fcfdff] leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 items-center pt-2">
          {experience.stack.map((t) => (
            <SkillIcon key={t} name={t} size="sm" showLabel={false} />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export const Experience = memo(function Experience() {
  return (
    <section
      aria-labelledby="experience-heading"
      id="experience"
      className="relative overflow-hidden w-full py-6"
    >
      <SectionBackground variant="experience" />
      <div className="relative z-10">
        <SectionHeading id="experience-heading">Experience</SectionHeading>

        <div className="px-4 py-4 sm:px-6">
          <Accordion type="multiple" defaultValue={["exp-0"]} className="w-full space-y-1">
            {experiences.map((exp, i) => (
              <ExperienceRow key={exp.role + exp.company} experience={exp} index={i} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
});
