"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  thumbnail?: string;
}

export function YouTubeEmbed({ videoId, title, thumbnail }: YouTubeEmbedProps) {
  const [accepted, setAccepted] = useState(false);

  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (accepted) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        ></iframe>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/50 group">
      <Image
        src={thumbnail || defaultThumbnail}
        alt={title || "Video thumbnail"}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-zinc-950/60 transition-colors group-hover:bg-zinc-950/70 flex flex-col items-center justify-center p-6 text-center">
        <button
          onClick={() => setAccepted(true)}
          className="group/btn flex flex-col items-center gap-6 transition-transform hover:scale-105 focus:outline-none"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-zinc-950 shadow-xl transition-transform group-hover/btn:scale-110">
            <Play className="h-6 w-6 ml-1" fill="currentColor" />
          </div>
          <div className="space-y-3 max-w-md">
            <p className="font-semibold text-zinc-50 text-lg">Play "{title}"</p>
            <div className="rounded-lg bg-zinc-900/80 p-4 border border-zinc-800 backdrop-blur-sm">
              <p className="text-xs text-zinc-400 leading-relaxed text-balance">
                By clicking play, you agree to load an external resource from YouTube. Personal data (such as your IP address) may be transmitted to Google's servers.
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
