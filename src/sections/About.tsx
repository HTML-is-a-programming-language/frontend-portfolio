import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 min-h-[calc(100dvh-73px)] box-border"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="about-title"
          className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          About
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 md:col-span-1">
            <div className="flex items-center gap-4">
              <Image
                src="/profile.jpg"
                alt="프로필"
                width={144}
                height={144}
                className="rounded-sm w-fit h-36 object-cover"
                priority
              />
              <div>
                <p className="text-lg font-semibold text-zinc-900 dark:text-white">서승준</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">퍼블리셔</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">→ 예비 프론트엔드 개발자</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Javascript",
                "Tailwind",
                "CSS",
                "HTML",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  {label}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                퍼블리셔 2년차로 HTML·CSS·JavaScript 기반 마크업과 인터랙션 구현에 강점이 있습니다.<br />
                성능·접근성·확장성을 우선하며, 엔지니어링·디자인 팀과의 협업으로 최고의 사용자 경험을 설계·개선하는 프론트엔드로 성장하고 싶습니다.
            </p>
            <div className="mt-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-zinc-900"
              >
                연락하기
              </a>
            </div>
          </div>
          <div className="md:col-span-2 grid gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">Highlights</h3>
              <ul className="grid grid-cols-3 gap-3 text-center">
                <li className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">+45%</p>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">웹 성능 최적화</p>
                </li>
                <li className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">99.9%</p>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">안정적 배포</p>
                </li>
                <li className="rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">Agile</p>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">디자인·개발 협업</p>
                </li>
              </ul>
              <h4 className="mt-6 mb-2 text-sm font-semibold text-zinc-900 dark:text-white">Skill Depth</h4>
              <ul className="space-y-3">
                {[
                  { label: "React / Next.js(App Router, 기본 SSR/SSG)", value: 75 },
                  { label: "TypeScript(타입 안정성·실무 적용 학습)", value: 70 },
                  { label: "웹 성능 최적화(이미지 최적화, 코드 스플리팅)", value: 65 },
                  { label: "웹 접근성 / 반응형 UI", value: 85 },
                  { label: "협업 툴(Git, Storybook, CI 기본 이해)", value: 60 },
                ].map((s) => (
                  <li key={s.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-700 dark:text-zinc-300">{s.label}</span>
                      <span className="text-zinc-500 dark:text-zinc-400">{s.value}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800">
                      <div
                        className="h-2 rounded-full bg-zinc-900 dark:bg-white"
                        style={{ width: `${s.value}%` }}
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-white">Values & FAQ</h3>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <details className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium text-zinc-900 dark:text-white">
                    코드 스타일과 협업 방식은?
                    <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                    </svg>
                  </summary>
                  <div className="pb-2 text-sm text-zinc-700 dark:text-zinc-300">
                    Git Flow를 기본으로 학습하고 있으며, 코드 리뷰와 Lint/Prettier를 활용해 협업 시 일관성을 유지하려 노력합니다.
                  </div>
                </details>

                <details className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium text-zinc-900 dark:text-white">
                    강점은 무엇인가요?
                    <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                    </svg>
                  </summary>
                  <div className="pb-2 text-sm text-zinc-700 dark:text-zinc-300">
                    퍼블리셔 경험을 바탕으로 정교한 마크업과 UI 구현에 자신 있으며, 학습을 통해 성능 개선과 접근성 향상에 꾸준히 도전하고 있습니다.
                  </div>
                </details>

                <details className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium text-zinc-900 dark:text-white">
                    앞으로 성장하고 싶은 방향은?
                    <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
                    </svg>
                  </summary>
                  <div className="pb-2 text-sm text-zinc-700 dark:text-zinc-300">
                    대규모 서비스에서도 안정성과 성능을 유지할 수 있는 프론트엔드 역량을 키우고, 팀과 협업하며 사용자 경험을 개선하는 개발자로 성장하고 싶습니다.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
