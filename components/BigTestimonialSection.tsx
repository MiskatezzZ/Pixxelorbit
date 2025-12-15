import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

const supportingTestimonials = [
  {
    quote:
      "The new onboarding flow and automations paid for themselves in the first quarter. Our team feels calmer, too.",
    name: "Rahul, Operations lead",
    meta: "Growth-stage marketplace"
  },
  {
    quote:
      "We finally have one place to see website, product, and ops performance without chasing spreadsheets.",
    name: "Maya, Product lead",
    meta: "Remote-first SaaS team"
  }
];

export default function BigTestimonialSection() {
  return (
    <Section
      variant="soft"
      className="border-t border-border-subtle/60 pt-44 pb-36 md:pt-52 md:pb-44"
    >
      <Container>
        <div className="space-y-12">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Testimonials</p>
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

          <div className="grid gap-6 md:grid-cols-2">
            {supportingTestimonials.map((item, index) => (
              <FadeInSection key={item.name} delay={0.16 + 0.06 * index}>
                <SurfaceCard className="flex h-full flex-col bg-surface/80">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-700 to-accent text-[0.7rem] font-semibold text-white">
                      <span>{item.name.charAt(0)}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p>{item.meta}</p>
                    </div>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-foreground md:text-base">
                    “{item.quote}”
                  </p>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
