import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 py-12 text-zinc-400">
      <div className="container mx-auto max-w-5xl px-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-lg font-bold text-zinc-50">
            {personalInfo.name}
          </Link>
          <p className="text-sm">
            Wirtschaftsinformatiker & Gründer aus München.
            <br />
            Leidenschaft für exzellente digitale Produkte.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-zinc-50">Navigation</h3>
          <Link href="/" className="text-sm hover:text-zinc-50 transition-colors">
            Startseite
          </Link>
          <Link href="/projects" className="text-sm hover:text-zinc-50 transition-colors">
            Projekte
          </Link>
          <Link href="/cv" className="text-sm hover:text-zinc-50 transition-colors">
            Lebenslauf
          </Link>
        </div>

        {/* Legal & Socials */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-zinc-50">Rechtliches</h3>
          <Link href="/impressum" className="text-sm hover:text-zinc-50 transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-sm hover:text-zinc-50 transition-colors">
            Datenschutz
          </Link>
          <Link href="/agb" className="text-sm hover:text-zinc-50 transition-colors">
            AGB
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-6 mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs">
          © {new Date().getFullYear()} {personalInfo.name}. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-4">
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
