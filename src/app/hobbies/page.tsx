import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { hobbies } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { ExternalLink, Code2, Film, Bike, Waves, Mountain, Trophy, Target, Waves as SwimIcon, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hobbies",
  description: "What I do when I'm not coding. Exploring sports, tech, and cinema.",
};

const hobbyIcons: Record<string, any> = {
  Skating: Bike,
  Surfing: Waves,
  Wakeboarding: Target,
  Snowboarding: Mountain,
  Golfing: Target,
  Swimming: SwimIcon,
  Hiking: Mountain,
  Programming: Code2,
  "Video Editing": Film,
  "Cinema / Movies": Film,
};

export default function HobbiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-24">
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mb-6">
          Hobbies & Interests
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mb-16">
          When I'm not building software or running my agency, I'm usually outside, 
          on a board, or deep in a creative project. Here's a glimpse into my life 
          beyond the screen.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby, index) => (
          <FadeIn
            key={hobby.name}
            delay={0.1 + index * 0.05}
            className="group relative"
          >
            <Link 
              href={`/hobbies/${hobby.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all hover:bg-zinc-900 hover:border-zinc-700/50 hover:scale-[1.02]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={hobby.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center rounded-full bg-zinc-950/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-zinc-300 uppercase tracking-widest border border-white/5">
                    {hobby.category}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-primary/20 backdrop-blur-md text-primary group-hover:bg-primary group-hover:text-zinc-950 transition-colors">
                    {(() => {
                      const Icon = hobbyIcons[hobby.name] || Target;
                      return <Icon className="h-4 w-4" />;
                    })()}
                  </div>
                  <h3 className="font-bold text-zinc-50 tracking-wide uppercase text-sm">
                    {hobby.name}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {hobby.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  {hobby.details && (
                    <div className="flex flex-wrap gap-2">
                      {hobby.details.map((detail) => (
                        <span
                          key={detail}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary italic"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
