"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (!navOpen) return;
            const target = e.target as Node;

            if (
                navRef.current &&
                !navRef.current.contains(target)
            ) {
                setNavOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [navOpen]);

    return (
        <header className="max-w-screen-xl flex flex-wrap items-center justify-between gap-8 mx-auto p-4 bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 border-b">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse shrink-0">
                {/* <svg className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
                </svg> */}
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
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
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
                            <a href="#" className="block py-2 px-3 text-gray-900  dark:text-white text-shadow-hover" aria-current="page">소개</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900  dark:text-white text-shadow-hover">프로젝트</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900  dark:text-white text-shadow-hover">기술스택</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900  dark:text-white text-shadow-hover">연락하기</a>
                        </li>
                    </ul>
                </div>
                <ThemeToggle></ThemeToggle>
            </nav>
        </header>
    );
}