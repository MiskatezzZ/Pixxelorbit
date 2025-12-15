import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowUpRight } from "lucide-react";

const workItems = [
    {
        title: "SaaS Onboarding Redesign",
        outcome: "↑ Reduced drop-offs in first session",
        tags: ["Website", "Onboarding", "Funnels"],
        visual: (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-indigo-900/30 to-gray-900 p-8 flex flex-col gap-4">
                <div className="w-full flex justify-between items-center border-b border-white/10 pb-3">
                    <div className="h-2.5 w-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                    <div className="flex gap-3">
                        <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10" />
                        <div className="h-8 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30" />
                    </div>
                </div>
                <div className="flex gap-6 flex-1">
                    <div className="w-1/4 space-y-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-8 rounded bg-white/5 border border-white/10" />
                        ))}
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="h-40 w-full rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 shadow-2xl shadow-indigo-500/20 backdrop-blur-sm p-4 flex flex-col gap-2">
                            <div className="h-2 w-3/4 bg-white/20 rounded" />
                            <div className="h-2 w-1/2 bg-white/15 rounded" />
                            <div className="flex-1" />
                            <div className="h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded shadow-lg" />
                        </div>
                        <div className="h-16 w-full rounded bg-white/5 border border-white/10" />
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Operations Control Center",
        outcome: "↑ One dashboard replacing 4 tools",
        tags: ["Internal Tools", "Automations", "CRM"],
        visual: (
            <div className="w-full h-full bg-white p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <div className="h-2 w-32 bg-gray-200 rounded-full" />
                    <div className="flex gap-2">
                        <div className="h-6 w-6 rounded bg-gray-100 border border-gray-200" />
                        <div className="h-6 w-16 rounded-full bg-blue-500 shadow-sm" />
                    </div>
                </div>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex gap-4 items-center border-b border-gray-100 pb-3 last:border-0">
                        <div className="h-5 w-5 rounded border-2 border-gray-300 flex-shrink-0" />
                        <div className="h-2 w-32 bg-gray-200 rounded-full" />
                        <div className="h-6 w-20 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full flex items-center justify-center ml-auto border border-blue-200">
                            <div className="h-1.5 w-8 bg-blue-400 rounded-full" />
                        </div>
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex-shrink-0 shadow-sm" />
                    </div>
                ))}
            </div>
        ),
    },
    {
        title: "Launch System Template",
        outcome: "↑ Reusable launch framework (shipped 3 products)",
        tags: ["Launch", "Email", "Funnels"],
        visual: (
            <div className="w-full h-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 flex items-center justify-center">
                <div className="relative flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-400 border-2 border-orange-500 shadow-xl shadow-orange-500/30 flex items-center justify-center">
                        <div className="h-6 w-6 rounded-lg bg-white/90" />
                    </div>
                    <div className="h-1 w-10 bg-gradient-to-r from-orange-400 to-amber-400 relative">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rotate-45 bg-amber-400" />
                    </div>
                    <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-amber-500 shadow-2xl shadow-amber-500/40 flex items-center justify-center scale-110">
                        <div className="h-8 w-8 rounded-xl bg-white/90" />
                        <div className="absolute inset-0 rounded-2xl bg-amber-300/30 animate-pulse" />
                    </div>
                    <div className="h-1 w-10 bg-gradient-to-r from-amber-400 to-yellow-400 relative">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rotate-45 bg-yellow-400" />
                    </div>
                    <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-400 border-2 border-yellow-500 shadow-xl shadow-yellow-500/30 flex items-center justify-center">
                        <div className="h-6 w-6 rounded-lg bg-white/90" />
                    </div>
                </div>
            </div>
        ),
    },
];

export default function SelectedWorkSection() {
    return (
        <Section className="border-t border-border-subtle/30 bg-gradient-to-b from-background to-muted/20 pt-28 pb-40 md:pt-32 md:pb-44">
            <Container>
                <div className="space-y-16">
                    <FadeInSection className="flex justify-between items-end">
                        <div className="space-y-4">
                            <h2 className="text-heading font-semibold text-foreground">
                                Selected Systems
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                A few recent systems we designed and shipped.
                            </p>
                        </div>
                        <Link href="/work" className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                            View all work <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </FadeInSection>

                    <div className="grid gap-10">
                        {workItems.map((item, index) => (
                            <Link href="/work" key={item.title} className="group block">
                                <FadeInSection delay={0.05 * index}>
                                    <div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-border-subtle/60 bg-surface p-3 hover:border-border-subtle/80 hover:shadow-soft transition-all duration-500">

                                        {/* Visual Half */}
                                        <div className="aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-xl border border-border-subtle/60 bg-white shadow-xl relative">
                                            {item.visual}
                                        </div>

                                        {/* Content Half */}
                                        <div className="p-6 md:p-10 space-y-6">
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm font-medium text-foreground/75">
                                                    {item.outcome}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-flex items-center rounded-full border border-border-subtle/70 bg-muted/30 px-3 py-1.5 text-xs font-medium text-foreground/70"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </FadeInSection>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center md:hidden pt-4">
                        <Link href="/work" className="flex items-center gap-2 text-sm font-medium text-foreground">
                            View all work <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
