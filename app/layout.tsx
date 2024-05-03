import Navbar from "@/components/Navbar";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  title: "ForeCastify - weather",
  description:
    "ForeCastify is a weather app built using NextJS. Which  provides you with the latest weather forecast for your desired city or country. It supports millions of locations over the world. Please use it wisely and only for educational purposes. The actual weather conditions may vary.",
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://forecastify-weather.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains_Mono.className} max-w-[100vw] overflow-x-hidden antialiased bg-gradient-to-b from-zinc-950/10 via-zinc-950/15 to-yellow-950/5`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
