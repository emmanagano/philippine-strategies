import "../article.css";
import { getArticleBySlug, articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPost({ params }: any) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return notFound();
  }
  const contentHtml = article.content;

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = articles[currentIndex - 1] || null;
  const nextArticle = articles[currentIndex + 1] || null;

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <section className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between items-center gap-4 text-sm border-b border-gray-300 pb-6 mb-8">
          {prevArticle ? (
            <a
              href={`/articles/${prevArticle.slug}`}
              className="flex items-center text-[#111828] hover:underline"
            >
              <FaArrowLeft className="mr-1" />
              Previous Article
            </a>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <a
              href={`/articles/${nextArticle.slug}`}
              className="flex items-center text-[#111828] hover:underline"
            >
              Next Article
              <FaArrowRight className="ml-1" />
            </a>
          ) : (
            <div />
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">{article.date}</p>
        <img
          src={`/images/${article.slug}.jpg`}
          alt={article.title}
          className="w-full h-[500px] object-cover mb-6"
        />
        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <div className="flex justify-between items-center gap-4 text-sm border-t border-gray-300 pt-6 mt-12">
          {prevArticle ? (
            <a
              href={`/articles/${prevArticle.slug}`}
              className="flex items-center text-[#111828] hover:underline"
            >
              <FaArrowLeft className="mr-1" />
              Previous Article
            </a>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <a
              href={`/articles/${nextArticle.slug}`}
              className="flex items-center text-[#111828] hover:underline"
            >
              Next Article
              <FaArrowRight className="ml-1" />
            </a>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found | Philippine Strategies",
      description: "This article could not be found.",
    };
  }

  return {
    metadataBase: new URL("https://philippinestrategies.com"),
    title: `${article.title} | Philippine Strategies`,
    description: article.description,
    authors: [{ name: article.author }],
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://philippinestrategies.com/articles/${article.slug}`,
      images: [
        {
          url: `/images/${article.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [`/images/${article.slug}.jpg`],
    },
  };
}
