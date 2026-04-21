import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, personalInfo } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { Github, YouTube } from "@/components/icons";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { YouTubePlayer } from "@/components/ui/YouTubePlayer";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isVideo = !!project.youtubeId;

  return (
    <div className="min-h-screen bg-zinc-950 pt-20 pb-20">
      <div className="mx-auto px-6 max-w-5xl">
        {/* Back Button Container */}
        <div className={isVideo ? "max-w-3xl mx-auto w-full mb-4" : "mb-4"}>
          <FadeIn delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to projects
            </Link>
          </FadeIn>
        </div>

        <div className={isVideo ? "flex flex-col gap-12" : "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"}>
          {/* Project Content */}
          <div className={isVideo ? "max-w-3xl mx-auto w-full flex flex-col gap-8" : "flex flex-col gap-8"}>
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full w-fit">
                  {project.category}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50">
                  {project.title}
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-6">
                <p className="text-xl text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
                  <p className="leading-relaxed">
                    {project.longDescription || "Full case study coming soon."}
                  </p>
                </div>
              </div>
            </FadeIn>

            {project.techStack && (
              <FadeIn delay={0.4}>
                <div className="flex flex-col gap-4">
                  <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-900 border border-zinc-800 px-4 py-1.5 text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Video Player (Middle if Video) */}
            {isVideo && (
              <FadeIn delay={0.5} className="w-full pt-4">
                <YouTubePlayer videoId={project.youtubeId!} thumbnail={project.image} />
              </FadeIn>
            )}

            <FadeIn delay={isVideo ? 0.6 : 0.5} className="pt-8 text-center lg:text-left">
              <div className={`flex flex-wrap gap-4 ${isVideo ? 'justify-center' : ''}`}>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-zinc-950 transition-all hover:bg-primary-hover hover:scale-[1.02]"
                  >
                    {isVideo ? "Watch on YouTube" : "Visit Live Project"}
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                
                {isVideo && (
                   <a
                    href={personalInfo.socials.find(s => s.name === "YouTube")?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-8 text-sm font-bold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-zinc-50"
                  >
                    <YouTube className="h-5 w-5" />
                    My YouTube Channel
                  </a>
                )}

                {project.category === "software" && (
                   <a
                    href="https://github.com/janickbraun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-8 text-sm font-bold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-zinc-50"
                  >
                    <Github className="h-5 w-5" />
                    Source Code
                  </a>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Project Media (Standard Side-by-Side if No Video) */}
          {!isVideo && (
            <FadeIn delay={0.2} direction="up">
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}
