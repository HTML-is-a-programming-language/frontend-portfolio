// src/app/layout.tsx (App Router 예시)
import "./globals.css";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <main className="prose prose-lg dark:prose-invert mx-auto max-w-3xl px-4 py-8">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
