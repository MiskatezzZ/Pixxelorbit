"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import TechStackRow from "@/components/TechStackRow";
import { Safari } from "@/components/ui/Safari";
import { Play } from "lucide-react";

export default function VideoPreviewSection() {
  return (
    <FadeInSection className="mx-auto mt-14 w-full max-w-5xl">
      <div className="w-full">
        <div className="relative w-full group">
          <Safari
            className="w-full transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-3xl group-hover:shadow-blue-500/15"
            url="https://pixxelorbit.com"
          />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center border border-white/60 group-hover:scale-110 transition-transform duration-300">
                <Play className="h-9 w-9 md:h-11 md:w-11 text-blue-600 fill-blue-600 ml-1" />
              </div>
              <div
                className="absolute inset-0 rounded-full bg-blue-500/25 animate-ping"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>
        </div>
        <TechStackRow />
      </div>
    </FadeInSection>
  );
}
