"use client";

import { cvItems, personalInfo } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { Briefcase, GraduationCap, HeartHandshake } from "lucide-react";
import { Linkedin } from "@/components/icons";
import { TimelineItem } from "@/components/ui/TimelineItem";

interface ResumeListProps {
  title?: string;
  subtitle?: string;
  isHeaderVisible?: boolean;
}

export function ResumeList({ 
  title = "Experience & Education", 
  subtitle = "My professional journey and academic background.",
  isHeaderVisible = true 
}: ResumeListProps) {
  const experiences = cvItems.filter((i) => i.type === "experience");
  const education = cvItems.filter((i) => i.type === "education");
  const volunteer = cvItems.filter((i) => i.type === "volunteer");
  
  const linkedinUrl = personalInfo.socials.find(s => s.name === "LinkedIn")?.url;

  return (
    <div className="flex flex-col gap-16">
      {isHeaderVisible && (
         <FadeIn>
            <div className="flex flex-col gap-4 mb-2 text-left">
               <h2 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
                  {title}
               </h2>
               <p className="text-lg text-zinc-400 max-w-2xl">{subtitle}</p>
            </div>
         </FadeIn>
      )}

      <div className="flex flex-col gap-24">
        {/* Experience Section */}
        <section>
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-zinc-700 pb-4">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-100 uppercase tracking-widest text-sm">Professional Experience</h2>
              </div>
              
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-5 py-2 text-sm font-bold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-zinc-50 hover:scale-[1.02]"
                >
                  <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
                  View on LinkedIn
                </a>
              )}
            </div>
          </FadeIn>
          <div className="relative pl-0 md:pl-28">
            {experiences.map((item, index) => (
              <TimelineItem key={item.id} item={item} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <FadeIn delay={0.1} className="flex items-center gap-4 mb-10 border-b border-zinc-700 pb-4">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-100 uppercase tracking-widest text-sm">Education</h2>
          </FadeIn>
          <div className="relative pl-0 md:pl-28">
            {education.map((item, index) => (
              <TimelineItem key={item.id} item={item} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>

        {/* Volunteer Section */}
        <section>
          <FadeIn delay={0.1} className="flex items-center gap-4 mb-10 border-b border-zinc-700 pb-4">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-100 uppercase tracking-widest text-sm">Engagement</h2>
          </FadeIn>
          <div className="relative pl-0 md:pl-28">
            {volunteer.map((item, index) => (
              <TimelineItem key={item.id} item={item} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
