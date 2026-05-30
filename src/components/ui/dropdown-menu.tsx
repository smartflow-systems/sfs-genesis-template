import type { HTMLAttributes, ReactElement, ReactNode } from "react";

type TriggerProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  children: ReactElement;
};

export function DropdownMenu({ children }: { children: ReactNode }) {
  return <div className="relative inline-flex">{children}</div>;
}

export function DropdownMenuTrigger({ asChild, children, className = "", ...props }: TriggerProps) {
  if (asChild) return children;
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function DropdownMenuContent({
  className = "",
  align,
  ...props
}: HTMLAttributes<HTMLDivElement> & { align?: "start" | "center" | "end" }) {
  void align;

  return (
    <div
      className={`absolute right-0 top-full z-50 mt-2 rounded-md border border-[hsl(var(--sf-gold-dim))]/20 bg-[hsl(var(--sf-black))] p-1 shadow-xl ${className}`}
      {...props}
    />
  );
}

export function DropdownMenuItem({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm hover:bg-[hsl(var(--sf-gold))]/10 ${className}`} {...props} />;
}

export function DropdownMenuLabel({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`px-2 py-1.5 text-sm font-semibold ${className}`} {...props} />;
}

export function DropdownMenuSeparator({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`my-1 h-px bg-[hsl(var(--sf-gold-dim))]/20 ${className}`} {...props} />;
}
