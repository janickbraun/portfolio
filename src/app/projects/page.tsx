import { Metadata } from "next";
import { projects, personalInfo } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { Github } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of software projects, agency work, and more.",
};

export default function ProjectsPage() {
  const softwareProjects = projects.filter((p) => p.category === "software");
  const agencyProjects = projects.filter((p) => p.category === "agency");
  const shortFilmProjects = projects.filter((p) => p.category === "short-film");

  return (
    <div className="container mx-auto max-w-5xl px-6 py-12 md:py-24">
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mb-6">
          Projects
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mb-16">
          A showcase of my work. From scalable Next.js architectures and 
          multiplayer games to hands-on craftsmanship with my grandfather.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-24">
        {/* Software Category */}
        <section>
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-zinc-700 pb-4">
              <h2 className="text-2xl font-bold text-zinc-100">
                Software Engineering
              </h2>
              <a
                href={personalInfo.socials.find(s => s.name === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 border border-zinc-700 px-5 py-2 text-sm font-bold text-zinc-300 transition-all hover:bg-zinc-800 hover:text-zinc-50 hover:scale-[1.02]"
              >
                <Github className="h-5 w-5 transition-transform group-hover:scale-110" />
                More details on GitHub
              </a>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softwareProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>

        {/* Agency Category */}
        <section>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-700 pb-4">
              Agency (Grovider)
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agencyProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>

        {/* Short-Film Category */}
        <section>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-700 pb-4">
              Short-Films & Others
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shortFilmProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
