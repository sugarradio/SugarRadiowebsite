"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, Headphones, MessageCircle, Radio, Users, Zap } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function CommunitySection() {
  const { t } = useLocale();

  const benefits = [
    { icon: Download, titleKey: "community.benefit.downloads", descKey: "community.benefit.downloads_desc" },
    { icon: MessageCircle, titleKey: "community.benefit.chat", descKey: "community.benefit.chat_desc" },
    { icon: Headphones, titleKey: "community.benefit.info", descKey: "community.benefit.info_desc" },
    { icon: Zap, titleKey: "community.benefit.early", descKey: "community.benefit.early_desc" },
  ];

  return (
    <section id="comunidad" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              background: "rgba(248, 164, 184, 0.15)",
              border: "1px solid rgba(248, 164, 184, 0.3)",
              color: "#d05878",
            }}
          >
            {t("community.badge")}
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#7a2845" }}>
            {t("community.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty" style={{ color: "#9e5068" }}>
            {t("community.description")}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                border: "1px solid rgba(248, 164, 184, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "rgba(248, 164, 184, 0.15)" }}
              >
                <benefit.icon className="h-5 w-5" style={{ color: "#e8789a" }} />
              </div>
              <h3 className="font-semibold" style={{ color: "#7a2845" }}>{t(benefit.titleKey)}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#9e5068" }}>
                {t(benefit.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Discord CTA */}
        <div
          className="mt-12 overflow-hidden rounded-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            border: "2px solid rgba(248, 164, 184, 0.25)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 40px rgba(248, 164, 184, 0.1)",
          }}
        >
          <div className="flex flex-col items-center gap-8 p-8 lg:flex-row lg:p-12">
            <div className="flex-1 text-center lg:text-left">
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1"
                style={{ background: "rgba(248, 164, 184, 0.15)" }}
              >
                <Users className="h-4 w-4" style={{ color: "#d05878" }} />
                <span className="text-sm font-medium" style={{ color: "#d05878" }}>
                  {t("community.cta.active")}
                </span>
              </div>
              <h3 className="text-2xl font-bold sm:text-3xl" style={{ color: "#7a2845" }}>
                {t("community.cta.title")}
              </h3>
              <p className="mt-3 max-w-lg" style={{ color: "#9e5068" }}>
                {t("community.cta.desc")}
              </p>
              <Link
                href="https://discord.com/invite/AhBTMy6wMm"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "#5865F2",
                  color: "#ffffff",
                  boxShadow: "0 4px 20px rgba(88, 101, 242, 0.3)",
                }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                </svg>
                {t("community.cta.button")}
              </Link>
            </div>

            <div className="relative flex shrink-0 items-center justify-center">
              <div className="relative h-48 w-48 lg:h-56 lg:w-56">
                <Image
                  src="/images/sugar-radio-icon.png"
                  alt="Sugar Radio community"
                  fill
                  className="rounded-2xl object-cover"
                  style={{
                    boxShadow: "0 8px 30px rgba(248, 164, 184, 0.2)",
                    border: "2px solid rgba(248, 164, 184, 0.2)",
                  }}
                />
                <div
                  className="absolute -bottom-3 -right-3 rounded-xl p-3 shadow-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "1px solid rgba(248, 164, 184, 0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Radio className="h-6 w-6" style={{ color: "#e8789a" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Teaser */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{
            background: "rgba(248, 164, 184, 0.08)",
            border: "2px dashed rgba(248, 164, 184, 0.25)",
          }}
        >
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1"
            style={{ background: "rgba(248, 164, 184, 0.15)" }}
          >
            <Radio className="h-4 w-4" style={{ color: "#d05878" }} />
            <span className="text-sm font-medium" style={{ color: "#d05878" }}>
              {t("community.bot.badge")}
            </span>
          </div>
          <h3 className="text-xl font-bold" style={{ color: "#9e3a5c" }}>
            {t("community.bot.title")}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm" style={{ color: "#b05070" }}>
            {t("community.bot.desc")}
          </p>
        </div>
      </div>
    </section>
  );
}
