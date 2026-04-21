"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  thumbnail: string;
}

export function YouTubePlayer({ videoId, thumbnail }: YouTubePlayerProps) {
  const [hasConsented, setHasConsented] = useState(false);

  if (!hasConsented) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 group">
        <Image
          src={thumbnail}
          alt="Video Thumbnail"
          fill
          sizes="(max-width: 1024px) 100vw, 768px"
          className="object-cover opacity-60 transition-opacity group-hover:opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <button
            onClick={() => setHasConsented(true)}
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-zinc-950 transition-transform hover:scale-110"
          >
            <Play className="h-8 w-8 fill-current ml-1" />
          </button>
          <div className="max-w-md bg-zinc-950/80 backdrop-blur-sm p-4 rounded-xl border border-zinc-800">
             <p className="text-xs text-zinc-300 mb-2">
                By clicking play, you agree to load content from YouTube (Google LLC). 
                Your IP address will be transmitted to Google servers.
             </p>
             <button 
                onClick={() => setHasConsented(true)}
                className="text-xs font-bold text-primary hover:underline uppercase tracking-widest"
             >
                Accept and play video
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-zinc-800 bg-black">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
