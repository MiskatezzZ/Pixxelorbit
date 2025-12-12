import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { Search, Palette, Zap, Rocket, TrendingUp } from "lucide-react";

const phases = [
    { name: "Discovery", icon: Search, color: "from-blue-500 to-cyan-500", description: "Audit your stack" },
    { name: "Design", icon: Palette, color: "from-purple-500 to-pink-500", description: "Map your system" },
    { name: "Automate", icon: Zap, color: "from-yellow-500 to-orange-500", description: "Build workflows" },
    { name: "Launch", icon: Rocket, color: "from-green-500 to-emerald-500", description: "Deploy & test" },
    { name: "Growth", icon: TrendingUp, color: "from-indigo-500 to-violet-500", description: "Scale & optimize" },
];

export default function SystemFrameworkSection() {
    return (
        <Section className="border-t border-border-subtle/30 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
            <Container>
                <FadeInSection className="mb-20 text-center space-y-4">
                    <h2 className="text-heading font-semibold text-foreground">
                        Our System Framework
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        How we move from chaos to clarity in 5 steps.
                    </p>
                </FadeInSection>

                <FadeInSection delay={0.2} className="relative max-w-5xl mx-auto">
                    {/* Main Flow Diagram */}
                    <div className="relative">
                        {/* Connection Path */}
                        <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-border-subtle via-accent/30 to-border-subtle hidden lg:block" />

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                            {phases.map((phase, i) => (
                                <div key={phase.name} className="flex flex-col items-center gap-6 group">
                                    {/* Icon Node */}
                                    <div className="relative">
                                        <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${phase.color} p-0.5 shadow-2xl transition-transform hover:-translate-y-2`}>
                                            <div className="h-full w-full rounded-xl bg-background flex items-center justify-center">
                                                <phase.icon className="h-8 w-8 text-foreground" />
                                            </div>
                                        </div>
                                        {/* Pulse Ring */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500`} />

                                        {/* Step Number */}
                                        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold shadow-lg">
                                            {i + 1}
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="w-full rounded-xl border border-border-subtle bg-surface p-6 shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all space-y-2">
                                        <h3 className="font-bold text-foreground text-center">{phase.name}</h3>
                                        <p className="text-sm text-muted-foreground text-center leading-relaxed">{phase.description}</p>
                                    </div>

                                    {/* Arrow (Desktop only) */}
                                    {i < phases.length - 1 && (
                                        <div className="hidden lg:block absolute top-24 -right-4 text-accent/30">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInSection>
            </Container>
        </Section>
    );
}
