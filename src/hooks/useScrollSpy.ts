// hooks/useScrollSpy.ts
import { useEffect, useState } from "react";

type Options = {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export function useScrollSpy(
  ids: string[],
  { root, rootMargin = "-40% 0px -55% 0px", threshold = [0, 0.25, 0.5, 0.75, 1] }: Options = {}
) {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { root: root ?? null, rootMargin, threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, root, rootMargin, threshold]);

  return activeId;
}
