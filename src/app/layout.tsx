import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "서승준 포트폴리오",
  description: "프론트엔드 개발자 서승준의 포트폴리오입니다.",
  keywords: [
    "프론트엔드 개발자",
    "Next.js 포트폴리오",
    "React 포트폴리오",
    "서승준",
    "웹 개발자 포트폴리오",
  ],
  authors: [{ name: "서승준", url: "https://github.com/HTML-is-a-programming-language" }],
  openGraph: {
    title: "서승준 포트폴리오",
    description: "Next.js 기반 프론트엔드 포트폴리오입니다.",
    url: "https://your-deployment-url.vercel.app",
    siteName: "서승준 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}