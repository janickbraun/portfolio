"use client";

import { useRef, useEffect, useState } from "react";
import { Project } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSliderProps {
  projects: Project[];
}

export function ProjectSlider({ projects }: ProjectSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Multiple copies of projects for a truly infinite feel
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects, ...projects];

  // Set initial scroll position
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollLeft = slider.scrollWidth / 2.5; 
    }
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isHovered) return;

    let animationFrameId: number;
    let lastTime = 0;
    const speed = 0.4;

    const scroll = (time: number) => {
      if (lastTime !== 0) {
        const deltaTime = time - lastTime;
        slider.scrollLeft += speed * (deltaTime / 16);

        const oneFifth = slider.scrollWidth / 5;
        if (slider.scrollLeft >= oneFifth * 4) {
          slider.scrollLeft = oneFifth * 2;
        } else if (slider.scrollLeft <= oneFifth) {
          slider.scrollLeft = oneFifth * 3;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, projects.length]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 360;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 360;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Dynamic padding calculation to align with max-w-5xl container (1024px)
  const sidePadding = "max(1.5rem, (100vw - 1024px) / 2 + 1.5rem)";

  return (
    <div 
      className="relative w-full group/slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-6 md:left-[calc((100vw-1024px)/2+2rem)] top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary transition-all opacity-0 group-hover/slider:opacity-100 shadow-2xl"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-6 md:right-[calc((100vw-1024px)/2+2rem)] top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary transition-all opacity-0 group-hover/slider:opacity-100 shadow-2xl"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 py-6 hide-scrollbar touch-pan-y" 
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          paddingLeft: sidePadding,
          paddingRight: sidePadding
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <div 
            key={`${project.title}-${index}`} 
            className="w-[85vw] sm:w-[320px] md:w-[360px] shrink-0 text-left transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="h-[340px] sm:h-[380px]">
              <ProjectCard project={project} delay={0} />
            </div>
          </div>
        ))}
      </div>
      
      {/* Edge Gradients - Aligned with container edges */}
      <div className="absolute top-0 left-0 bottom-8 w-[20vw] bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10 [mask-image:linear-gradient(to_right,black,transparent)]" />
      <div className="absolute top-0 right-0 bottom-8 w-[20vw] bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10 [mask-image:linear-gradient(to_left,black,transparent)]" />
    </div>
  );
}
