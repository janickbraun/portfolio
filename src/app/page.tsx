import Image from "next/image";
import Link from "next/link";
import { personalInfo, projects } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArrowRight } from "lucide-react";
import { Github } from "@/components/icons";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const githubUrl = personalInfo.socials.find((s) => s.name === "GitHub")?.url;

  return (
    <div className="flex flex-col gap-24 pb-24 md:gap-32 md:pb-32">
      {/* Hero Section */}
      <section className="container mx-auto max-w-5xl px-6 pt-12 md:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <FadeIn className="flex flex-col gap-6" delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl text-balance">
              {personalInfo.bio}
            </h1>
            <p className="text-lg text-zinc-400 max-w-xl text-balance">
              Leidenschaftlicher Fullstack-Entwickler mit einem Fokus auf exzellente, performance-orientierte Webanwendungen.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-50 px-8 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Zu den Projekten
                <ArrowRight className="h-4 w-4" />
              </Link>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-800 bg-transparent px-8 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 border-zinc-700/50"
                >
                  <Github className="h-4 w-4" />
                  GitHub Profil
                </a>
              )}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} direction="none" className="relative aspect-square w-full max-w-md mx-auto lg:ml-auto overflow-hidden rounded-3xl bg-zinc-900">
            {/* Placeholder Image (via Unsplash) */}
            <Image
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
              alt="Janick Braun Portrait"
              fill
              className="object-cover"
              priority
            />
          </FadeIn>
        </div>
      </section>

      {/* About Snippet */}
      <section className="container mx-auto max-w-3xl px-6 text-center">
        <FadeIn delay={0.2} direction="up">
          <h2 className="text-sm font-semibold tracking-wider text-zinc-500 uppercase mb-4">
            Über mich
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-zinc-300 text-balance">
            "{personalInfo.aboutSnippet}"
          </p>
        </FadeIn>
      </section>

      {/* Highlighted Projects */}
      <section className="container mx-auto max-w-5xl px-6">
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
              Highlight Projekte
            </h2>
            <Link
              href="/projects"
              className="group hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
            >
              Alle ansehen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={0.2 + index * 0.1} />
          ))}
        </div>
        
        <div className="mt-10 flex sm:hidden justify-center">
          <Link
            href="/projects"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-zinc-800 px-8 text-sm font-medium text-zinc-300 hover:bg-zinc-900 transition-colors"
          >
            Alle ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
