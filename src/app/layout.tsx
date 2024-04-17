import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Cyber Avenger - Welcome to The Cyber Avenger Guardians of the Virtual Gates",
  description: "Join us in this shared exploration, where every click and collaboration contributes to a safer digital world. It's a journey crafted by human expertise for individuals seeking practical insights.",
  authors: [{ name: "Shivam Gupta", url: "https://ashokasec.com" }],
  keywords: "the cyber avenger, thecyberavenger, cybersecurity, hacking, hacking community, hackers, aairon man, raghav som, @ashokasec",
  openGraph: {
    type: "website",
    url: "https://thecyberavenger.com",
    title: "The Cyber Avenger - Welcome to The Cyber Avenger Guardians of the Virtual Gates",
    description: "Join us in this shared exploration, where every click and collaboration contributes to a safer digital world. It's a journey crafted by human expertise for individuals seeking practical insights.",
    siteName: "The Cyber Avenger",
    images: [{
      url: "https://raw.githubusercontent.com/ashokasec/my-website/main/public/screenshot.png",
    }],
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
