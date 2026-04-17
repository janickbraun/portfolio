import Link from "next/link";
import { Github, Linkedin } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-50 transition-colors hover:text-primary"
        >
          {personalInfo.name}
          <span className="text-primary hidden sm:inline ml-0.5">.</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
          >
            Projects
          </Link>
          <Link
            href="/cv"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
          >
            Resume
          </Link>
          <Link
            href="/hobbies"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
          >
            Hobbies
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-bold text-zinc-950 transition-all hover:bg-primary-hover hover:scale-[1.02]"
          >
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
}
