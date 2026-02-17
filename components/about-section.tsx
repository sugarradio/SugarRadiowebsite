"use client";

import { Heart } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="acerca" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center">
          <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              background: "rgba(248, 164, 184, 0.15)",
              border: "1px solid rgba(248, 164, 184, 0.3)",
              color: "#d05878",
            }}
          >
            {t("about.badge")}
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#7a2845" }}>
            {t("about.title")}
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          {/* Coming Soon Card */}
          <div
            className="flex flex-col items-center gap-4 rounded-2xl p-12 text-center"
            style={{
              background: "rgba(255, 255, 255, 0.5)",
              border: "2px solid rgba(248, 164, 184, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ background: "rgba(248, 164, 184, 0.15)" }}
            >
              <Heart className="h-8 w-8" style={{ color: "#e8789a" }} />
            </div>
            <p className="text-lg font-semibold leading-relaxed" style={{ color: "#9e3a5c" }}>
              {t("about.coming_soon")}
            </p>
          </div>

          {/* Contact */}
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: "#b05070" }}>
              {t("about.contact")}{" "}
              <a
                href="https://discord.com/invite/AhBTMy6wMm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
                style={{ color: "#e8789a" }}
              >
                {t("about.contact_link")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
