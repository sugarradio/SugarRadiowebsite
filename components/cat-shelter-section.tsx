"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Heart, ChevronDown, ChevronUp, Cat, Coffee } from "lucide-react";

interface CatData {
  name: string;
  age: string;
  comingSoon?: boolean;
}

const cats: CatData[] = [
  { name: "Huesitos", age: "??" },
  { name: "Milanesa", age: "??" },
  { name: "Momo", age: "??" },
  { name: "Galico", age: "??" },
  { name: "Poison", age: "??" },
  { name: "Monoko", age: "??" },
  { name: "Shira", age: "??" },
  { name: "Snowball", age: "??" },
  { name: "Loki", age: "??" },
  { name: "Chocolandra", age: "??" },
  { name: "Cannio", age: "??" },
  { name: "Wiskas", age: "??" },
  { name: "Pipi", age: "??" },
  { name: "Kitty", age: "??" },
  { name: "Skibidy", age: "??" },
  { name: "Tapp", age: "??" },
  // Coming soon cats (5 slots)
  { name: "Coming Soon", age: "??", comingSoon: true },
  { name: "Coming Soon", age: "??", comingSoon: true },
  { name: "Coming Soon", age: "??", comingSoon: true },
  { name: "Coming Soon", age: "??", comingSoon: true },
  { name: "Coming Soon", age: "??", comingSoon: true },
];

function CatCard({ cat, locale }: { cat: CatData; locale: string }) {
  const [expanded, setExpanded] = useState(false);

  const getAgeLabel = () => {
    switch (locale) {
      case "es": return "Edad";
      case "ja": return "年齢";
      case "zh": return "年龄";
      default: return "Age";
    }
  };

  const getSeeMoreLabel = () => {
    switch (locale) {
      case "es": return "Ver mas";
      case "ja": return "もっと見る";
      case "zh": return "查看更多";
      default: return "See more";
    }
  };

  const getComingSoonLabel = () => {
    switch (locale) {
      case "es": return "Proximamente";
      case "ja": return "近日公開";
      case "zh": return "即将推出";
      default: return "Coming Soon";
    }
  };

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: cat.comingSoon ? "rgba(248, 164, 184, 0.1)" : "rgba(255, 255, 255, 0.7)",
        border: "2px solid rgba(248, 164, 184, 0.25)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 15px rgba(248, 164, 184, 0.1)",
      }}
    >
      {/* Photo frame */}
      <div
        className="relative aspect-square flex items-center justify-center"
        style={{
          background: cat.comingSoon
            ? "rgba(248, 164, 184, 0.15)"
            : "linear-gradient(135deg, rgba(248, 164, 184, 0.2), rgba(232, 120, 154, 0.15))",
        }}
      >
        {cat.comingSoon ? (
          <div className="flex flex-col items-center gap-2">
            <Cat className="h-10 w-10 sm:h-12 sm:w-12" style={{ color: "#d05878", opacity: 0.4 }} />
            <span className="text-xs font-medium" style={{ color: "#d05878", opacity: 0.5 }}>
              ?
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Cat className="h-12 w-12 sm:h-16 sm:w-16" style={{ color: "#d05878" }} />
            <Heart className="h-4 w-4 absolute top-2 right-2" style={{ color: "#e8789a" }} />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 p-3 sm:p-4">
        <h3
          className="text-sm sm:text-base font-bold truncate"
          style={{ color: cat.comingSoon ? "#d05878" : "#9e3a5c", opacity: cat.comingSoon ? 0.6 : 1 }}
        >
          {cat.comingSoon ? getComingSoonLabel() : cat.name}
        </h3>
        <p className="text-xs sm:text-sm" style={{ color: "#b05070" }}>
          {getAgeLabel()}: {cat.age}
        </p>

        {/* Expand button - only for non-coming-soon cats */}
        {!cat.comingSoon && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 flex items-center justify-between w-full text-xs font-medium rounded-lg px-2 py-1.5 transition-colors"
              style={{
                color: "#d05878",
                background: expanded ? "rgba(248, 164, 184, 0.15)" : "transparent",
              }}
            >
              <span>{getSeeMoreLabel()}</span>
              {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>

            {expanded && (
              <p
                className="mt-2 text-xs leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200"
                style={{ color: "#9e3a5c" }}
              >
                {getComingSoonLabel()}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export function CatShelterSection() {
  const { t, locale } = useLocale();

  return (
    <section id="pelitos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(248, 164, 184, 0.15)",
              border: "1px solid rgba(248, 164, 184, 0.3)",
            }}
          >
            <Heart className="h-4 w-4" style={{ color: "#d05878" }} />
            <span className="text-sm font-medium" style={{ color: "#d05878" }}>
              PelitosDeGatoDeCafeConMoka
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ color: "#9e3a5c" }}
          >
            {t("pelitos.title")}
          </h2>

          {/* Description */}
          <div
            className="max-w-3xl rounded-2xl p-6 sm:p-8"
            style={{
              background: "rgba(255, 255, 255, 0.6)",
              border: "2px solid rgba(248, 164, 184, 0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#9e3a5c" }}>
              {t("pelitos.description")}
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "#9e3a5c" }}>
              {t("pelitos.donation_info")}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: "rgba(248, 164, 184, 0.2)" }}
              >
                <Cat className="h-5 w-5" style={{ color: "#d05878" }} />
                <span className="text-sm font-semibold" style={{ color: "#9e3a5c" }}>
                  20+ {t("pelitos.cats_count")}
                </span>
              </div>
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2"
                style={{ background: "rgba(248, 164, 184, 0.2)" }}
              >
                <Heart className="h-5 w-5" style={{ color: "#d05878" }} />
                <span className="text-sm font-semibold" style={{ color: "#9e3a5c" }}>
                  {t("pelitos.supported_by")}
                </span>
              </div>
            </div>

            {/* Ko-fi CTA */}
            <div className="mt-6">
              <p className="text-base font-semibold mb-4" style={{ color: "#9e3a5c" }}>
                {t("pelitos.support_cta")}
              </p>
              <Link
                href="https://ko-fi.com/sugarradio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #FF5E5B 0%, #FF9472 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 20px rgba(255, 94, 91, 0.4)",
                }}
              >
                <Coffee className="h-6 w-6" />
                <span>{t("pelitos.kofi_button")}</span>
              </Link>
            </div>
          </div>

          {/* Cat Grid - 5 columns, 4 rows = 20 cats */}
          <div className="mt-10 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cats.map((cat, index) => (
              <CatCard key={index} cat={cat} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
