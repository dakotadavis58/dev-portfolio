// components/ui/card.tsx
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-gray-800 bg-gray-900/50 text-gray-100 shadow-sm backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 [&:not(:first-child)]:pt-6", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };
