import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12 text-zinc-400">
      <div className="container mx-auto max-w-5xl px-6 grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-3">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <Link href="/" className="text-lg font-bold text-zinc-50 group">
            {personalInfo.name}
            <span className="text-primary transition-colors group-hover:text-cyan-300">.</span>
          </Link>
          <p className="text-sm max-w-xs">
            Business Informatics student & Founder from Munich.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-zinc-50">Navigation</h3>
          <Link href="/" className="text-sm hover:text-zinc-50 transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-sm hover:text-zinc-50 transition-colors">
            Projects
          </Link>
          <Link href="/cv" className="text-sm hover:text-zinc-50 transition-colors">
            Resume
          </Link>
          <Link href="/hobbies" className="text-sm hover:text-zinc-50 transition-colors">
            Hobbies
          </Link>
        </div>

        {/* Legal & Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-zinc-50">Legal</h3>
          <Link href="/imprint" className="text-sm hover:text-zinc-50 transition-colors">
            Imprint
          </Link>
          <Link href="/privacy-policy" className="text-sm hover:text-zinc-50 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-6 mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs">
          © {new Date().getFullYear()} Janick Braun UG (haftungsbeschränkt). All rights reserved.
        </p>
        <div className="flex gap-6">
          {personalInfo.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-50 transition-colors"
                aria-label={social.name}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
