"use client";

import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface AudioControllerProps {
  audioElement: HTMLAudioElement | null;
}

export function AudioController({ audioElement }: AudioControllerProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!audioElement) return;
    setIsPlaying(!audioElement.paused);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audioElement.addEventListener("play", handlePlay);
    audioElement.addEventListener("pause", handlePause);

    return () => {
      audioElement.removeEventListener("play", handlePlay);
      audioElement.removeEventListener("pause", handlePause);
    };
  }, [audioElement]);

  const togglePlayPause = () => {
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  if (!audioElement) return null;

  return (
    <button
      onClick={togglePlayPause}
      className="fixed top-3.5 right-4 z-50 flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-105 active:scale-95 md:right-auto md:left-1/2 md:-translate-x-1/2"
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        border: "1px solid rgba(248, 164, 184, 0.3)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 12px rgba(248, 164, 184, 0.15)",
      }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <Pause className="h-3.5 w-3.5" style={{ color: "#d05878" }} />
      ) : (
        <Play className="h-3.5 w-3.5 ml-0.5" style={{ color: "#d05878" }} />
      )}
      <div className="flex items-center gap-0.5">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="inline-block w-0.5 rounded-full transition-all"
            style={{
              background: "#d05878",
              height: isPlaying ? `${6 + i * 2}px` : "4px",
              animation: isPlaying ? `soundBarCtrl 0.${4 + i}s ease-in-out infinite alternate` : "none",
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes soundBarCtrl {
          from { height: 4px; }
          to { height: 12px; }
        }
      `}</style>
    </button>
  );
}
