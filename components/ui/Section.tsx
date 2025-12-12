import { forwardRef, type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: "default" | "muted" | "soft";
  className?: string;
}

const variantClasses: Record<NonNullable<SectionProps["variant"]>, string> = {
  default: "bg-transparent",
  muted: "bg-muted",
  soft: "bg-accent-soft"
};

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  const { children, id, variant = "default", className } = props;

  return (
    <section
      ref={ref}
      id={id}
      className={`${variantClasses[variant]} py-36 md:py-44 ${className ?? ""}`}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";

export default Section;
