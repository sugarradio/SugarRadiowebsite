"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Handshake, ExternalLink } from "lucide-react";

const partners = [
  {
    name: "VNEX",
    url: "https://x.com/VNex_ES",
    color: "#1DA1F2",
  },
  {
    name: "VTuber Nook",
    url: "https://x.com/vtubernook",
    color: "#9146FF",
  },
];

export function PartnersSection() {
  const { t } = useLocale();

  return (
    <section id="partners" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(248, 164, 184, 0.15)",
              border: "1px solid rgba(248, 164, 184, 0.3)",
            }}
          >
            <Handshake className="h-4 w-4" style={{ color: "#d05878" }} />
            <span className="text-sm font-medium" style={{ color: "#d05878" }}>
              {t("partners.badge")}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#9e3a5c" }}
          >
            {t("partners.title")}
          </h2>

          {/* Subtitle */}
          <p
            className="max-w-2xl text-lg leading-relaxed"
            style={{ color: "#b05070" }}
          >
            {t("partners.subtitle")}
          </p>

          {/* Partner Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 rounded-3xl p-8 transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border: "2px solid rgba(248, 164, 184, 0.2)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 20px rgba(248, 164, 184, 0.1)",
                }}
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${partner.color}20, ${partner.color}40)`,
                    border: `2px solid ${partner.color}50`,
                  }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ color: partner.color }}
                  >
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3
                    className="text-xl font-bold flex items-center gap-2"
                    style={{ color: "#9e3a5c" }}
                  >
                    {partner.name}
                    <ExternalLink
                      className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "#d05878" }}
                    />
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "#b05070" }}
                  >
                    @{partner.url.split("/").pop()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
