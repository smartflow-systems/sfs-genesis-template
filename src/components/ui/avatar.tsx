import type { HTMLAttributes, ImgHTMLAttributes } from "react";

export function Avatar({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`relative flex shrink-0 overflow-hidden rounded-full ${className}`} {...props} />;
}

export function AvatarImage({ className = "", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={`aspect-square h-full w-full object-cover ${className}`} {...props} />;
}

export function AvatarFallback({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex h-full w-full items-center justify-center ${className}`} {...props} />;
}
