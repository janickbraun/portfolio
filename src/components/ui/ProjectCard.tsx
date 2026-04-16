import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const isSoftware = project.category === "software";
  const linkHref = isSoftware && project.slug ? `/projects/${project.slug}` : project.url || "#";
  const isExternal = !isSoftware && !!project.url;

  return (
    <FadeIn delay={delay} className="group relative flex flex-col items-start justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-6 transition-all hover:bg-zinc-900">
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-zinc-800 mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-zinc-950/20 transition-colors group-hover:bg-transparent" />
      </div>

      <div className="flex-1 space-y-3 w-full">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-zinc-100 text-xl">{project.title}</h3>
          {isSoftware && project.slug ? (
            <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-primary" />
          ) : isExternal ? (
            <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-primary" />
          ) : null}
        </div>
        <p className="text-zinc-400 text-sm line-clamp-2">{project.description}</p>
      </div>

      {project.techStack && (
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-zinc-800/50 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {linkHref !== "#" && (
        <Link
          href={linkHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">View {project.title}</span>
        </Link>
      )}
    </FadeIn>
  );
}
