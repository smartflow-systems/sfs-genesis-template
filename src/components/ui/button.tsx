import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "icon";
};

const variantClasses = {
  default: "bg-[hsl(var(--sf-gold))] text-[hsl(var(--sf-black))] hover:opacity-90",
  outline: "border border-[hsl(var(--sf-gold-dim))]/40 bg-transparent hover:bg-[hsl(var(--sf-gold))]/10",
  ghost: "bg-transparent hover:bg-[hsl(var(--sf-gold))]/10",
};

const sizeClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-sm",
  icon: "h-10 w-10",
};

export function Button({
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-medium transition ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
