import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive";
};

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variantClass =
    variant === "outline"
      ? "border border-current bg-transparent"
      : variant === "destructive"
        ? "bg-red-600 text-white"
        : variant === "secondary"
          ? "bg-[hsl(var(--sf-brown))]/40"
          : "bg-[hsl(var(--sf-gold))] text-[hsl(var(--sf-black))]";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variantClass} ${className}`}
      {...props}
    />
  );
}
