import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FadeInSection from "@/components/ui/FadeInSection";
import { X, Check, Zap } from "lucide-react";

export default function BeforeAfterSection() {
    return (
        <Section className="border-t border-border-subtle/30 bg-gradient-to-b from-background to-muted/20">
            <Container>
                <FadeInSection className="mb-20 text-center">
                    <h2 className="text-heading font-semibold text-foreground mb-4">
                        The transformation
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        From chaos to clarity in one system.
                    </p>
                </FadeInSection>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                    {/* BEFORE - High Contrast Chaos */}
                    <FadeInSection className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30">
                                <X className="h-5 w-5" />
                            </span>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">The Old Way</h3>
                                <p className="text-sm text-muted-foreground">Scattered & reactive</p>
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] rounded-2xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100/50 p-8 shadow-xl shadow-red-500/10">
                            {/* Chaotic disconnected boxes */}
                            <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-lg border-2 border-red-200 rotate-3 w-32">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-red-500" />
                                    <span className="text-xs font-semibold text-red-600">Manual Work</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1.5 bg-gray-200 rounded" />
                                    <div className="h-1.5 bg-gray-200 rounded w-2/3" />
                                </div>
                            </div>

                            <div className="absolute top-20 right-8 bg-white p-4 rounded-lg shadow-lg border-2 border-orange-200 -rotate-2 w-32">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                    <span className="text-xs font-semibold text-orange-600">Lost Data</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1.5 bg-gray-200 rounded" />
                                    <div className="h-1.5 bg-gray-200 rounded w-1/2" />
                                </div>
                            </div>

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg border-2 border-yellow-200 rotate-1 w-36">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                    <span className="text-xs font-semibold text-yellow-600">Disconnected</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-1.5 bg-gray-200 rounded" />
                                    <div className="h-1.5 bg-gray-200 rounded w-3/4" />
                                </div>
                            </div>

                            {/* Broken connection lines */}
                            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                                <line x1="30%" y1="30%" x2="60%" y2="50%" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                                <line x1="70%" y1="40%" x2="50%" y2="70%" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                            </svg>
                        </div>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 mt-0.5">
                                    <X className="h-3 w-3" />
                                </span>
                                <span className="text-foreground/80">Tools don&apos;t talk to each other</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 mt-0.5">
                                    <X className="h-3 w-3" />
                                </span>
                                <span className="text-foreground/80">Teams waste hours copying data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600 mt-0.5">
                                    <X className="h-3 w-3" />
                                </span>
                                <span className="text-foreground/80">Growth is unpredictable and stressful</span>
                            </li>
                        </ul>
                    </FadeInSection>

                    {/* AFTER - High Contrast System */}
                    <FadeInSection delay={0.2} className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
                                <Check className="h-5 w-5" />
                            </span>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">The System Way</h3>
                                <p className="text-sm text-muted-foreground">Connected & automated</p>
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-8 shadow-xl shadow-emerald-500/10 flex items-center justify-center">
                            {/* Unified system hub */}
                            <div className="relative">
                                {/* Central hub */}
                                <div className="relative z-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 shadow-2xl shadow-emerald-500/30 border-2 border-emerald-300">
                                    <div className="flex items-center justify-center h-16 w-16">
                                        <Zap className="h-8 w-8 text-white" />
                                        <div className="absolute inset-0 rounded-2xl bg-emerald-400 animate-ping opacity-20" />
                                    </div>
                                </div>

                                {/* Connected nodes */}
                                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white rounded-lg p-3 shadow-lg border border-emerald-200">
                                    <div className="text-xs font-semibold text-emerald-700">Website</div>
                                </div>
                                <div className="absolute top-1/2 -translate-y-1/2 -left-20 bg-white rounded-lg p-3 shadow-lg border border-emerald-200">
                                    <div className="text-xs font-semibold text-emerald-700">CRM</div>
                                </div>
                                <div className="absolute top-1/2 -translate-y-1/2 -right-20 bg-white rounded-lg p-3 shadow-lg border border-emerald-200">
                                    <div className="text-xs font-semibold text-emerald-700">Analytics</div>
                                </div>
                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-lg p-3 shadow-lg border border-emerald-200">
                                    <div className="text-xs font-semibold text-emerald-700">Email</div>
                                </div>

                                {/* Connection lines */}
                                <svg className="absolute inset-0" style={{ width: '200px', height: '200px', left: '-50px', top: '-50px', overflow: 'visible' }}>
                                    <line x1="100" y1="50" x2="100" y2="100" stroke="#10B981" strokeWidth="2" />
                                    <line x1="50" y1="100" x2="90" y2="100" stroke="#10B981" strokeWidth="2" />
                                    <line x1="110" y1="100" x2="150" y2="100" stroke="#10B981" strokeWidth="2" />
                                    <line x1="100" y1="110" x2="100" y2="150" stroke="#10B981" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                                    <Check className="h-3 w-3" />
                                </span>
                                <span className="font-medium text-foreground">One unified source of truth</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                                    <Check className="h-3 w-3" />
                                </span>
                                <span className="font-medium text-foreground">Background automations handle busywork</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                                    <Check className="h-3 w-3" />
                                </span>
                                <span className="font-medium text-foreground">Team focuses on high-leverage work</span>
                            </li>
                        </ul>
                    </FadeInSection>
                </div>
            </Container>
        </Section>
    );
}
