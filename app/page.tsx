"use client";

import { useState, useRef, useCallback } from "react";
import { AnimatedBackground } from "@/components/animated-background";
import { SplashScreen } from "@/components/splash-screen";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedTracks } from "@/components/featured-tracks";
import { ArtistsSection } from "@/components/artists-section";
import { CommunitySection } from "@/components/community-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { CatShelterSection } from "@/components/cat-shelter-section";
import { PartnersSection } from "@/components/partners-section";
import type { Locale } from "@/lib/translations";

function MainSite() {
  return (
    <div className="relative z-10 min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="h-px" style={{ background: "rgba(248, 164, 184, 0.2)" }} />
        </div>
        <FeaturedTracks />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="h-px" style={{ background: "rgba(248, 164, 184, 0.2)" }} />
        </div>
        <ArtistsSection />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="h-px" style={{ background: "rgba(248, 164, 184, 0.2)" }} />
        </div>
        <CommunitySection />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="h-px" style={{ background: "rgba(248, 164, 184, 0.2)" }} />
        </div>
        <PartnersSection />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="h-px" style={{ background: "rgba(248, 164, 184, 0.2)" }} />
        </div>
        <CatShelterSection />
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="h-px" style={{ background: "rgba(248, 164, 184, 0.2)" }} />
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

function AppContent() {
  const [entered, setEntered] = useState(false);
  const { setLocale } = useLocale();

  const handleSplashComplete = useCallback((locale: Locale) => {
    setLocale(locale);
    setEntered(true);
  }, [setLocale]);

  return (
    <>
      <AnimatedBackground />
      {!entered ? (
        <SplashScreen onComplete={handleSplashComplete} />
      ) : (
        <div className="animate-in fade-in duration-700">
          <MainSite />
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
}
