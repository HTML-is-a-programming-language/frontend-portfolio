import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 min-h-[calc(100dvh-150px)] lg:snap-start"
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
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">Timeline</h3>
              <div className="relative max-h-[260px] overflow-y-auto px-2">
                <div className="relative border-l border-zinc-200 pl-6 dark:border-zinc-700">
                  <div className="relative pb-5">
                    <span className="absolute -left-[30px] top-1 block h-3 w-3 rounded-full border-2 border-white bg-zinc-900 dark:border-zinc-900 dark:bg-white"></span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">2025</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      포트폴리오 리팩토링
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      Next.js(App Router)·TypeScript 도입, 디자인 시스템 정비, 스크롤 스파이·인트로 모션, 테스트/CI 기초 셋업
                    </p>
                  </div>

                  <div className="relative pb-5">
                    <span className="absolute -left-[30px] top-1 block h-3 w-3 rounded-full border-2 border-white bg-zinc-900 dark:border-zinc-900 dark:bg-white"></span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">2024</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      정보처리기사 학습 사이트 제작
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      SSR/SEO 최적화, 페이지 구조화, 접근성 체크리스트 운영, 성능 지표 기반 개선 사이클 시도
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[30px] top-1 block h-3 w-3 rounded-full border-2 border-white bg-zinc-900 dark:border-zinc-900 dark:bg-white"></span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">2023-현재</p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      웹 퍼블리셔 입사 <span className="ml-2 align-middle rounded-full border px-2 py-0.5 text-[10px] text-zinc-600 dark:text-zinc-300 dark:border-zinc-700">재직 중</span>
                    </p>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      반응형 중심의 UI 구축, 디자인 토큰/컴포넌트화로 유지보수성 향상, 성능·크로스브라우징 지속 개선
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-white">Values & FAQ</h3>
              <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <details className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium text-zinc-900 dark:text-white">
                    코드 스타일과 협업 방식은?
                    <svg
                      className="h-4 w-4 transition group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="pb-2 text-sm text-zinc-700 dark:text-zinc-300">
                    타입 안정성/함수형 사고를 선호하고, Storybook·Lint·Prettier·Git Hook으로 일관성을 유지합니다.
                  </div>
                </details>

                <details className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium text-zinc-900 dark:text-white">
                    강점은 무엇인가요?
                    <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="pb-2 text-sm text-zinc-700 dark:text-zinc-300">
                    디자인 의도를 살리는 정교한 마크업, 성능/접근성 기본기, 모션·상호작용 구현에 강점이 있습니다.
                  </div>
                </details>

                <details className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium text-zinc-900 dark:text-white">
                    관심 있는 영역은?
                    <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.54a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="pb-2 text-sm text-zinc-700 dark:text-zinc-300">
                    제품 지표 기반 UI 개선, 모션으로 브랜드 톤을 만드는 작업, DX를 높이는 컴포넌트 아키텍처에 관심이 많습니다.
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
