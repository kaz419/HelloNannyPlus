import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelloNanny+ | Find Your Perfect Nanny & Maid in Bangkok",
  description:
    "Search, chat, video call, and hire nannies & maids in Bangkok. All in one app for just ฿1,000/month. No agency fees, no middleman.",
  keywords: "nanny bangkok, maid bangkok, babysitter thailand, housekeeper bangkok, hire nanny",
  openGraph: {
    title: "HelloNanny+ | Find Your Perfect Nanny & Maid in Bangkok",
    description:
      "Search, chat, video call, and hire — all in one app. Just ฿1,000/month.",
    type: "website",
    url: "https://plus.hellonanny-san.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
