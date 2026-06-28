import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline-white" | "outline-blue";
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  "aria-label"?: string;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.08em] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer";

const variantClasses: Record<string, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5",
  secondary:
    "bg-white text-primary hover:bg-gray-light focus-visible:ring-primary border border-gray-border shadow-sm hover:shadow-md",
  "outline-white":
    "bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-ink focus-visible:ring-white",
  "outline-blue":
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-lg",
  lg: "px-8 py-4 text-base rounded-lg",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  size = "md",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
