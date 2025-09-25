"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

type SortKey = "recent" | "popular";

export default function Projects() {
  const [stack, setStack] = useState("ALL");
  const [sort, setSort] = useState<SortKey>("recent");

  const stacks = useMemo(
    () => ["ALL", ...Array.from(new Set(projects.flatMap((p) => p.tags)))],
    []
  );

  const data = useMemo(() => {
    let list = projects.slice();
    if (stack !== "ALL") list = list.filter((p) => p.tags.includes(stack));
    if (sort === "popular") {
      list.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    } else {
      list.sort(
        (a, b) =>
          new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
      );
    }
    return list;
  }, [stack, sort]);

  return (
    <section
      id="projects"
      className="py-24 min-h-[calc(100dvh-73px)] box-border"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-screen-xl px-6">
        <SectionTitle>📁 프로젝트</SectionTitle>

        {/* 툴바 */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {stacks.slice(0, 10).map((s) => (
              <button
                key={s}
                onClick={() => setStack(s)}
                className={`rounded-full border px-3 py-1.5 text-sm transition focus:outline-none focus:ring-2
                            ${stack === s
                              ? "border-zinc-900 bg-zinc-900 text-white focus:ring-zinc-400 dark:border-white dark:bg-white dark:text-zinc-900 dark:focus:ring-zinc-600"
                              : "border-zinc-300 text-zinc-700 hover:bg-zinc-100 focus:ring-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus:ring-zinc-600"}`}
                aria-pressed={stack === s}
              >
                {s}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            정렬
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-zinc-300 bg-white px-2 py-1.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-zinc-400
                         dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:focus:ring-zinc-600"
              aria-label="정렬"
            >
              <option value="recent">최신순</option>
              <option value="popular">인기/성과순</option>
            </select>
          </label>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 gap-8 sm:[grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {data.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
