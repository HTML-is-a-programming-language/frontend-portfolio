"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle"

const SECTION_IDS = ["hero", "about", "projects", "skills", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];

function useSectionSpy(threshold = 0.6) {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId;
          if (entry.isIntersecting) setActive(id);
        });
      },
      { threshold }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [threshold]);

  return active;
}

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const active = useSectionSpy(0.6);

    useEffect(() => {
        function onDown(e: MouseEvent) {
            if (!navOpen) return;
            const target = e.target as Node;
            if (navRef.current && !navRef.current.contains(target)) {
                setNavOpen(false);
            }
        }
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [navOpen]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setNavOpen(false);
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    const handleNavClick = () => setNavOpen(false);

    const linkBase = "block px-3 py-2 rounded-md transition outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600";

    const linkInactive = "text-zinc-900 dark:text-zinc-200 opacity-80 hover:opacity-100 hover:text-zinc-950 dark:hover:text-white";

    const linkActive = "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900";

    const isActive = (id: SectionId) => (active === id ? linkActive : "opacity-80 hover:opacity-100");

    return (
        <header className="max-w-screen-xl flex flex-wrap items-center justify-between gap-8 mx-auto p-4 bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 border-b">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse shrink-0">
                <h1 className="text-lg font-black text-gray-900 dark:text-white text-shadow-hover">MAGNUM OPUS</h1>
            </Link>
            <nav className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex md:order-2 sm:gap-2 lg:gap-4">
                    <button
                        data-collapse-toggle="navbar-nav"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-nav"
                        aria-expanded={navOpen}
                        onClick={() => {
                            setNavOpen(v => !v);
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div
                    ref={navRef}
                    className={[
                        "absolute md:top-1/2 left-0 right-0 md:left-1/2 top-full z-40 mx-auto max-w-screen-xl p-4 origin-top transform-gpu transition duration-300 md:-translate-1/2",
                        navOpen
                        ? "scale-y-100 opacity-100 pointer-events-auto"
                        : "scale-y-0 opacity-0 pointer-events-none",
                        "md:scale-y-100 md:opacity-100 md:pointer-events-auto md:transform-none md:p-0 md:max-w-none md:w-auto"
                        ].join(" ")}
                    id="navbar-nav"
                >
                    <ul className="flex flex-col md:gap-8 justify-center p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#about"
                                onClick={handleNavClick}
                                aria-current={active === "about" ? "page" : undefined}
                                className={`${linkBase} ${active === "about" ? linkActive : linkInactive}`}
                            >소개</a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={handleNavClick}
                                aria-current={active === "projects" ? "page" : undefined}
                                className={`${linkBase} ${active === "projects" ? linkActive : linkInactive}`}
                            >프로젝트</a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                onClick={handleNavClick}
                                aria-current={active === "skills" ? "page" : undefined}
                                className={`${linkBase} ${active === "skills" ? linkActive : linkInactive}`}
                            >기술스택</a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={handleNavClick}
                                aria-current={active === "contact" ? "page" : undefined}
                                className={`${linkBase} ${active === "contact" ? linkActive : linkInactive}`}
                            >연락하기</a>
                        </li>
                    </ul>
                </div>
                <ThemeToggle></ThemeToggle>
            </nav>
        </header>
    );
}