import { memo, type ReactNode } from "react";
import { Reveal } from "@/components/animations/Reveal";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
};

/** Consistent section frame: index, eyebrow, gradient title, hairline divider. */
export const Section = memo(function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32 ${className ?? ""}`}
    >
      <Reveal className="hairline mb-14" y={0} blur={false} />

      <Reveal className="mb-3 flex items-center gap-3">
        <span className="font-mono text-[0.7rem] tracking-[0.25em] text-primary">{index}</span>
        <span className="text-[0.7rem] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2
          id={`${id}-heading`}
          className="max-w-3xl text-3xl leading-[1.08] font-semibold sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </Reveal>
      )}

      <div className="mt-14">{children}</div>
    </section>
  );
});
