import { memo, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail, Code2, MapPin } from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";
import { Magnetic } from "@/components/animations/Magnetic";
import { ease, staggerParent, fadeUp } from "@/lib/motion";

const ROLES = ["Software Engineer", "AI Engineer", "Full-Stack Developer", "RAG Systems Builder"];

function useRotatingRole() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2800);
    return () => window.clearInterval(id);
  }, [reduced]);

  return reduced ? ROLES[0] : ROLES[index];
}

const socialLinks = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.socials.leetcode, label: "LeetCode", Icon: Code2 },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export const Hero = memo(function Hero() {
  const role = useRotatingRole();
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-center px-5 pt-32 pb-24 sm:px-8"
    >
      <motion.div
        variants={staggerParent(0.09, 0.15)}
        initial="hidden"
        animate="show"
        className="max-w-4xl"
      >
        <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-3">
          <span className="glass inline-flex items-center gap-2 rounded-full py-1.5 pr-4 pl-3 text-[0.72rem] font-medium text-muted-foreground">
            <span className="relative grid size-2 place-items-center">
              <span className="absolute size-2 rounded-full bg-primary" />
              {!reduced && (
                <motion.span
                  className="absolute size-2 rounded-full bg-primary"
                  animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </span>
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[0.72rem] text-muted-foreground">
            <MapPin className="size-3" aria-hidden />
            {profile.location}
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mb-5 font-mono text-[0.75rem] tracking-[0.28em] text-primary uppercase"
        >
          {profile.education}
        </motion.p>

        <motion.h1
          id="hero-heading"
          variants={fadeUp}
          className="text-gradient text-[clamp(2.6rem,9vw,6.5rem)] leading-[0.95] font-bold"
        >
          Akshhat
          <br />
          Srivastava
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-7 flex h-8 items-center gap-3 text-lg font-medium sm:text-2xl"
        >
          <span className="text-muted-foreground">I&apos;m a</span>
          <span className="relative inline-flex overflow-hidden">
            <motion.span
              key={role}
              initial={reduced ? undefined : { y: "100%", opacity: 0, filter: "blur(6px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease }}
              className="bg-clip-text font-semibold text-transparent accent-gradient"
            >
              {role}
            </motion.span>
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-[1.02rem] leading-relaxed text-muted-foreground"
        >
          {profile.summary}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-11 flex flex-wrap items-center gap-3">
          <Magnetic strength={0.2}>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:scale-[1.03]"
            >
              <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
              Download résumé
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a
              href="#contact"
              className="glass inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary/50"
            >
              Contact me
            </a>
          </Magnetic>

          <div className="ml-1 flex items-center gap-1.5">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-20 inline-flex w-fit items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-foreground"
      >
        <motion.span
          animate={reduced ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="grid size-8 place-items-center rounded-full border border-border"
        >
          <ArrowDown className="size-3.5" aria-hidden />
        </motion.span>
        Scroll
      </motion.a>
    </section>
  );
});
