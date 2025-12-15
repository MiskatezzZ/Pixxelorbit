import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SurfaceCard from "@/components/ui/SurfaceCard";
import FadeInSection from "@/components/ui/FadeInSection";

const capabilities = [
    {
        title: "Websites",
        desc: "High-converting marketing sites built on modern CMS platforms.",
        visual: (
            <div className="relative h-full w-full bg-gradient-to-br from-blue-500/10 to-cyan-500/5 flex items-center justify-center p-4">
                <div className="w-full max-w-[140px] space-y-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/60 p-3">
                    <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                    <div className="flex gap-2">
                        <div className="w-1/3 h-16 bg-gray-100 rounded border border-gray-200" />
                        <div className="w-2/3 h-16 bg-gray-50 rounded border border-gray-200 flex flex-col gap-1 p-1.5">
                            <div className="h-1 bg-gray-200 rounded" />
                            <div className="h-1 bg-gray-200 rounded w-2/3" />
                            <div className="flex-1" />
                            <div className="h-2 bg-blue-400 rounded" />
                        </div>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded w-2/3" />
                </div>
            </div>
        )
    },
    {
        title: "CRMs & Data",
        desc: "Unified customer data systems that become your single source of truth.",
        visual: (
            <div className="relative h-full w-full bg-gradient-to-br from-purple-500/10 to-pink-500/5 flex items-center justify-center p-4">
                <div className="w-full max-w-[140px] space-y-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md border border-white/60">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0" />
                            <div className="flex-1 h-1.5 rounded-full bg-gray-200" />
                            <div className="h-1.5 w-8 rounded-full bg-purple-300" />
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        title: "AI Automations",
        desc: "Intelligent workflows that handle repetitive tasks in the background.",
        visual: (
            <div className="relative h-full w-full bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 flex items-center justify-center">
                <div className="relative">
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 border-2 border-violet-400/40 flex items-center justify-center shadow-2xl shadow-violet-500/20 backdrop-blur-sm">
                        <div className="h-10 w-10 rounded-xl bg-white/90 flex items-center justify-center">
                            <div className="h-4 w-4 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                        </div>
                    </div>
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 shadow-lg shadow-green-400/50 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 animate-pulse" />
                </div>
            </div>
        )
    },
    {
        title: "Conversion Funnels",
        desc: "Optimized flows designed to turn visitors into customers.",
        visual: (
            <div className="relative h-full w-full bg-gradient-to-br from-orange-500/10 to-red-500/5 flex items-center justify-center p-4">
                <div className="flex items-end justify-center gap-1.5 w-full max-w-[100px] h-16">
                    <div className="w-full bg-gradient-to-t from-orange-200 to-orange-100 h-[40%] rounded-t-md border border-orange-300" />
                    <div className="w-full bg-gradient-to-t from-orange-300 to-orange-200 h-[60%] rounded-t-md border border-orange-400" />
                    <div className="w-full bg-gradient-to-t from-orange-400 to-orange-300 h-[30%] rounded-t-md border border-orange-500" />
                    <div className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 h-[85%] rounded-t-md border border-emerald-600 shadow-lg shadow-emerald-500/30" />
                </div>
            </div>
        )
    },
    {
        title: "Integrations",
        desc: "Connect your entire tech stack into one seamless system.",
        visual: (
            <div className="relative h-full w-full bg-gradient-to-br from-sky-500/10 to-blue-500/5 flex items-center justify-center">
                <div className="relative flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border-2 border-sky-400 bg-white shadow-lg flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-gradient-to-br from-sky-400 to-blue-400" />
                    </div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-sky-400 to-blue-400 relative">
                        <div className="absolute inset-0 bg-sky-400 animate-pulse" />
                    </div>
                    <div className="h-12 w-12 rounded-full border-2 border-blue-500 bg-white shadow-xl flex items-center justify-center">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />
                    </div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 relative">
                        <div className="absolute inset-0 bg-blue-400 animate-pulse" />
                    </div>
                    <div className="h-10 w-10 rounded-full border-2 border-indigo-400 bg-white shadow-lg flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400" />
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Growth Systems",
        desc: "Data-driven experimentation frameworks that compound over time.",
        visual: (
            <div className="relative h-full w-full bg-gradient-to-br from-green-500/10 to-emerald-500/5 flex items-center justify-center">
                <div className="relative h-20 w-20">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-green-300/40 animate-spin" style={{ animationDuration: '8s' }} />
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-xl shadow-green-500/30 flex items-center justify-center">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
];

export default function FeaturesSection() {
    return (
        <Section className="border-t border-border-subtle/30 pt-20 pb-20 md:pt-24 md:pb-24">
            <Container>
                <div className="space-y-12">
                    <FadeInSection className="max-w-2xl space-y-4">
                        <h2 className="text-heading font-semibold text-foreground">
                            What we help you systemize
                        </h2>
                        <p className="text-lg text-muted-foreground w-full max-w-xl">
                            We connect website, data, and automations into one calm system.
                        </p>
                    </FadeInSection>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((item, index) => (
                            <FadeInSection key={item.title} delay={0.05 * index}>
                                <SurfaceCard className="h-80 p-0 overflow-hidden group border-2 border-border-subtle/50 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 bg-white">
                                    <div className="h-44 border-b-2 border-border-subtle/50 overflow-hidden">
                                        {item.visual}
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <h3 className="text-lg font-bold text-foreground">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </SurfaceCard>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
