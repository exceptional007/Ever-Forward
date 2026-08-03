import { memo, useCallback, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/animations/Magnetic";
import { ease } from "@/lib/motion";

const channels = [
  { label: "GitHub", value: "exceptional007", href: profile.socials.github, Icon: Github },
  {
    label: "LinkedIn",
    value: "akshhat-srivastava",
    href: profile.socials.linkedin,
    Icon: Linkedin,
  },
  { label: "LeetCode", value: "akshhat007", href: profile.socials.leetcode, Icon: Code2 },
];

export const Contact = memo(function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title={
        <>
          Let&apos;s build something{" "}
          <span className="bg-clip-text text-transparent accent-gradient">worth shipping</span>.
        </>
      }
      description={`${profile.availability}. The fastest way to reach me is email — I reply within a day.`}
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="glass relative overflow-hidden rounded-[1.75rem] p-8 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full bg-primary/15 blur-3xl"
          />
          <p className="text-[0.68rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
            Email me
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-flex items-baseline gap-2 text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-3xl"
          >
            {profile.email}
            <ArrowUpRight className="size-5 shrink-0 text-primary" aria-hidden />
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic strength={0.2}>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-[1.03]"
              >
                <Mail className="size-4" aria-hidden />
                Start a conversation
              </a>
            </Magnetic>
            <button
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <motion.span
                key={copied ? "done" : "idle"}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25, ease }}
                className="grid place-items-center"
              >
                {copied ? (
                  <Check className="size-4 text-primary" aria-hidden />
                ) : (
                  <Copy className="size-4" aria-hidden />
                )}
              </motion.span>
              {copied ? "Copied" : "Copy address"}
            </button>
          </div>

          <dl className="mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <div>
                <dt className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Phone
                </dt>
                <dd className="mt-0.5 text-[0.88rem] text-foreground">{profile.phone}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <div>
                <dt className="text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Location
                </dt>
                <dd className="mt-0.5 text-[0.88rem] text-foreground">{profile.location}</dd>
              </div>
            </div>
          </dl>
        </Reveal>

        <div className="space-y-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={0.08 + i * 0.07}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass flex items-center gap-4 rounded-3xl p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-surface-strong text-primary">
                  <c.Icon className="size-4" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block truncate text-[0.88rem] text-foreground">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
});
