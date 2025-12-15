"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

const items = [
  {
    label: "Strategy",
    title: "From idea → live system",
  },
  {
    label: "Design",
    title: "Calm UI that earns trust",
  },
  {
    label: "Automation",
    title: "Automations that don’t break",
  },
  {
    label: "Growth tuning",
    title: "Growth you can reason about",
  },
  {
    label: "Iteration",
    title: "Clear handoff. No dependency.",
  },
];

export default function HowWeWorkSection() {
  return (
    <Section className="border-t border-border-subtle/60 pt-20 pb-16 md:pt-24 md:pb-20">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">How we work</p>
            <h2 className="text-heading font-semibold text-foreground">
              A simple process, built for momentum.
            </h2>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-12">
            {items.map((item, index) => {
              const colSpan = index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-4";

              return (
                <FadeInSection key={item.label} delay={0.06 * index} className={colSpan}>
                  <SurfaceCard className="h-full rounded-2xl bg-surface/80">
                    <div className="space-y-3">
                      <p className="text-label uppercase text-muted-foreground">{item.label}</p>
                      <p className="text-lg font-medium text-foreground">{item.title}</p>
                    </div>
                  </SurfaceCard>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
