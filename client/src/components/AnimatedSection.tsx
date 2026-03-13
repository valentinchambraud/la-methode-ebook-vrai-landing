import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({ children, className = "", id }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <section
      ref={ref}
      id={id}
      className={`fade-in-up ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
