import { memo } from "react";
import { Download, FileText, GraduationCap, Languages, Mail, Phone } from "lucide-react";
import { profile, RESUME_URL, skillGroups } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/animations/Magnetic";

const quickFacts = [
  { Icon: GraduationCap, label: "Degree", value: "B.Tech CSE (Data Science), 82.27%" },
  { Icon: Languages, label: "Languages", value: "English, Hindi" },
  { Icon: Mail, label: "Email", value: profile.email },
  { Icon: Phone, label: "Phone", value: profile.phone },
];

export const Resume = memo(function Resume() {
  const topSkills = skillGroups.flatMap((g) => g.items).filter((i) => i.level >= 88);

  return (
    <Section
      id="resume"
      index="06"
      eyebrow="Résumé"
      title={
        <>
          The one-page version,{" "}
          <span className="bg-clip-text text-transparent accent-gradient">ready to download</span>.
        </>
      }
      description="Full history, coursework and contact details in a single PDF — or skim the summary below."
    >
      <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="glass relative overflow-hidden rounded-[1.75rem] p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-primary/15 blur-3xl"
          />
          <span className="grid size-12 place-items-center rounded-2xl bg-surface-strong text-primary">
            <FileText className="size-5" aria-hidden />
          </span>
          <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
            Akshhat Srivastava — Résumé
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {profile.role} · {profile.location}. Updated with current internship work, projects and
            certifications.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic strength={0.2}>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-[1.03]"
              >
                <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
                Download PDF
              </a>
            </Magnetic>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              View in browser
            </a>
          </div>

          <dl className="mt-9 grid gap-4 border-t border-border pt-7 sm:grid-cols-2">
            {quickFacts.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <div className="min-w-0">
                  <dt className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    {label}
                  </dt>
                  <dd className="mt-0.5 truncate text-[0.85rem] text-foreground">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-[1.75rem] p-8">
          <h3 className="text-[0.68rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            Strongest areas
          </h3>
          <ul className="mt-6 space-y-3">
            {topSkills.map((s) => (
              <li key={s.name} className="flex items-center justify-between gap-4">
                <span className="text-sm text-foreground">{s.name}</span>
                <span className="font-mono text-[0.68rem] text-primary">{s.level}%</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
            {profile.focus}
          </p>
        </Reveal>
      </div>
    </Section>
  );
});
