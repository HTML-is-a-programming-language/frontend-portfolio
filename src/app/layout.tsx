import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "@/app/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashIntro from "@/components/SplashIntro";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
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
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKr.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SplashIntro>
            <Header />
            <main className="bg-white dark:bg-gray-900 lg:max-h-[calc(100svh-150px)] lg:overflow-y-scroll lg:snap-y lg:snap-mandatory">
              {children}
            </main>
            <Footer />
          </SplashIntro>
        </ThemeProvider>
      </body>
    </html>
  );
}