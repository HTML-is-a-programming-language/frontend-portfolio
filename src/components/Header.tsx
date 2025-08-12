"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    return (
        <header className="max-w-screen-xl flex flex-wrap items-center justify-between gap-8 mx-auto p-4 bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 border-b">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse shrink-0">
                <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-gray-500 dark:text-gray-400">포트폴리오</h1>
            </Link>
            <nav className="flex flex-wrap items-center justify-between md:flex-grow gap-8">
                <div className="flex md:order-2 sm:gap-2 lg:gap-4">
                    <button
                        data-collapse-toggle="navbar-nav"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-nav"
                        aria-expanded={navOpen}
                        onClick={() => {
                            setNavOpen(v => !v);
                            setSearchOpen(false);
                            setSettingsOpen(false);
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-settings"
                        aria-expanded={settingsOpen}
                        onClick={() => {
                            setSettingsOpen(v => !v);
                            setSearchOpen(false);
                            setNavOpen(false);
                        }}
                    >
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={[
                        "absolute left-0 right-0 top-full z-40 mx-auto max-w-screen-xl p-4 origin-top transform-gpu transition duration-300",
                        navOpen
                        ? "scale-y-100 opacity-100 pointer-events-auto"
                        : "scale-y-0 opacity-0 pointer-events-none",
                        "md:static md:scale-y-100 md:opacity-100 md:pointer-events-auto md:transform-none md:p-0 md:max-w-none md:w-auto"
                        ].join(" ")}
                    id="navbar-nav"
                >
                    <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 gap-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">소개</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">프로젝트</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">기술스택</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">연락하기</a>
                        </li>
                    </ul>
                </div>
                <div
                    id="navbar-settings"
                    className={[
                        "absolute right-0 top-full z-40 mx-auto p-4 origin-top transform-gpu transition duration-300",
                        settingsOpen
                        ? "scale-y-100 opacity-100 pointer-events-auto"
                        : "scale-y-0 opacity-0 pointer-events-none",
                    ].join(" ")}
                >
                    <div className="flex flex-col bg-gray-50 dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 rounded-lg">
                        <ThemeToggle></ThemeToggle>
                    </div>
                </div>
            </nav>
        </header>
    );
}