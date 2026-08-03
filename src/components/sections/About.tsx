import { memo } from "react";
import { motion } from "motion/react";
import { GraduationCap, Sparkles, Target } from "lucide-react";
import { profile, stats, timeline } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animations/Reveal";
import { Counter } from "@/components/animations/Counter";
import { viewportOnce } from "@/lib/motion";

const pillars = [
  { Icon: GraduationCap, label: "Education", body: profile.education },
  { Icon: Sparkles, label: "Current focus", body: profile.focus },
  { Icon: Target, label: "Looking for", body: profile.availability },
];

export const About = memo(function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          Engineering that survives{" "}
          <span className="bg-clip-text text-transparent accent-gradient">production</span>.
        </>
      }
      description={profile.longSummary}
    >
      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ Icon, label, body }, i) => (
              <Reveal as="li" key={label} delay={i * 0.08} className="glass rounded-3xl p-5">
                <Icon className="mb-4 size-5 text-primary" aria-hidden />
                <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{body}</p>
              </Reveal>
            ))}
            <Reveal as="li" delay={0.24} className="glass rounded-3xl p-5">
              <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Based in
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{profile.location}</p>
              <p className="mt-4 font-mono text-[0.7rem] text-primary">{profile.email}</p>
            </Reveal>
          </ul>

          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07} className="rounded-2xl border border-border p-4">
                <dd className="text-2xl font-semibold tracking-tight text-foreground">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">{s.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>

        <div className="relative">
          <Reveal className="mb-8 text-[0.68rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            The journey
          </Reveal>
          <ol className="relative space-y-9 border-l border-border pl-7">
            <motion.span
              className="absolute top-0 -left-px w-px origin-top accent-gradient"
              initial={{ scaleY: 0, height: "100%" }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            />
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.1} className="relative">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[2.05rem] size-2.5 rounded-full border border-primary bg-background"
                />
                <p className="font-mono text-[0.7rem] tracking-widest text-primary">{item.year}</p>
                <h3 className="mt-1.5 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1 text-[0.72rem] text-muted-foreground">{item.meta}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
});
