import { Metadata } from "next";
import { cvItems } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Briefcase, GraduationCap, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "My professional and educational journey.",
};

export default function CVPage() {
  const experiences = cvItems.filter((i) => i.type === "experience");
  const education = cvItems.filter((i) => i.type === "education");
  const volunteer = cvItems.filter((i) => i.type === "volunteer");

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 md:py-24">
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mb-6">
          Resume
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mb-24">
          A summary of my roles and involvements across a professional timeline.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-24">
        {/* Experience Section */}
        <section>
          <FadeIn delay={0.1} className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <Briefcase className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-100">Professional Experience</h2>
          </FadeIn>
          <div className="relative pl-8 md:pl-28">
            {experiences.map((item, index) => (
              <TimelineItem key={item.id} item={item} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <FadeIn delay={0.1} className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-100">Education</h2>
          </FadeIn>
          <div className="relative pl-8 md:pl-28">
            {education.map((item, index) => (
              <TimelineItem key={item.id} item={item} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>

        {/* Volunteer Section */}
        <section>
          <FadeIn delay={0.1} className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-100">Volunteer Work</h2>
          </FadeIn>
          <div className="relative pl-8 md:pl-28">
            {volunteer.map((item, index) => (
              <TimelineItem key={item.id} item={item} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
