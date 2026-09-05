import { memo } from "react";
import { BrainIcon, GraduationCapIcon, LayersIcon } from "lucide-react";
import { SectionHeading } from "@/components/layout/Section";
import { SectionBackground } from "@/components/layout/SectionBackground";
import { Badge } from "@/components/ui/badge";

const aboutCards = [
  {
    title: "AI Engineer Intern @ String AI India",
    subtitle: "Production AI & Multilingual Tooling",
    description:
      "Architectural owner of Unicode-aware multilingual NLP processing pipelines supporting 22 Indian languages. Built RAG document investigation portals and layered .NET Core & FastAPI microservices.",
    tags: ["22 Indic Languages", "RAG Pipelines", ".NET & FastAPI"],
    icon: BrainIcon,
    accent: "hover:border-[#3b9eff]/40 bg-[#3b9eff]/05",
    iconColor: "text-[#3b9eff] bg-[#3b9eff]/10 border-transparent group-hover:border-[#3b9eff]/30",
  },
  {
    title: "CSE (Data Science) @ Buddha Institute of Tech",
    subtitle: "Academic Excellence & Hackathons",
    description:
      "Maintaining an 82.27% aggregate score through 6 semesters. 3 Hackathon podium finishes including Runner-Up at Tech-Yuva 10.0 for INCA (Intelligent Campus Assistant).",
    tags: ["82.27% Academic Avg", "Tech-Yuva 10.0 Runner-Up", "IEEE Member"],
    icon: GraduationCapIcon,
    accent: "hover:border-[#3b9eff]/40 bg-[#3b9eff]/05",
    iconColor: "text-[#3b9eff] bg-[#3b9eff]/10 border-transparent group-hover:border-[#3b9eff]/30",
  },
  {
    title: "Applied AI & Scalable Infrastructure",
    subtitle: "Core Stack & Engineering Focus",
    description:
      "Specialized in vector stores (Qdrant Cloud, ChromaDB), OpenAI API integrations, EF Core Code-First Repository pattern, and CI-ready API test automation with Playwright.",
    tags: ["Qdrant & ChromaDB", "OpenAI API", "Playwright QA"],
    icon: LayersIcon,
    accent: "hover:border-[#11ff99]/40 bg-[#11ff99]/05",
    iconColor: "text-[#11ff99] bg-[#11ff99]/10 border-transparent group-hover:border-[#11ff99]/30",
  },
];

export const About = memo(function About() {
  return (
    <section
      aria-labelledby="about-heading"
      id="about"
      className="relative overflow-hidden w-full py-6"
    >
      <SectionBackground variant="about" />
      <div className="relative z-10">
        <SectionHeading id="about-heading">About</SectionHeading>

        <div className="px-4 py-6 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {aboutCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.title}
                  className={`group relative flex flex-col justify-between rounded-xl border border-transparent bg-[#08080c] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c0c10] ${card.accent}`}
                >
                  <div>
                    {/* Header Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`flex size-9 shrink-0 items-center justify-center rounded-lg border font-bold transition-all duration-200 group-hover:scale-105 ${card.iconColor}`}
                      >
                        <IconComp className="size-4.5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-mono text-xs font-bold text-[#fcfdff] leading-tight truncate">
                          {card.title}
                        </h3>
                        <p className="font-mono text-2xs text-[#a1a4a5] mt-0.5">{card.subtitle}</p>
                      </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-xs text-[#a1a4a5] leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>

                  {/* Highlight Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-transparent group-hover:border-white/06 transition-colors">
                    {card.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="default"
                        className="font-mono text-2xs py-0.5 px-2 bg-[#101014] border border-transparent group-hover:border-white/10 text-[#fcfdff] transition-colors"
                      >
                        {t}
                      </Badge>
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
