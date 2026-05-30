import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`h-10 rounded-md border px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-[hsl(var(--sf-gold))]/30 ${className}`}
      {...props}
    />
  );
}
