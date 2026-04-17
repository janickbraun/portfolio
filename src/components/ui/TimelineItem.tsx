import { CVItem } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";

interface TimelineItemProps {
  item: CVItem;
  delay?: number;
}

export function TimelineItem({ item, delay = 0 }: TimelineItemProps) {
  return (
    <FadeIn delay={delay} className="relative mb-12 last:mb-0">
      <div className="md:grid md:grid-cols-4 md:gap-8">
        {/* Date for Desktop */}
        <div className="hidden md:block md:col-span-1 text-zinc-500 font-bold text-sm mt-1 text-right pr-4 italic">
          {item.date}
        </div>
        
        <div className="md:col-span-3 relative pb-2 pl-8 md:pl-0">
          {/* Vertical Timeline Line */}
          <span className="absolute left-[0px] md:-left-[33px] top-6 bottom-[-48px] w-px bg-zinc-800 last:hidden" />
          
          {/* Dot indicator */}
          <span className="absolute left-[-4px] md:-left-[37px] top-1.5 h-2 w-2 items-center justify-center rounded-full bg-primary ring-4 ring-zinc-950 z-10" />

          {/* Mobile date */}
          <div className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-2 md:hidden">
            {item.date}
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-bold text-zinc-50 leading-tight">{item.role}</h3>
            <span className="text-zinc-400 font-semibold text-base md:text-lg">{item.organization}</span>
          </div>
          
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base mt-4 max-w-2xl">
            {item.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
