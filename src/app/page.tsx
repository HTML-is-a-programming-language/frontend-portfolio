import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export const metadata = {
  title: "프론트엔드 포트폴리오",
  description: "프론트엔드 개발자의 프로젝트와 기술 스택을 소개합니다.",
  openGraph: {
    title: "프론트엔드 포트폴리오",
    images: ["/images/og-image.png"],
  },
};
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
