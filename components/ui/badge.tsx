// components/ui/badge.tsx
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-gray-900/50 text-gray-100 border border-gray-800",
        secondary:
          "bg-blue-900/20 text-blue-300 border border-blue-800/40 hover:bg-blue-900/30",
        destructive: "bg-red-900/30 text-red-300 border border-red-800/40",
        outline: "text-gray-100 border border-gray-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
