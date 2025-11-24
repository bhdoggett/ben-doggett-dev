import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Doggett - Fullstack Software Engineer",
  description:
    "Portfolio of Ben Doggett, a Fullstack Software Engineer specializing in React, Next.js, TypeScript, and Node.js. View projects and download resume.",
  keywords: [
    "Ben Doggett",
    "Fullstack Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Ben Doggett" }],
  openGraph: {
    title: "Ben Doggett - Fullstack Software Engineer",
    description:
      "Portfolio showcasing projects and expertise in modern web development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
