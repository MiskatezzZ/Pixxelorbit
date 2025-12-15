"use client";

import StackIcon from "tech-stack-icons";

const techStack = [
  "nextjs",
  "react",
  "typescript",
  "tailwindcss",
  "nodejs",
  "postgresql",
  "figma",
  "vercel",
] as const;

export default function TechStackRow() {
  return (
    <div className="w-full mt-6 mb-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Built with modern, production-ready tools
        </p>
        <div className="mt-3 flex w-full items-center justify-center gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap">
          {techStack.map((name) => (
            <div
              key={name}
              className="flex shrink-0 items-center justify-center"
            >
              <StackIcon
                name={name}
                className="h-6 sm:h-7 w-auto opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
