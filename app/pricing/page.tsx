import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Pricing · Pixxelorbit",
  description: "Simple, transparent pricing for projects and sprints.",
};

export default function PricingPage() {
  return (
    <Section className="py-32 md:py-40 min-h-[70vh]">
      <Container>
        <div className="max-w-3xl space-y-6">
          <h1 className="text-display font-semibold text-foreground">
            Simple, flat pricing. <br /> No surprises.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We work in defined sprints or fixed-scope projects. You’ll always know exactly what you’re paying for.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-surface/50 p-8 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Sprint Pricing</h3>
            <div className="h-40 rounded-lg bg-background/50 border border-dashed border-border-subtle flex items-center justify-center">
              <span className="text-muted-foreground">Tiers coming soon</span>
            </div>
          </div>
          <div className="rounded-2xl border border-border-subtle bg-surface/50 p-8 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Retainer Pricing</h3>
            <div className="h-40 rounded-lg bg-background/50 border border-dashed border-border-subtle flex items-center justify-center">
              <span className="text-muted-foreground">Tiers coming soon</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
