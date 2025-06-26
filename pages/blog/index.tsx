// pages/blog/index.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import { getAllPostsMeta } from "../../lib/posts";

interface Props {
  indexSource: MDXRemoteSerializeResult;
  posts: { slug: string; title: string; date: string }[];
}

export default function BlogIndex({ indexSource, posts }: Props) {
  return (
    <main className="prose dark:prose-invert mx-auto max-w-3xl p-6">
      {/* MDX 소개·목차 */}
      <MDXRemote {...indexSource} />

      {/* 자동 생성되는 포스트 목록 */}
      <h2>전체 글 목록</h2>
      <ul className="space-y-2">
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link
              href={`/blog/${slug}`}
              className="text-indigo-600 hover:underline"
            >
              {title}{" "}
              <span className="text-gray-500">
                ({new Date(date).toLocaleDateString()})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  // index.mdx 읽어오기
  const indexPath = path.join(process.cwd(), "posts/index.mdx");
  const source = fs.readFileSync(indexPath, "utf8");
  const { content, data } = matter(source);
  const indexSource = await serialize(content, { scope: data });

  // 기존 포스트 메타 가져오기
  const posts = await getAllPostsMeta();
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return { props: { indexSource, posts } };
}
