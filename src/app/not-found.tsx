import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-center">
      <FadeIn delay={0.1}>
        <h1 className="text-8xl font-bold tracking-tighter text-zinc-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none -z-10 pointer-events-none">
          404
        </h1>
        
        <div className="relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl mb-4">
            Page not found
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-sm mx-auto">
            Sorry, we couldn't find the page you're looking for. Maybe it was moved or deleted?
          </p>
          
          <Link
            href="/"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 border border-zinc-800 px-8 text-sm font-bold text-zinc-50 transition-all hover:bg-zinc-800 hover:scale-[1.02]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
