import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getDocContent } from "@/lib/docs";
import { notFound } from "next/navigation";

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const content = getDocContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="flex-1 overflow-y-auto p-8 lg:p-16">
      <article className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-4xl prose-a:text-indigo-600 hover:prose-a:text-indigo-500 prose-img:rounded-xl prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
