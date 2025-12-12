import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeInSection from "@/components/ui/FadeInSection";

export default function FinalCTASection() {
  return (
    <Section id="contact" className="border-t border-border-subtle/60 py-24 md:py-32">
      <Container>
        <FadeInSection className="max-w-2xl space-y-6">
          <div className="space-y-3">
            <h2 className="text-heading font-semibold text-foreground">
              Share the next chapter when you are ready.
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              When it is helpful, send a short note about your product and where things feel unclear. We will respond with a calm, practical next step.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Link href="mailto:hello@pixxelorbit.studio" className="inline-flex">
              <Button>
                Email the studio
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground">
              Prefer async? Include Looms, docs, or links and we will review before our call.
            </p>
          </div>
        </FadeInSection>
      </Container>
    </Section>
  );
}
