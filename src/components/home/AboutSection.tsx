"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { Sparkles, MapPin, Briefcase, Mail } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-zinc-900/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header Row: Text Left, Image Right */}
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-between gap-8 mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                About Me
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 leading-tight">
                Business Informatics Student & Founder.
              </h2>
            </div>
            
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-full overflow-hidden border border-zinc-800 shadow-xl">
              <Image
                src="/images/janick.jpg"
                alt="Janick Braun"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </FadeIn>

        {/* Description Text with integrated link */}
        <FadeIn delay={0.2}>
          <div className="space-y-8">
            <p className="text-base md:text-lg leading-relaxed text-zinc-400">
              {personalInfo.aboutSnippet}{" "}
              <Link 
                href="/hobbies" 
                className="text-zinc-300 underline underline-offset-2 transition-colors hover:text-zinc-50"
              >
                Explore my hobbies.
              </Link>
            </p>

            {/* Compact Info Box */}
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-zinc-500 uppercase tracking-widest font-bold text-[9px]">Location</span>
                  <span className="text-zinc-100 font-medium text-sm">{personalInfo.location}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border-t border-zinc-800 pt-6 md:border-t-0 md:pt-0 md:pl-8 md:border-l">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-zinc-500 uppercase tracking-widest font-bold text-[9px]">Current Role</span>
                  <span className="text-zinc-100 font-medium text-sm">{personalInfo.role}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-zinc-950 transition-all hover:bg-primary-hover hover:scale-[1.02] shadow-lg shadow-primary/10"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
