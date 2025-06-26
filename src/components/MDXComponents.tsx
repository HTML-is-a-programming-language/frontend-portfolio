// src/components/MDXComponents.tsx
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

export const MDXComponents = {
  img: (props: ImageProps) => (
    <div className="my-6">
      <Image
        {...props}
        alt={props.alt ?? ""}
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
    const isInternal = href && href.startsWith("/");
    return isInternal ? (
      <Link href={href!} className="text-indigo-600 hover:underline">
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:underline"
      >
        {children}
      </a>
    );
  },
  pre: (props: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className="overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
      {props.children}
    </code>
  ),
};
