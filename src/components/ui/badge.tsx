import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-white/20",
  {
    variants: {
      variant: {
        default: "border border-white/14 bg-[#101012] text-[#fcfdff]",
        secondary: "border border-white/06 bg-[#0a0a0c] text-[#rgba(252,253,255,0.7)]",
        destructive: "border border-red-500/30 bg-[#ff2047]/10 text-[#ff2047]",
        outline: "border border-white/14 bg-transparent text-[#fcfdff]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
