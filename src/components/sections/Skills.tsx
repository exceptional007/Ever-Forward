import { memo } from "react";
import { motion } from "motion/react";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  MonitorSmartphone,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups, techCloud } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animations/Reveal";
import { ease, viewportOnce } from "@/lib/motion";

const icons: Record<string, LucideIcon> = {
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Brain,
  Cloud,
  Wrench,
};

export const Skills = memo(function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Capabilities"
      title={
        <>
          A stack chosen for{" "}
          <span className="bg-clip-text text-transparent accent-gradient">depth</span>, not breadth.
        </>
      }
      description="Languages, frameworks and infrastructure I've actually shipped with — grouped by where they sit in the system."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const Icon = icons[group.icon] ?? Code2;
          return (
            <Reveal
              key={group.category}
              delay={gi * 0.06}
              className="group glass relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-surface-strong text-primary">
                  <Icon className="size-4" aria-hidden />
                </span>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-3.5">
                {group.items.map((item, i) => (
                  <li key={item.name}>
                    <div className="mb-1.5 flex items-baseline justify-between gap-3">
                      <span className="text-[0.82rem] text-foreground">{item.name}</span>
                      <span className="font-mono text-[0.65rem] text-muted-foreground">
                        {item.level}
                      </span>
                    </div>
                    <div
                      className="h-[3px] overflow-hidden rounded-full bg-surface-strong"
                      role="presentation"
                    >
                      <motion.div
                        className="h-full origin-left rounded-full accent-gradient"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: item.level / 100 }}
                        viewport={viewportOnce}
                        transition={{ duration: 1, delay: 0.1 + i * 0.06, ease }}
                        style={{ willChange: "transform" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15} className="mt-12 flex flex-wrap justify-center gap-2.5">
        {techCloud.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, delay: i * 0.025, ease }}
            className="glass rounded-full px-4 py-2 text-[0.78rem] text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
          >
            {tech}
          </motion.span>
        ))}
      </Reveal>
    </Section>
  );
});
