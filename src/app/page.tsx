import { Hero } from "@/components/home/Hero";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ResumeSection } from "@/components/home/ResumeSection";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden bg-zinc-950">
      {/* 1. Hero Section with Person & 2 CTAs */}
      <Hero />
      
      {/* 2. Project Slider Section (now below Hero) */}
      <ProjectsSection />
      
      {/* 3. About Me Section */}
      <AboutSection />
      
      {/* 4. CV/Resume Section */}
      <ResumeSection />
    </div>
  );
}
