"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:pt-0 lg:pb-8 border-t-gray-200 border-t dark:border-t-gray-700">
        <div className="md:pt-6 sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 html.programming.language. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="mailto:html.programming.language@gmail.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://github.com/HTML-is-a-programming-language/engineer-information-processing"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              target="_blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://velog.io/@dev_alchemist/posts"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              target="_blank"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
                id="Velog--Streamline-Simple-Icons"
              >
                <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3 -1.338 3 -3V3c0 -1.662 -1.338 -3 -3 -3H3Zm6.883 6.25c0.63 0 1.005 0.3 1.125 0.9l1.463 8.303c0.465 -0.615 0.846 -1.133 1.146 -1.553 0.465 -0.66 0.893 -1.418 1.283 -2.273 0.405 -0.855 0.608 -1.62 0.608 -2.295 0 -0.405 -0.113 -0.727 -0.338 -0.967 -0.21 -0.255 -0.608 -0.577 -1.193 -0.967 0.6 -0.765 1.35 -1.148 2.25 -1.148 0.48 0 0.878 0.143 1.193 0.428 0.33 0.285 0.494 0.704 0.494 1.26 0 0.93 -0.39 2.093 -1.17 3.488 -0.765 1.38 -2.241 3.457 -4.431 6.232l-2.227 0.156 -1.711 -9.628h-2.25V7.24c0.6 -0.195 1.305 -0.406 2.115 -0.63 0.81 -0.24 1.358 -0.36 1.643 -0.36Z" strokeWidth="1"></path>
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}