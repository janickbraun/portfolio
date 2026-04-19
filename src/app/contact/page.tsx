import { Metadata } from "next";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's connect. Reach out for projects, ideas, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24">
      <div className="mx-auto px-6 max-w-5xl">
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-50 mb-6">
                Let's <span className="text-primary">connect</span>.
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                I'm always open to discussing new projects, creative ideas or original products. Feel free to reach out via any of the channels below.
              </p>
            </div>
            
            <div className="relative h-32 w-32 md:h-40 md:w-40 shrink-0 rounded-full overflow-hidden border border-zinc-800 shadow-2xl">
              <Image
                src="/images/me/profile.jpg"
                alt="Janick Braun"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <FadeIn delay={0.2} direction="up" className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {/* Email Card */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:bg-zinc-900 hover:border-primary/50"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Email</span>
                  <span className="text-zinc-50 font-medium md:text-lg transition-colors group-hover:text-primary">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all hover:bg-zinc-900 hover:border-primary/50"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Phone</span>
                  <span className="text-zinc-50 font-medium md:text-lg transition-colors group-hover:text-primary">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</span>
                  <span className="text-zinc-50 font-medium md:text-lg">
                    {personalInfo.location}, Germany
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.3} direction="up" className="space-y-8">
            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
              <h2 className="text-2xl font-bold text-zinc-50 mb-8 tracking-tight">Social Networks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-zinc-950 border border-zinc-900 transition-all hover:border-primary/50 group"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className="h-5 w-5 text-zinc-400 group-hover:text-primary" />
                      <span className="font-medium text-zinc-300 group-hover:text-zinc-50">{social.name}</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-zinc-600 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
