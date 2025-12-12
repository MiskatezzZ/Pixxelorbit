import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";
import { Rocket, Zap, Repeat } from "lucide-react";

const models = [
  {
    title: "Launch project",
    desc: "Best for new product, rebrand, or major launch.",
    detail: "6-10 week sprint from idea to deployed system.",
    icon: Rocket
  },
  {
    title: "Automation sprint",
    desc: "Best for teams drowning in manual work.",
    detail: "Rapid 3-week implementation of quiet bots.",
    icon: Zap
  },
  {
    title: "Ongoing optimisation",
    desc: "Best for product teams that want steady improvement.",
    detail: "Monthly experiments on funnels and flows.",
    icon: Repeat
  },
];

export default function EngagementModelsSection() {
  return (
    <Section id="pricing" className="border-t border-border-subtle/60">
      <Container>
        <div className="space-y-12">
          <FadeInSection className="max-w-2xl space-y-3">
            <h2 className="text-heading font-semibold text-foreground">How you can work with us.</h2>
          </FadeInSection>

          <div className="grid gap-6 md:grid-cols-3">
            {models.map((model, index) => (
              <FadeInSection key={model.title} delay={0.05 * index}>
                <SurfaceCard className="h-full p-6 flex flex-col justify-between gap-6 hover:border-accent/30 transition-colors group">
                  <div className="space-y-4">
                    <div className="h-8 w-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                      <model.icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">
                        {model.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {model.desc}
                      </p>
                      <p className="text-xs text-muted-foreground/70 border-t border-border-subtle/40 pt-2 mt-2">
                        {model.detail}
                      </p>
                    </div>
                  </div>
                  <Link href="/contact" className="text-xs font-medium text-foreground underline decoration-border-subtle underline-offset-4 hover:decoration-foreground transition-all">
                    Start conversation
                  </Link>
                </SurfaceCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
