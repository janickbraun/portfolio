import { Metadata } from "next";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of software projects, agency work, and more.",
};

export default function ProjectsPage() {
  const softwareProjects = projects.filter((p) => p.category === "software");
  const agencyProjects = projects.filter((p) => p.category === "agency");
  const nonSoftwareProjects = projects.filter((p) => p.category === "non-software");

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
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-primary/20 pb-4">
              Software Engineering
            </h2>
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
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-primary/20 pb-4">
              Agency (Grovider)
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agencyProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>

        {/* Non-Software / Handwerk */}
        <section>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-primary/20 pb-4">
              Craft & Miscellaneous
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nonSoftwareProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={0.2 + index * 0.1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
