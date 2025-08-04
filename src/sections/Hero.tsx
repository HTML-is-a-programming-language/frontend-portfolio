// src/sections/Hero.tsx
export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-4 sm:px-6 md:px-12 lg:px-24 py-20">
  <div className="text-center md:text-left space-y-4">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      안녕하세요! <br className="md:hidden" />
      서승준입니다.
    </h1>
    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
      프론트엔드 개발자 포트폴리오입니다.
    </p>
  </div>
</section>

  );
}