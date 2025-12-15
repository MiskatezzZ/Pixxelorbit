"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import WorldMap from "@/components/ui/world-map";

export default function WorldMapSection() {
  return (
    <Section className="border-t border-border-subtle/60 pt-20 pb-16 md:pt-24 md:pb-20">
      <Container>
        <div className="space-y-10">
          <FadeInSection className="max-w-2xl space-y-3">
            <p className="text-label uppercase text-muted-foreground">Built remotely</p>
            <h2 className="text-heading font-semibold text-foreground">Built remotely, worldwide.</h2>
            <p className="text-body text-muted-foreground">
              Working async with founders across time zones.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <WorldMap
              lineColor="#1E63F9"
              dots={[
                {
                  start: { lat: 51.5074, lng: -0.1278 },
                  end: { lat: 40.7128, lng: -74.006 },
                },
                {
                  start: { lat: 40.7128, lng: -74.006 },
                  end: { lat: 28.6139, lng: 77.209 },
                },
                {
                  start: { lat: 28.6139, lng: 77.209 },
                  end: { lat: -33.8688, lng: 151.2093 },
                },
                {
                  start: { lat: 37.7749, lng: -122.4194 },
                  end: { lat: -1.2921, lng: 36.8219 },
                },
              ]}
            />
          </FadeInSection>
        </div>
      </Container>
    </Section>
  );
}
