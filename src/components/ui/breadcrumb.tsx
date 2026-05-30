import type { AnchorHTMLAttributes, HTMLAttributes } from "react";

export function Breadcrumb(props: HTMLAttributes<HTMLElement>) {
  return <nav aria-label="Breadcrumb" {...props} />;
}

export function BreadcrumbList({ className = "", ...props }: HTMLAttributes<HTMLOListElement>) {
  return <ol className={`flex flex-wrap items-center gap-2 text-sm ${className}`} {...props} />;
}

export function BreadcrumbItem({ className = "", ...props }: HTMLAttributes<HTMLLIElement>) {
  return <li className={`inline-flex items-center gap-2 ${className}`} {...props} />;
}

export function BreadcrumbLink({ className = "", ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={`transition hover:text-[hsl(var(--sf-gold))] ${className}`} {...props} />;
}

export function BreadcrumbPage({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span aria-current="page" className={className} {...props} />;
}

export function BreadcrumbSeparator({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span aria-hidden="true" className={`text-muted-foreground ${className}`} {...props}>
      /
    </span>
  );
}
