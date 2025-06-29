// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const postsDir = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  // 블로그 본문 파일만 포함 (index.mdx, portfolio.mdx 등 제외)
  const files = fs
    .readdirSync(postsDir)
    .filter((fn) => fn.endsWith(".mdx") && fn !== "index.mdx");

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(source);
    return { slug, title: data.title, date: data.date };
  });
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    scope: data, // front-matter를 props로 전달
  });
  return {
    meta: { slug, title: data.title, date: data.date },
    mdxSource,
  };
}
