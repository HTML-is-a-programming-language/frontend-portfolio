// src/components/MDXComponents.tsx
import Image from "next/image";
import Link from "next/link";

export const MDXComponents = {
  img: (props: any) => (
    <div className="my-6">
      <Image
        {...props}
        alt={props.alt}
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
  ),
  a: ({ href, children }: any) => {
    const isInternal = href && href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className="text-indigo-600 hover:underline">
          {children}
        </Link>
      );
    }
    return (
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
  pre: (props: any) => (
    <pre
      className="overflow-x-auto rounded-lg bg-gray-100 p-4 dark:bg-gray-800"
      {...props}
    />
  ),
  code: (props: any) => (
    <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">
      {props.children}
    </code>
  ),
};
