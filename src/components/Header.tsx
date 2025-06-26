/**
 * Header 컴포넌트
 *
 * - fixed 헤더
 * - 메뉴 버튼
 * - 홈 링크
 */
"use client";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-[2000] flex h-[56] w-full items-center gap-[8] px-[16]">
      <button
        type="button"
        className="cursor-pointer rounded-full p-[8] hover:bg-gray-100 dark:hover:bg-white"
        aria-label="메뉴"
        aria-pressed="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"
            className="dark:fill-white"
          ></path>
        </svg>
      </button>
      <Link
        href="/"
        className="rounded-full p-[8] hover:bg-gray-100 dark:hover:bg-white"
        aria-label="홈"
        title="홈"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="fill-black dark:fill-white"
        >
          <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
        </svg>
      </Link>
      <Link href="/blog" className="px-4 hover:underline">
        Blog
      </Link>
    </header>
  );
}
