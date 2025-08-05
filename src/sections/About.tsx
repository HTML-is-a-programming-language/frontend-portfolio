import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="section-container"
    >
      <SectionTitle>🙋‍♂️ 소개</SectionTitle>
      <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto text-center">
        안녕하세요! 저는 프론트엔드 개발자 승준입니다. React와 Next.js를 기반으로 안정적이고 빠른 사용자 경험을 구현하는 데 집중하고 있습니다.
      </p>
    </section>
  );
}
