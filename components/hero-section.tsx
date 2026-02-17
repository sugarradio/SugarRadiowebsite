"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Users } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

const LATEST_VIDEO_ID = "tLWqZgzt4Tk";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left: Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(248, 164, 184, 0.15)",
              border: "1px solid rgba(248, 164, 184, 0.3)",
            }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "#e8789a" }} />
            <span className="text-xs font-medium" style={{ color: "#d05878" }}>
              {t("hero.badge")}
            </span>
          </div>

          <h1
            className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            style={{ color: "#7a2845" }}
          >
            {t("hero.title.1")}
            <span style={{ color: "#e8789a" }}>{t("hero.title.highlight")}</span>
            {t("hero.title.2")}
          </h1>

          <p
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed"
            style={{ color: "#9e5068" }}
          >
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://discord.com/invite/AhBTMy6wMm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #f8a4b8, #e8789a)",
                color: "#ffffff",
                boxShadow: "0 4px 20px rgba(248, 164, 184, 0.3)",
              }}
            >
              <Users className="h-5 w-5" />
              {t("hero.cta.discord")}
            </Link>
            <Link
              href="https://www.youtube.com/@SugarRadio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                border: "2px solid rgba(248, 164, 184, 0.3)",
                color: "#9e3a5c",
                backdropFilter: "blur(10px)",
              }}
            >
              <Play className="h-5 w-5" />
              {t("hero.cta.youtube")}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8">
            <div>
              <p className="text-2xl font-bold" style={{ color: "#7a2845" }}>{t("hero.stat.tracks.count")}</p>
              <p className="text-sm" style={{ color: "#b05070" }}>{t("hero.stat.tracks")}</p>
              <p className="text-xs" style={{ color: "#c88098" }}>{t("hero.stat.tracks.more")}</p>
            </div>
            <div className="h-16 w-px" style={{ background: "rgba(248, 164, 184, 0.3)" }} />
            <div>
              <p className="text-2xl font-bold" style={{ color: "#7a2845" }}>{t("hero.stat.artists.count")}</p>
              <p className="text-sm" style={{ color: "#b05070" }}>{t("hero.stat.artists")}</p>
              <p className="text-xs" style={{ color: "#c88098" }}>{t("hero.stat.artists.more")}</p>
            </div>
            <div className="h-16 w-px" style={{ background: "rgba(248, 164, 184, 0.3)" }} />
            <div>
              <p className="text-2xl font-bold" style={{ color: "#7a2845" }}>{"24/7"}</p>
              <p className="text-sm" style={{ color: "#b05070" }}>{t("hero.stat.community")}</p>
            </div>
          </div>
        </div>

        {/* Right: YouTube Embed - Random video */}
        <div className="flex w-full flex-1 flex-col items-center gap-4">
          <div
            className="w-full overflow-hidden rounded-2xl"
            style={{
              border: "2px solid rgba(248, 164, 184, 0.2)",
              boxShadow: "0 8px 40px rgba(248, 164, 184, 0.15)",
              background: "rgba(255, 255, 255, 0.4)",
            }}
          >
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${LATEST_VIDEO_ID}?rel=0`}
                title="Sugar Radio - Latest Track"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-sm font-medium" style={{ color: "#b05070" }}>
            {t("hero.video.caption")}
          </p>
        </div>
      </div>
    </section>
  );
}
