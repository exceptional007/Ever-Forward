import { memo, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Translucent hairline section divider */
export function HatchRule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("h-px w-full shrink-0 bg-white/06", className)} />;
}

/** Section heading sitting on full-width hairline */
export function SectionHeading({
  children,
  id,
  as: Tag = "h2",
  className,
  action,
}: {
  children: ReactNode;
  id?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-between gap-4 border-b border-white/06 px-4 py-4 sm:px-6",
        className,
      )}
    >
      <Tag
        id={id}
        className="scroll-mt-24 text-2xl font-semibold tracking-tighter text-[#fcfdff] sm:text-3xl"
      >
        {children}
      </Tag>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
};

export const Section = memo(function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("w-full py-8", className)}>
      <SectionHeading id={`${id}-heading`}>{title}</SectionHeading>
      {description && (
        <p className="px-4 sm:px-6 pt-3 text-xs leading-relaxed text-[#a1a4a5]">{description}</p>
      )}
      <div className="w-full">{children}</div>
    </section>
  );
});
