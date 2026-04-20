"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "@/lib/data";
import { Menu, X, Mail, LayoutGrid, FileText, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/projects", label: "Projects", icon: LayoutGrid },
  { href: "/cv", label: "Resume", icon: FileText },
  { href: "/hobbies", label: "Hobbies", icon: Sparkles },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo (Left) */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-zinc-50 transition-colors hover:text-primary relative z-50"
            onClick={(e) => {
              setIsOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            {personalInfo.name}
            <span className="text-primary ml-0.5">.</span>
          </Link>

          {/* Desktop Navigation (Centered) */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-zinc-50 ${
                  pathname === link.href ? "text-primary font-bold" : "text-zinc-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button (Right) */}
          <div className="hidden sm:block">
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-bold text-zinc-950 transition-all hover:bg-primary-hover hover:scale-[1.02]"
            >
              Contact me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 h-screen w-full bg-zinc-950 px-6 pt-24 sm:hidden z-40"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-4 py-4 px-2 rounded-xl border border-transparent transition-all ${
                          pathname === link.href 
                            ? "bg-zinc-900 border-zinc-800 text-primary" 
                            : "text-zinc-400"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${pathname === link.href ? "bg-primary/10 text-primary" : "bg-zinc-900 text-zinc-500"}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                  className="mt-4 pt-6"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full h-14 rounded-2xl bg-primary text-zinc-950 text-base font-bold shadow-lg shadow-primary/20"
                  >
                    <Mail className="h-5 w-5" />
                    Contact me
                  </Link>
                </motion.div>
              </nav>


            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
