"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="container mx-auto max-w-5xl px-6 relative z-10 -mt-12 md:-mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Text Content */}
          <div className="flex flex-col items-start text-left flex-1 order-2 md:order-1">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 leading-[1.1] mb-6 xl:-ml-1">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Janick</span>.
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed">
                Fullstack Developer & Founder based in Munich. I build digital products and focus on clean, high-performance web and app experiences.
              </p>
              
              <div className="flex flex-row items-center justify-start gap-3 w-full">
                <Link
                  href="/projects"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 sm:px-8 text-sm font-bold text-zinc-950 transition-all hover:bg-primary-hover hover:scale-[1.02] shadow-lg shadow-primary/20"
                >
                  See my work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <Link
                  href="/cv"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-5 sm:px-8 text-sm font-bold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-zinc-50 hover:scale-[1.02]"
                >
                  <FileText className="h-4 w-4" />
                  My CV
                </Link>
              </div>
            </FadeIn>
          </div>
          
          {/* Profile Image */}
          <FadeIn delay={0.2} direction="up" className="relative flex-shrink-0 order-1 md:order-2">
            <div className="relative h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[350px] lg:w-[350px]">
              {/* Image Frame */}
              <div className="absolute inset-4 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm -z-10 transition-transform" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-800">
                <Image
                  src="/images/me/profile.jpg" // User should place their image here
                  alt="Janick Braun"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
