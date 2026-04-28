import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "text-primary hover:text-accent",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300";

interface CTAProps {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

export const CTAButton = ({
  to,
  href,
  variant = "primary",
  children,
  className,
  ...rest
}: CTAProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const cls = cn(base, styles[variant], className);
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
};
