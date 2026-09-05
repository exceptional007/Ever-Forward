import { memo } from "react";
import {
  BrainIcon,
  CloudIcon,
  Code2Icon,
  DatabaseIcon,
  MonitorSmartphoneIcon,
  ServerIcon,
  WrenchIcon,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/layout/Section";
import { SectionBackground } from "@/components/layout/SectionBackground";
import { SkillIcon } from "@/components/common/SkillIcon";

const iconMap: Record<string, LucideIcon> = {
  Code2: Code2Icon,
  MonitorSmartphone: MonitorSmartphoneIcon,
  Server: ServerIcon,
  Database: DatabaseIcon,
  Brain: BrainIcon,
  Cloud: CloudIcon,
  Wrench: WrenchIcon,
};

export const Skills = memo(function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      id="skills"
      className="relative overflow-hidden w-full py-6"
    >
      <SectionBackground variant="skills" />
      <div className="relative z-10">
        <SectionHeading id="skills-heading">Skills & Technologies</SectionHeading>

        <div className="px-4 py-6 sm:px-6">
          {/* Perfectly Balanced 2-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {skillGroups.map((group) => {
              const IconComponent = iconMap[group.icon] ?? Code2Icon;
              const isAiGroup = group.category === "AI / ML";

              return (
                <div
                  key={group.category}
                  className={`group relative flex flex-col justify-between rounded-xl border border-transparent bg-[#08080c] p-4.5 sm:p-5 transition-all duration-300 hover:border-white/25 hover:bg-[#0c0c10] ${
                    isAiGroup
                      ? "md:col-span-2 hover:border-purple-500/40 bg-gradient-to-r from-[#0f0918] via-[#08080c] to-[#08080c]"
                      : ""
                  }`}
                >
                  {/* Category Header Bar */}
                  <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-transparent group-hover:border-white/10 transition-colors duration-300">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-7.5 items-center justify-center rounded-lg bg-[#121216] border border-transparent group-hover:border-white/20 text-[#3b9eff] transition-all duration-200 group-hover:scale-105">
                        <IconComponent className="size-4" />
                      </div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#fcfdff]">
                        {group.category}
                      </span>
                    </div>
                  </div>

                  {/* Icon Cluster Grid */}
                  <div className="flex flex-wrap gap-3 sm:gap-3.5 items-center pt-0.5">
                    {group.items.map((skill) => (
                      <SkillIcon
                        key={skill.name}
                        name={skill.name}
                        category={group.category}
                        showLabel={false}
                        size="md"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});
