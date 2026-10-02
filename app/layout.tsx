import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import "./globals.css";

const siteUrl = "https://hanxuanye.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Hanxuan Ye", template: "%s · Hanxuan Ye" },
  description: "Hanxuan Ye is an Assistant Professor in Statistics at Zhejiang University, working in statistical genomics, survival analysis, algorithmic fairness, and high-dimensional statistics.",
  authors: [{ name: "Hanxuan Ye" }],
  creator: "Hanxuan Ye",
  keywords: [
    "Hanxuan Ye",
    "statistics",
    "statistical genomics",
    "survival analysis",
    "algorithmic fairness",
    "high-dimensional statistics",
    "Zhejiang University",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Hanxuan Ye",
    description: "Assistant Professor in Statistics at Zhejiang University.",
    siteName: "Hanxuan Ye",
    images: [{ url: "/hanxuan-ye.jpg", width: 1086, height: 1448, alt: "Portrait of Hanxuan Ye" }],
  },
  twitter: {
    card: "summary",
    title: "Hanxuan Ye",
    description: "Assistant Professor in Statistics at Zhejiang University.",
    images: ["/hanxuan-ye.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
