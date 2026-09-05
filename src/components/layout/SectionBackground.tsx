import { memo } from "react";
import { cn } from "@/lib/utils";

export type SectionBackgroundVariant =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "achievements"
  | "faq"
  | "contact"
  | "resume";

const variantConfigs: Record<SectionBackgroundVariant, { backgroundImage: string }> = {
  hero: {
    backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 15%, rgba(203, 213, 225, 0.14) 0%, rgba(203, 213, 225, 0.08) 25%, rgba(203, 213, 225, 0.03) 40%, transparent 60%)`,
  },
  about: {
    backgroundImage: `radial-gradient(circle at 25% 45%, rgba(165, 180, 252, 0.12) 0%, rgba(165, 180, 252, 0.06) 30%, rgba(165, 180, 252, 0.02) 50%, transparent 65%)`,
  },
  experience: {
    backgroundImage: `radial-gradient(circle at 75% 35%, rgba(147, 197, 253, 0.11) 0%, rgba(147, 197, 253, 0.06) 25%, rgba(147, 197, 253, 0.02) 45%, transparent 60%)`,
  },
  projects: {
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(253, 186, 116, 0.10) 0%, rgba(253, 186, 116, 0.05) 35%, rgba(253, 186, 116, 0.02) 55%, transparent 70%)`,
  },
  skills: {
    backgroundImage: `radial-gradient(circle at 30% 55%, rgba(103, 232, 249, 0.12) 0%, rgba(103, 232, 249, 0.06) 25%, rgba(103, 232, 249, 0.02) 45%, transparent 60%)`,
  },
  achievements: {
    backgroundImage: `radial-gradient(circle at 70% 45%, rgba(110, 231, 183, 0.11) 0%, rgba(110, 231, 183, 0.05) 25%, rgba(110, 231, 183, 0.02) 45%, transparent 60%)`,
  },
  faq: {
    backgroundImage: `radial-gradient(circle at 50% 30%, rgba(148, 163, 184, 0.10) 0%, rgba(148, 163, 184, 0.05) 20%, rgba(148, 163, 184, 0.02) 40%, transparent 55%)`,
  },
  contact: {
    backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 40%, rgba(196, 181, 253, 0.13) 0%, rgba(196, 181, 253, 0.07) 30%, rgba(196, 181, 253, 0.02) 50%, transparent 65%)`,
  },
  resume: {
    backgroundImage: `radial-gradient(circle at 50% 40%, rgba(226, 232, 240, 0.12) 0%, rgba(226, 232, 240, 0.06) 25%, rgba(226, 232, 240, 0.02) 45%, transparent 60%)`,
  },
};

interface SectionBackgroundProps {
  variant: SectionBackgroundVariant;
  className?: string;
}

export const SectionBackground = memo(function SectionBackground({
  variant,
  className,
}: SectionBackgroundProps) {
  const config = variantConfigs[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 z-0 pointer-events-none select-none transition-opacity duration-700",
        className,
      )}
      style={{
        backgroundImage: config.backgroundImage,
        backgroundSize: "100% 100%",
      }}
    />
  );
});
