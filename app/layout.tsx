import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sugar Radio | Indie Music from Japan & China",
  description:
    "Discover rare indie Japanese and Chinese music, exclusive remixes, and fresh tracks not available anywhere else.",
  icons: {
    icon: "/images/sugar-radio-icon.png",
    apple: "/images/sugar-radio-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fff0f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
