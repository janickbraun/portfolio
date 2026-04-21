import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";

interface ProjectCardProps {
  project: Project;
  delay?: number;
  immediate?: boolean;
}

export function ProjectCard({ project, delay = 0, immediate = false }: ProjectCardProps) {
  const isSoftware = project.category === "software";
  const linkHref = project.slug ? `/projects/${project.slug}` : project.url || "#";
  const isExternal = false; // Always routing internally first now

  return (
    <FadeIn delay={delay} immediate={immediate} className="h-full">
      <div className="group relative flex h-full flex-col items-start rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-5 transition-all hover:bg-zinc-900 shadow-sm overflow-hidden text-left">
        <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl bg-zinc-800 mb-5">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 85vw, 360px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-zinc-950/20 transition-colors group-hover:bg-transparent" />
        </div>

        <div className="flex flex-col flex-1 gap-3 w-full overflow-hidden">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-zinc-100 text-lg leading-tight line-clamp-1">{project.title}</h3>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 overflow-hidden text-ellipsis">{project.description}</p>
          
          {project.techStack && (
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-zinc-800/50 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

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
      </div>
    </FadeIn>
  );
}
