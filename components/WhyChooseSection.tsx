import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { Layers, Bot, LayoutGrid, BarChart3 } from "lucide-react";

const reasons = [
    {
        icon: Layers,
        title: "Fewer tools, clearer systems",
        desc: "We audit your stack and cut the bloat before building.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-50"
    },
    {
        icon: Bot,
        title: "Automations built for ops",
        desc: "We don't just zap; we build robust error-handled workflows.",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-50"
    },
    {
        icon: LayoutGrid,
        title: "Clean websites that convert",
        desc: "Design that looks premium and loads instantly.",
        color: "from-emerald-500 to-green-500",
        bgColor: "bg-emerald-50"
    },
    {
        icon: BarChart3,
        title: "Growth that compounds",
        desc: "Systems designed to scale with your traffic.",
        color: "from-orange-500 to-red-500",
        bgColor: "bg-orange-50"
    }
];

export default function WhyChooseSection() {
    return (
        <Section className="border-t border-border-subtle/30">
            <Container>
                <FadeInSection className="mb-16 text-center space-y-4">
                    <h2 className="text-heading font-semibold text-foreground">
                        Why teams choose Pixxelorbit
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        The difference is in the details.
                    </p>
                </FadeInSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, i) => (
                        <FadeInSection key={reason.title} delay={i * 0.1}>
                            <div className="group h-full rounded-2xl bg-surface border border-border-subtle shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Gradient Header */}
                                <div className={`h-32 bg-gradient-to-br ${reason.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                                    {/* Decorative circles */}
                                    <div className="absolute top-0 right-0 h-20 w-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 h-16 w-16 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                                    <div className="relative z-10 h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
                                        <reason.icon className="h-8 w-8 text-white drop-shadow-lg" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    <h3 className="font-bold text-lg text-foreground leading-snug">{reason.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
