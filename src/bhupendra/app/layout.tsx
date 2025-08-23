import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://digipants.com"),
  title: "Bhupendra Kumar — Founder, DigiPants",
  description:
    "Driving revenue with Google/Meta Ads, CRO, and AI automations for hotels, D2C brands, and service businesses.",
  openGraph: {
    title: "Bhupendra Kumar — Founder, DigiPants",
    description:
      "Driving revenue with Google/Meta Ads, CRO, and AI automations for hotels, D2C brands, and service businesses.",
    url: "/bhupendra/",
    siteName: "DigiPants",
    images: [{ url: "/bhupendra/og.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhupendra Kumar — Founder, DigiPants",
    description:
      "Driving revenue with Google/Meta Ads, CRO, and AI automations for hotels, D2C brands, and service businesses.",
    images: ["/bhupendra/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
