import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hobbies } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowLeft, ExternalLink, Code2, Film, Bike, Waves, Mountain, Target, Waves as SwimIcon, Clapperboard } from "lucide-react";
import { Letterboxd } from "@/components/icons";

interface HobbyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

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
  "Cinema / Movies": Clapperboard,
};

export async function generateMetadata({ params }: HobbyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hobby = hobbies.find((h) => h.slug === slug);
  
  if (!hobby) return { title: "Hobby Not Found" };

  return {
    title: `${hobby.name} | Hobbies`,
    description: hobby.description,
  };
}

export default async function HobbyPage({ params }: HobbyPageProps) {
  const { slug } = await params;
  const hobby = hobbies.find((h) => h.slug === slug);

  if (!hobby) {
    notFound();
  }

  const Icon = hobbyIcons[hobby.name] || Target;
  const isCinema = slug === "cinema";

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
      <FadeIn>
        <Link
          href="/hobbies"
          className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Hobbies
        </Link>
      </FadeIn>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn direction="left" delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-primary italic uppercase tracking-widest leading-none">
                  {hobby.category}
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mt-1">
                  {hobby.name}
                </h1>
              </div>
            </div>

            <p className="text-xl text-zinc-400 leading-relaxed font-medium">
              {hobby.description}
            </p>

            {hobby.longDescription && (
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {hobby.longDescription}
                </p>
              </div>
            )}

            {hobby.details && (
              <div className="flex flex-wrap gap-2 py-4 border-y border-zinc-800/50">
                {hobby.details.map((detail) => (
                  <span
                    key={detail}
                    className="inline-flex items-center rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            )}

            {hobby.externalLink && (
              <a
                href={hobby.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-primary px-8 text-sm font-bold text-zinc-950 transition-all hover:bg-primary-hover hover:scale-[1.02] shadow-lg shadow-primary/20"
              >
                {isCinema ? (
                  <>
                    <Letterboxd className="h-5 w-5" />
                    Follow me on Letterboxd
                  </>
                ) : (
                  <>
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </>
                )}
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.2}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <Image
              src={hobby.image}
              alt={hobby.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
          </div>
        </FadeIn>
      </div>

      {/* Placeholder for future expansion: Video Gallery / More Text */}
      <FadeIn delay={0.3}>
        <div className="mt-20 rounded-3xl border border-zinc-800/50 bg-zinc-900/30 p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-zinc-50 mb-4 italic">More coming soon...</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            This section will soon be filled with more detailed stories, 
            behind-the-scenes footage, and a gallery of my favorite moments 
            related to {hobby.name.toLowerCase()}.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
