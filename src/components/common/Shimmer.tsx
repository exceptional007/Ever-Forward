import { memo, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Shimmer = memo(function Shimmer({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden group/shimmer", className)}>
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/shimmer:translate-x-full dark:via-white/10"
      />
    </div>
  );
});
