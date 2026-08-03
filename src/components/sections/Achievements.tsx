import { memo } from "react";
import { motion } from "motion/react";
import { Award, BadgeCheck, Quote, Trophy } from "lucide-react";
import { achievements, certifications, testimonials } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animations/Reveal";
import { ease, viewportOnce } from "@/lib/motion";

export const Achievements = memo(function Achievements() {
  return (
    <Section
      id="achievements"
      index="05"
      eyebrow="Recognition"
      title={
        <>
          Competitions, certifications and{" "}
          <span className="bg-clip-text text-transparent accent-gradient">what people say</span>.
        </>
      }
      description="Three hackathon podiums, an NPTEL elite certification from IIT Roorkee, and words from the people I've shipped alongside."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          <Reveal className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            <Trophy className="size-3.5 text-primary" aria-hidden />
            Achievements
          </Reveal>
          {achievements.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 0.07}
              className="group glass rounded-3xl p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-[0.95rem] font-semibold tracking-tight text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-1 font-mono text-[0.65rem] tracking-widest text-muted-foreground">
                    {a.period}
                  </p>
                </div>
                <span className="shrink-0 rounded-full accent-gradient px-3 py-1 text-[0.62rem] font-semibold tracking-wide text-primary-foreground">
                  {a.award}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-4">
          <Reveal className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            <BadgeCheck className="size-3.5 text-primary" aria-hidden />
            Certifications
          </Reveal>
          {certifications.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.07}
              className="group glass rounded-3xl p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <div className="min-w-0">
                  <h3 className="text-[0.95rem] leading-snug font-semibold tracking-tight text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-[0.75rem] text-primary">{c.issuer}</p>
                  <p className="mt-0.5 font-mono text-[0.65rem] tracking-widest text-muted-foreground">
                    {c.period}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
            className="glass flex flex-col rounded-3xl p-6"
          >
            <Quote className="size-5 text-primary/60" aria-hidden />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
              {t.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <p className="text-[0.85rem] font-semibold text-foreground">{t.name}</p>
              <p className="text-[0.72rem] text-muted-foreground">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
});
