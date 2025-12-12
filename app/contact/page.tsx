import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact · Pixxelorbit",
  description: "Get in touch to discuss your project.",
};

export default function ContactPage() {
  return (
    <Section className="py-32 md:py-40 min-h-[70vh]">
      <Container>
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h1 className="text-display font-semibold text-foreground">
              Ready to calm the chaos?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Send us a note about your project. We’ll look it over and reply with a practical next step—calm, clear, and no sales pressure.
            </p>

            <div className="space-y-4 pt-4">
              <Link href="mailto:hello@pixxelorbit.studio">
                <Button className="h-12 px-8">
                  Email hello@pixxelorbit.studio
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 rounded-3xl blur-3xl opacity-50" />
            <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-surface border border-border-subtle flex items-center justify-center text-2xl">
                  👋
                </div>
                <p className="text-muted-foreground">We look forward to meeting you.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
