import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

export default function BigTestimonialSection() {
  return (
    <Section className="border-t border-border-subtle/60 py-20 md:py-28">
      <Container>
        <div className="space-y-12">
          <FadeInSection className="max-w-2xl">
            <h2 className="text-heading font-semibold text-foreground">
              Partners who like quiet, compounding progress.
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <SurfaceCard className="p-8 md:p-12 bg-gradient-to-br from-surface/80 to-background">
              <div className="max-w-4xl space-y-8">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground font-medium text-balance">
                  “Once everything was in one calm system—website, onboarding, ops, and reporting—we stopped chasing tools and finally focused on the work.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/20">
                    EF
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Elena, Founder</div>
                    <div className="text-xs text-muted-foreground">Series A SaaS — Product-led growth</div>
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </FadeInSection>
        </div>
      </Container>
    </Section>
  );
}
