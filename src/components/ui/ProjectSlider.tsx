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
  
  // Track interaction states without full re-renders
  const isHoveredOrTouched = useRef(false);
  
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
    if (!slider) return;

    let animationFrameId: number;
    let lastTime = 0;
    const speed = 0.5;
    let exactScrollLeft = slider.scrollLeft;
    let pauseUntil = 0;

    const scroll = (time: number) => {
      // Sync if user scrolled manually or smooth scroll from buttons
      if (Math.abs(slider.scrollLeft - exactScrollLeft) > 2) {
        exactScrollLeft = slider.scrollLeft;
        pauseUntil = time + 3000; // Pause for 3s after interaction
      }

      if (!isHoveredOrTouched.current && time >= pauseUntil) {
        if (lastTime !== 0) {
          const deltaTime = time - lastTime;
          exactScrollLeft += speed * (deltaTime / 16);
          slider.scrollLeft = exactScrollLeft;

          const oneFifth = slider.scrollWidth / 5;
          if (slider.scrollLeft >= oneFifth * 4) {
            exactScrollLeft = oneFifth * 2;
            slider.scrollLeft = exactScrollLeft;
          } else if (slider.scrollLeft <= oneFifth) {
            exactScrollLeft = oneFifth * 3;
            slider.scrollLeft = exactScrollLeft;
          }
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [projects.length]);

  const scrollToCard = (direction: 'left' | 'right') => {
    const slider = sliderRef.current;
    if (!slider) return;

    const viewportCenter = slider.scrollLeft + slider.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    const cards = Array.from(slider.children) as HTMLElement[];
    if (cards.length === 0) return;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    let targetIndex = direction === 'left' ? closestIndex - 1 : closestIndex + 1;
    targetIndex = Math.max(0, Math.min(targetIndex, cards.length - 1));

    const targetCard = cards[targetIndex];
    const targetScrollLeft = targetCard.offsetLeft + targetCard.clientWidth / 2 - slider.clientWidth / 2;

    slider.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
  };

  const scrollLeft = () => scrollToCard('left');
  const scrollRight = () => scrollToCard('right');

  // Dynamic padding calculation to align with max-w-5xl container (1024px)
  const sidePadding = "max(1.5rem, (100vw - 1024px) / 2 + 1.5rem)";

  return (
    <div 
      className="relative w-full group/slider"
      onMouseEnter={() => isHoveredOrTouched.current = true}
      onMouseLeave={() => isHoveredOrTouched.current = false}
      onTouchStart={() => isHoveredOrTouched.current = true}
      onTouchEnd={() => isHoveredOrTouched.current = false}
      onTouchCancel={() => isHoveredOrTouched.current = false}
    >
      {/* Navigation Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute cursor-pointer left-2 md:left-[max(1rem,calc((100vw-1024px)/2-4rem))] top-1/2 -translate-y-1/2 z-20 h-8 w-8 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary transition-all opacity-100 md:opacity-0 group-hover/slider:opacity-100 shadow-2xl"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute cursor-pointer right-2 md:right-[max(1rem,calc((100vw-1024px)/2-4rem))] top-1/2 -translate-y-1/2 z-20 h-8 w-8 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-zinc-400 hover:text-primary hover:border-primary transition-all opacity-100 md:opacity-0 group-hover/slider:opacity-100 shadow-2xl"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      {/* Slider Container */}
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 py-6 hide-scrollbar" 
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
