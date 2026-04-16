import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return { title: "Projekt nicht gefunden" };
  }
  
  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.category === "software" && p.slug)
    .map((p) => ({
      slug: p.slug!,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug && p.category === "software");

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl px-6 py-12 md:py-24">
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Übersicht
        </Link>
      </FadeIn>

      <header className="mb-12">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400">
            {project.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 flex flex-wrap items-center gap-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-zinc-50 px-6 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              Projekt besuchen
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </FadeIn>
      </header>

      <FadeIn delay={0.3} className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50 mb-16">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </FadeIn>

      <FadeIn delay={0.4} className="prose prose-invert prose-zinc max-w-none">
        <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
          Über das Projekt
        </h2>
        <p className="text-zinc-300 leading-relaxed text-lg mb-10">
          {project.longDescription}
        </p>

        {project.techStack && (
          <>
            <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </FadeIn>
    </article>
  );
}
