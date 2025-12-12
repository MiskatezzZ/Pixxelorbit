"use client";

import Link from "next/link";
import StackIcon from "tech-stack-icons";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeInSection from "@/components/ui/FadeInSection";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
    return (
        <Section
            id="hero"
            className="pt-[90px] pb-32 md:pb-40"
        >
            <Container className="max-w-7xl">
                {/* Centered Vertical Stack with Premium Spacing */}
                <div className="flex flex-col items-center text-center">

                    {/* Main Headline - Reduced Size, Wider Max-Width */}
                    <FadeInSection className="max-w-[760px]">
                        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-bold leading-[1.06] tracking-tight text-black">
                            Websites that convert.<br />
                            Workflows that run.<br />
                            Growth that sticks.
                        </h1>
                    </FadeInSection>

                    {/* 24px Gap */}
                    <div className="h-6" />

                    {/* Secondary Headline */}
                    <FadeInSection delay={0.1} className="max-w-3xl">
                        <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-medium leading-[1.15] text-black/85">
                            We design, automate, and tune the system you actually want to own.
                        </h2>
                    </FadeInSection>

                    {/* 20px Gap */}
                    <div className="h-5" />

                    {/* Dash Separator */}
                    <FadeInSection delay={0.15}>
                        <div className="h-[1px] w-11 bg-black/15" />
                    </FadeInSection>

                    {/* 20px Gap */}
                    <div className="h-5" />

                    {/* Subline */}
                    <FadeInSection delay={0.2} className="max-w-2xl">
                        <p className="text-lg md:text-xl font-normal leading-[1.4] text-black/60">
                            Your website, workflows, and growth — finally in sync.
                        </p>
                    </FadeInSection>

                    {/* 28px Gap */}
                    <div className="h-7" />

                    {/* CTA Block - Horizontal Layout */}
                    <FadeInSection delay={0.25} className="flex items-center justify-center gap-5">
                        <Link href="/contact">
                            <Button className="h-14 px-10 text-base bg-[#1E63F9] hover:bg-[#1E63F9]/90 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5">
                                Book intro call
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <p className="text-sm text-[#6B7280]">
                            30 min clarity call · No sales pressure
                        </p>
                    </FadeInSection>

                    {/* 48px Gap */}
                    <div className="h-12" />

                    {/* Tech Stack Row - Larger Icons with Subtle Color */}
                    <FadeInSection delay={0.3} className="w-full">
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {[
                                { name: "nextjs", label: "Next.js" },
                                { name: "reactjs", label: "React" },
                                { name: "nodejs", label: "Node.js" },
                                { name: "tailwindcss", label: "Tailwind CSS" },
                                { name: "framer", label: "Motion" },
                                { name: "figma", label: "Figma" },
                                { name: "sanity", label: "Sanity" },
                                { name: "vercel", label: "Vercel" },
                                { name: "aws", label: "AWS" },
                            ].map((tech, i) => (
                                <div
                                    key={tech.name}
                                    className="opacity-80 hover:opacity-100 transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        animation: `fadeIn 0.6s ease-out ${0.4 + i * 0.08}s both`
                                    }}
                                    title={tech.label}
                                >
                                    <StackIcon name={tech.name} className="h-9" />
                                </div>
                            ))}
                            <div
                                className="opacity-80 hover:opacity-100 transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    animation: 'fadeIn 0.6s ease-out 1.1s both'
                                }}
                            >
                                <span className="text-base font-medium tracking-[0.1em] text-black/50 uppercase">
                                    Motion
                                </span>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* 40px Gap */}
                    <div className="h-10" />

                    {/* Video Preview Container */}
                    <FadeInSection delay={0.35} className="w-full max-w-5xl">
                        <div className="space-y-4">
                            <div className="relative aspect-video w-full rounded-2xl border border-white/25 bg-gradient-to-br from-white/70 via-white/50 to-blue-50/50 shadow-2xl shadow-blue-500/8 backdrop-blur-lg overflow-hidden group transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/15 hover:-translate-y-1">

                                {/* Inner shadow for depth */}
                                <div className="absolute inset-0 shadow-inner" />

                                {/* Ambient Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] via-transparent to-purple-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Subtle Grid */}
                                <div className="absolute inset-0 opacity-[0.02]" style={{
                                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }} />

                                {/* Center Content - Circular Play Button */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="relative">
                                        <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center border border-white/60 group-hover:scale-110 transition-transform duration-300">
                                            <Play className="h-9 w-9 md:h-11 md:w-11 text-blue-600 fill-blue-600 ml-1" />
                                        </div>
                                        {/* Pulse Animation */}
                                        <div className="absolute inset-0 rounded-full bg-blue-500/25 animate-ping" style={{ animationDuration: '3s' }} />
                                    </div>
                                </div>

                                {/* Corner Decorations */}
                                <div className="absolute top-6 left-6 h-14 w-14 border-l border-t border-white/15 rounded-tl-xl" />
                                <div className="absolute bottom-6 right-6 h-14 w-14 border-r border-b border-white/15 rounded-br-xl" />
                            </div>

                            {/* Label - Small Caps */}
                            <p className="text-xs md:text-sm font-medium text-black/45 uppercase tracking-[0.12em]">
                                Workflow Preview
                            </p>
                        </div>
                    </FadeInSection>

                </div>
            </Container>

            {/* Animation Keyframes */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </Section>
    );
}
