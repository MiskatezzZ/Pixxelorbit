import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "FAQ · Pixxelorbit",
  description: "Frequently asked questions about working with us.",
};

export default function FAQPage() {
  return (
    <Section className="py-32 md:py-40 min-h-[70vh]">
      <Container>
        <div className="max-w-3xl space-y-6">
          <h1 className="text-display font-semibold text-foreground">
            Common Questions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Answers to the things we get asked most often.
          </p>
        </div>

        <div className="mt-20 space-y-6 max-w-2xl">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-xl border border-border-subtle/60 bg-surface/30">
              <div className="h-6 w-2/3 bg-foreground/10 rounded mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted-foreground/10 rounded" />
                <div className="h-4 w-5/6 bg-muted-foreground/10 rounded" />
              </div>
            </div>
          ))}
          <p className="text-center text-sm text-muted-foreground pt-8">Real questions coming soon.</p>
        </div>
      </Container>
    </Section>
  );
}
