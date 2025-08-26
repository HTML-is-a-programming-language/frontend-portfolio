"use client";

import { useMemo, useState } from "react";
import { skillsPro, type Skill } from "@/data/skills";

const categories = ["ALL", "Frontend", "Styling", "Tooling", "Versioning"] as const;
type SortKey = "level" | "recent" | "name";

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="mt-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" aria-hidden="true">
      <div
        className="h-2 rounded-full bg-zinc-900 dark:bg-white"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function Skills() {
  const [cat, setCat] = useState<(typeof categories)[number]>("ALL");
  const [sort, setSort] = useState<SortKey>("level");
  const [q, setQ] = useState("");

  const data = useMemo(() => {
    let list = skillsPro.slice();

    // 카테고리 필터
    if (cat !== "ALL") list = list.filter((s) => s.category === cat);

    // 검색
    if (q.trim()) {
      const t = q.toLowerCase();
      list = list.filter((s) => s.name.toLowerCase().includes(t));
    }

    // 정렬
    list.sort((a, b) => {
      if (sort === "level") return b.level - a.level;
      if (sort === "recent") return new Date(b.lastUsed).getTime() - new Date(a.lastUsed).getTime();
      return a.name.localeCompare(b.name, "ko");
    });

    return list;
  }, [cat, sort, q]);

  return (
    <section id="skills" className="py-24 min-h-[calc(100dvh-73px)] box-border" aria-labelledby="skills-title">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="mb-8">
          <h2
            id="skills-title"
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            내가 다루는 기술
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            프론트엔드 중심으로 꾸준히 활용하고 있는 기술과 도구들입니다.
          </p>
        </div>
        <p className="mt-1 mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          최근 사용, 숙련도, 카테고리로 정리했습니다. 각 스킬은 실제 프로젝트 사용 경험을 기준으로 표현됩니다.
        </p>

        {/* Toolbar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={[
                  "rounded-full border px-3 py-1.5 text-sm transition focus:outline-none focus:ring-2",
                  cat === c
                    ? "border-zinc-900 bg-zinc-900 text-white focus:ring-zinc-400 dark:border-white dark:bg-white dark:text-zinc-900 dark:focus:ring-zinc-600"
                    : "border-zinc-300 text-zinc-700 hover:bg-zinc-100 focus:ring-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:ring-zinc-600",
                ].join(" ")}
                aria-pressed={cat === c}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-sm text-zinc-700 dark:text-zinc-300">
              정렬
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="ml-2 rounded-lg border border-zinc-300 bg-white px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:focus:ring-zinc-600"
                aria-label="정렬"
              >
                <option value="level">숙련도순</option>
                <option value="recent">최근 사용순</option>
                <option value="name">가나다순</option>
              </select>
            </label>

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="스킬 검색 (예: Next.js)"
              className="sm:ml-2 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:focus:ring-zinc-600"
              aria-label="스킬 검색"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((s: Skill) => (
            <article
              key={s.name}
              className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <header className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-white">{s.name}</h4>
                <span className="rounded-full border border-zinc-300 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                  {s.category}
                </span>
              </header>

              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                최근 사용: {new Date(s.lastUsed).toLocaleDateString("ko-KR")}
              </p>

              <div className="mt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-700 dark:text-zinc-300">숙련도</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{s.level}%</span>
                </div>
                <ProgressBar value={s.level} />
              </div>

              {s.usedIn && (
                <a
                  href={s.usedIn}
                  className="mt-3 inline-flex items-center text-xs text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
                >
                  사용 사례 보기 →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
