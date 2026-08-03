import { memo, useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animations/Reveal";
import { ease } from "@/lib/motion";

export const Experience = memo(function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = useCallback((i: number) => setOpenIndex((cur) => (cur === i ? null : i)), []);

  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experience"
      title={
        <>
          Roles where I owned the{" "}
          <span className="bg-clip-text text-transparent accent-gradient">whole feature</span>.
        </>
      }
      description="Internships, training and leadership — expand any role to read what actually shipped."
    >
      <ol className="space-y-4">
        {experiences.map((exp, i) => {
          const open = openIndex === i;
          return (
            <Reveal as="li" key={exp.role + exp.company} delay={i * 0.07}>
              <div
                className={`glass overflow-hidden rounded-3xl transition-colors duration-500 ${open ? "border-primary/40" : "hover:border-primary/25"}`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  aria-controls={`exp-panel-${i}`}
                  className="flex w-full items-start gap-4 p-6 text-left"
                >
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-surface-strong text-primary">
                    <Briefcase className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        {exp.role}
                      </h3>
                      <span className="rounded-full border border-border px-2 py-0.5 text-[0.62rem] font-medium tracking-wider text-muted-foreground uppercase">
                        {exp.type}
                      </span>
                    </span>
                    <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] text-muted-foreground">
                      <span className="text-primary">{exp.company}</span>
                      <span>{exp.period}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3" aria-hidden />
                        {exp.location}
                      </span>
                    </span>
                    <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">
                      {exp.summary}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground"
                    aria-hidden
                  >
                    <ChevronDown className="size-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`exp-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:pl-19">
                        <ul className="space-y-2.5 border-l border-border pl-5">
                          {exp.highlights.map((h) => (
                            <li key={h} className="relative text-sm leading-relaxed text-muted-foreground">
                              <span
                                aria-hidden
                                className="absolute top-2 -left-[1.42rem] size-1.5 rounded-full bg-primary/70"
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-surface-strong px-2.5 py-1 font-mono text-[0.65rem] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
});
