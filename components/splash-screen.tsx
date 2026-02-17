"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { languageNames, languageFlags, type Locale } from "@/lib/translations";
import { Play } from "lucide-react";

interface SplashScreenProps {
  onComplete: (locale: Locale, audioElement: HTMLAudioElement | null) => void;
}

const locales: Locale[] = ["es", "ja", "zh", "en"];

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"play" | "language">("play");
  const [hoveredLang, setHoveredLang] = useState<Locale | null>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/tape_stop_night.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.6;

    return () => {
      // Don't clean up audio here - we pass it to the main site
    };
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setTimeout(() => {
      setPhase("language");
    }, 800);
  };

  const handleSelectLanguage = (locale: Locale) => {
    setFadeOut(true);
    // Pass the audio element to the main site so it keeps playing
    setTimeout(() => {
      onComplete(locale, audioRef.current);
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Welcome text */}
        <div className="flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Image
            src="/images/sugar-radio-icon.png"
            alt="Sugar Radio"
            width={80}
            height={80}
            className="rounded-full ring-4 ring-[#f8a4b8]/40 shadow-lg shadow-[#f8a4b8]/20"
          />
          <h1
            className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: "#9e3a5c" }}
          >
            {"Welcome to Sugar Radio!"}
          </h1>
        </div>

        {/* Play phase */}
        {phase === "play" && (
          <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <button
              onClick={handlePlay}
              className="group relative flex h-28 w-28 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 active:scale-95 sm:h-32 sm:w-32"
              style={{
                background: "linear-gradient(135deg, #f8a4b8, #e8789a)",
                boxShadow: "0 0 40px rgba(248, 164, 184, 0.4), 0 0 80px rgba(248, 164, 184, 0.15)",
              }}
              aria-label="Play music"
            >
              <Play
                className="h-12 w-12 ml-1.5 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
                style={{ color: "#ffffff" }}
              />
              {/* Pulse ring */}
              <span
                className="absolute inset-0 animate-ping rounded-full opacity-20"
                style={{ background: "#f8a4b8" }}
              />
            </button>
            <p className="text-sm font-medium" style={{ color: "#b05070" }}>
              {"Press play to enter"}
            </p>
          </div>
        )}

        {/* Language phase */}
        {phase === "language" && (
          <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
            {/* Sound bar indicator (no text, no pause/volume) */}
            <div
              className="flex items-center gap-1.5 rounded-full px-4 py-2"
              style={{ background: "rgba(248, 164, 184, 0.15)", border: "1px solid rgba(248, 164, 184, 0.3)" }}
            >
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="inline-block w-0.5 rounded-full"
                  style={{
                    background: "#d05878",
                    height: "4px",
                    animation: `soundBar 0.${3 + i}s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>

            <p className="text-base font-semibold" style={{ color: "#9e3a5c" }}>
              {"Select your language"}
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleSelectLanguage(loc)}
                  onMouseEnter={() => setHoveredLang(loc)}
                  onMouseLeave={() => setHoveredLang(null)}
                  className="group flex flex-col items-center gap-2 rounded-2xl px-6 py-5 transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background:
                      hoveredLang === loc
                        ? "rgba(248, 164, 184, 0.25)"
                        : "rgba(255, 255, 255, 0.5)",
                    border:
                      hoveredLang === loc
                        ? "2px solid rgba(232, 120, 154, 0.5)"
                        : "2px solid rgba(248, 164, 184, 0.2)",
                    backdropFilter: "blur(10px)",
                    boxShadow:
                      hoveredLang === loc
                        ? "0 8px 30px rgba(248, 164, 184, 0.2)"
                        : "0 2px 10px rgba(0,0,0,0.03)",
                  }}
                >
                  <span className="text-lg font-bold" style={{ color: "#9e3a5c" }}>
                    {languageFlags[loc]}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#b05070" }}>
                    {languageNames[loc]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes soundBar {
          from {
            height: 4px;
          }
          to {
            height: 14px;
          }
        }
      `}</style>
    </div>
  );
}
