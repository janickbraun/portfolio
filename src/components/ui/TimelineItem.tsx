import { CVItem } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";

interface TimelineItemProps {
  item: CVItem;
  delay?: number;
}

export function TimelineItem({ item, delay = 0 }: TimelineItemProps) {
  return (
    <FadeIn delay={delay} className="relative pl-8 md:pl-0">
      <div className="md:grid md:grid-cols-4 md:gap-8">
        <div className="hidden md:block md:col-span-1 text-zinc-400 font-medium text-sm mt-1">
          {item.date}
        </div>
        <div className="md:col-span-3 relative pb-12">
          {/* Mobile date line indicator */}
          <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center md:hidden">
            <span className="h-2 w-2 rounded-full bg-zinc-600 ring-4 ring-zinc-950" />
          </span>
          <span className="absolute -left-[31px] top-7 bottom-0 w-[2px] bg-zinc-800 md:hidden" />

          {/* Desktop dot indicator */}
          <span className="hidden md:flex absolute -left-11 top-1.5 h-3 w-3 items-center justify-center rounded-full bg-zinc-600 ring-4 ring-zinc-950" />
          <span className="hidden md:block absolute -left-10 top-6 bottom-0 w-[2px] bg-zinc-800" />

          {/* Mobile date */}
          <div className="text-zinc-400 font-medium text-sm mb-2 md:hidden">
            {item.date}
          </div>

          <h3 className="text-xl font-bold text-zinc-50">{item.role}</h3>
          <h4 className="text-lg font-medium text-zinc-300 mb-4">{item.organization}</h4>
          <p className="text-zinc-400 leading-relaxed text-balance">
            {item.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
