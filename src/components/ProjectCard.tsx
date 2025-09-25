import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  demo,
  cover,
  highlights = [],
  metrics = [],
  caseStudy,
}: Project) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur
                 transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60"
    >
      {/* 썸네일 (선택) */}
      {cover && (
        <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl">
          <Image
            src={cover}
            alt={`${title} thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            priority={false}
          />
        </div>
      )}

      {/* 제목 & 설명 */}
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {description}
      </p>

      {/* 태그 */}
      <ul className="mb-4 flex flex-wrap gap-2 text-[12px]">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-zinc-700
                       dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          >
            #{tag}
          </li>
        ))}
      </ul>

      {/* 간단 지표 (선택) */}
      {!!metrics.length && (
        <div className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-2 text-center">
          {metrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-zinc-200 p-2 dark:border-zinc-800"
            >
              <p className="text-sm font-bold text-zinc-900 dark:text-white">
                {m.value}
              </p>
              <p className="text-[10px] text-zinc-600 dark:text-zinc-400">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 하이라이트 (선택) */}
      {!!highlights.length && (
        <ul className="mb-4 list-disc space-y-1 pl-4 text-sm text-zinc-700 dark:text-zinc-300">
          {highlights.slice(0, 3).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="flex flex-wrap gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800
                     transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400
                     dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800 dark:focus:ring-zinc-600 h-fit"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition
                       hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-zinc-400
                       dark:bg-white dark:text-zinc-900 dark:focus:ring-zinc-600 h-fit"
          >
            Demo
          </a>
        )}

        {/* JS 없는 케이스 스터디 (선택) */}
        {caseStudy && (
          <details className="group/case ml-auto w-full sm:w-auto">
            <summary
              className="inline-flex cursor-pointer list-none items-center rounded-lg px-3 py-1.5 text-sm font-medium
                         text-zinc-700 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400
                         dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:ring-zinc-600"
              aria-label={`${title} 케이스 스터디 열기/닫기`}
            >
              Case Study
              <svg
                className="ml-1 h-4 w-4 transition group-open/case:rotate-180"
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

            <div
              className="mt-2 space-y-3 rounded-xl border border-zinc-200 bg-white/80 p-4 text-sm leading-relaxed
                         dark:border-zinc-800 dark:bg-zinc-900/60"
              role="region"
              aria-label={`${title} case study`}
            >
              {caseStudy.problem && (
                <section>
                  <h4 className="mb-1 font-semibold">문제 정의</h4>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    {caseStudy.problem}
                  </p>
                </section>
              )}

              {!!caseStudy.approach?.length && (
                <section>
                  <h4 className="mb-1 font-semibold">접근</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
                    {caseStudy.approach.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </section>
              )}

              {!!caseStudy.result?.length && (
                <section>
                  <h4 className="mb-1 font-semibold">결과</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
                    {caseStudy.result.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </section>
              )}

              {caseStudy.roleStack && (
                <section>
                  <h4 className="mb-1 font-semibold">역할 & 스택</h4>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    {caseStudy.roleStack}
                  </p>
                </section>
              )}
            </div>
          </details>
        )}
      </div>
    </article>
  );
}
