import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";
import FeatureIcon from "@/components/ui/feature-icon";
import { LayoutDashboard, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    label: "Build",
    title: "Build clear, focused experiences.",
    body: "Launch-ready pages that feel effortless to use.",
    Icon: LayoutDashboard
  },
  {
    label: "Automate",
    title: "Automate the busywork.",
    body: "Workflows that run quietly without constant attention.",
    Icon: Sparkles
  },
  {
    label: "Grow",
    title: "Grow with steady systems.",
    body: "Funnels and onboarding that compound over time.",
    Icon: TrendingUp
  }
];

export default function BenefitsSection() {
  return (
    <Section className="border-t border-border-subtle/60 pt-16 pb-16 md:pt-20 md:pb-20">
      <Container>
        <div className="space-y-8">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Why Pixxelorbit</p>
            <h2 className="text-[1.9rem] font-semibold md:text-[2.05rem]">
              A calm partner for your next chapter.
            </h2>
            <p className="text-body text-muted-foreground">
              We design and refine the systems your business runs on—product, automation, and growth—so you can move forward without juggling vendors or disconnected tools.
            </p>
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item, index) => (
              <FadeInSection key={item.label} delay={0.06 * index}>
                <SurfaceCard className="h-full rounded-xl">
                  <div className="flex items-center gap-2">
                    <FeatureIcon icon={item.Icon} className="bg-accent/15 text-foreground/70" />
                    <p className="text-label uppercase text-muted-foreground">{item.label}</p>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
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
