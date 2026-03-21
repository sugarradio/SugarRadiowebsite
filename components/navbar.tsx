"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLocale();

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#catalogo", label: t("nav.catalog") },
    { href: "#artistas", label: t("nav.artists") },
    { href: "#comunidad", label: t("nav.community") },
    { href: "#partners", label: t("nav.partners") },
    { href: "#pelitos", label: "PelitosDeGatoDeCafeConMoka" },
    { href: "#acerca", label: t("nav.about") },
  ];

  const socialLinks = [
    {
      href: "https://www.youtube.com/@SugarRadio",
      label: "YouTube",
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      href: "https://discord.com/invite/AhBTMy6wMm",
      label: "Discord",
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
        </svg>
      ),
    },
    {
      href: "https://music.163.com/#/user/home?id=8124271754",
      label: "NetEase Music",
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/itssugarradio/",
      label: "Instagram",
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      href: "https://x.com/ItsSugarRadio",
      label: "X (Twitter)",
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 border-b"
      style={{
        background: "rgba(255, 240, 245, 0.8)",
        backdropFilter: "blur(20px)",
        borderColor: "rgba(248, 164, 184, 0.2)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <Image
            src="/images/sugar-radio-icon.png"
            alt="Sugar Radio"
            width={36}
            height={36}
            loading="eager"
            priority
            className="rounded-full ring-2"
            style={{ boxShadow: "0 0 0 2px rgba(248, 164, 184, 0.3)" }}
          />
          <span className="text-xl font-bold tracking-tight" style={{ color: "#9e3a5c" }}>
            {"Sugar"}
            <span style={{ color: "#e8789a" }}>{"Radio"}</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              style={{ color: "#9e3a5c" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(248, 164, 184, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden items-center gap-1 md:flex">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="rounded-lg p-2 transition-colors"
              style={{ color: "#b05070" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#9e3a5c";
                e.currentTarget.style.background = "rgba(248, 164, 184, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#b05070";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 md:hidden"
          style={{ color: "#9e3a5c" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="border-t md:hidden"
          style={{
            background: "rgba(255, 240, 245, 0.95)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(248, 164, 184, 0.2)",
          }}
        >
          <div className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                style={{ color: "#9e3a5c" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t pt-4" style={{ borderColor: "rgba(248, 164, 184, 0.2)" }}>
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-lg p-2"
                  style={{ color: "#b05070" }}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
