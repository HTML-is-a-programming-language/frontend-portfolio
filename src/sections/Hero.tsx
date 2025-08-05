export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-24 bg-white dark:bg-zinc-900"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4">
        안녕하세요, 프론트엔드 개발자 승준입니다.
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl">
        사용자 경험을 최우선으로 생각하며, 성능과 유지보수가 쉬운 코드를 지향합니다.
      </p>
    </section>
  );
}