"use client";

import { Music } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function FeaturedTracks() {
  const { t } = useLocale();

  return (
    <section id="catalogo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-8 text-center">
          <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              background: "rgba(248, 164, 184, 0.15)",
              border: "1px solid rgba(248, 164, 184, 0.3)",
              color: "#d05878",
            }}
          >
            {t("catalog.badge")}
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#7a2845" }}>
            {t("catalog.title")}
          </h2>
        </div>

        {/* Coming Soon */}
        <div
          className="flex flex-col items-center gap-4 rounded-2xl p-12 text-center"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            border: "2px dashed rgba(248, 164, 184, 0.3)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{ background: "rgba(248, 164, 184, 0.15)" }}
          >
            <Music className="h-8 w-8" style={{ color: "#e8789a" }} />
          </div>
          <h3 className="text-xl font-bold" style={{ color: "#9e3a5c" }}>
            {t("catalog.coming_soon")}
          </h3>
          <p className="max-w-md text-sm leading-relaxed" style={{ color: "#b05070" }}>
            {t("catalog.coming_soon_desc")}
          </p>
          <span
            className="mt-2 inline-block rounded-full px-4 py-1.5 text-xs font-bold"
            style={{
              background: "rgba(248, 164, 184, 0.12)",
              color: "#d05878",
              border: "1px solid rgba(248, 164, 184, 0.25)",
            }}
          >
            {t("catalog.count")}
          </span>
        </div>
      </div>
    </section>
  );
}
