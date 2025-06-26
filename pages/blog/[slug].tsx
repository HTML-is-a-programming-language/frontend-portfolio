// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getAllPostsMeta, getPostBySlug } from "../../lib/posts";
import { MDXComponents } from "@/components/MDXComponents";

interface Props {
  source: MDXRemoteSerializeResult;
  meta: { title: string; date: string };
}

export default function BlogPost({ source, meta }: Props) {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto max-w-3xl p-6">
      <h1 className="mb-2 text-4xl font-bold">{meta.title}</h1>
      <p className="mb-6 text-gray-500">
        {new Date(meta.date).toLocaleDateString()}
      </p>
      <MDXRemote {...source} components={MDXComponents} />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsMeta();
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { meta, mdxSource } = await getPostBySlug(params!.slug as string);
  return {
    props: {
      meta,
      source: mdxSource,
    },
  };
};
