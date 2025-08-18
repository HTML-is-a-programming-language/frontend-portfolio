"use client";
import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "projects", "skills", "contact"] as const;
export type SectionId = typeof SECTION_IDS[number];

export function useSectionSpy(offset = 0.6) {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) setActive(id);
        });
      },
      {
        root: null,
        threshold: offset,
      }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [offset]);

  return { active };
}