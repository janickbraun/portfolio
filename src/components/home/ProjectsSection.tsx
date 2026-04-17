"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectSlider } from "@/components/ui/ProjectSlider";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="work" className="py-20 w-full relative">
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <FadeIn className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl text-center md:text-left">
            Selected Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl text-center md:text-left">
            A selection of my recent work in software engineering, agency services, and creative storytelling.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.2} direction="up" className="w-full relative z-10 flex flex-col items-center">
        <ProjectSlider projects={projects} />
        
        <Link
          href="/projects"
          className="group inline-flex h-11 items-center justify-center gap-2 mt-12 rounded-full bg-primary px-8 text-sm font-bold text-zinc-950 transition-all hover:bg-primary-hover hover:scale-105 shadow-lg shadow-primary/20"
        >
          See all my work
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </FadeIn>
    </section>
  );
}
