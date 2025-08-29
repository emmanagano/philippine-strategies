"use client";
import { useState, useEffect } from "react";
import { staticArticles, Article } from "@/data/staticArticles";
import PageHeader from "@/app/components/PageHeader";
import Author from "@/app/components/Author";
import MoreInfo from "@/app/components/CTA/MoreInfo";

export default function ArticlesPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const sorted = [...staticArticles].sort((a, b) => b.id - a.id);
    setArticles(sorted);
  }, []);

  const visibleArticles = articles.slice(1, visibleCount + 1);
  const canLoadMore = visibleCount < articles.length;

  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="Articles" />
      {/* Featured Article Section */}
      <section className="w-full bg-gray-200 py-20">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
          <div>
            <Author date={articles[0]?.date || ""} className="mb-2" />
            <a href={`/articles/${articles[0]?.slug}`}>
              <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4 hover:underline">
                {articles[0]?.title}
              </h2>
            </a>
            <a href={`/articles/${articles[0]?.slug}`}>
              <p className="text-gray-700 mb-6">{articles[0]?.description}</p>
            </a>
            <MoreInfo
              label="Read Article"
              href={`/articles/${articles[0]?.slug}`}
            />
          </div>
          <a
            href={`/articles/${articles[0]?.slug}`}
            className="w-full flex items-center justify-center"
          >
            <img
              src={`/images/${articles[0]?.slug}.jpg`}
              alt={articles[0]?.alt}
              className="h-full object-cover rounded"
            />
          </a>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visibleArticles.map((article) => (
            <div key={article.slug} className="w-full px-4 sm:px-0">
              <div className="relative w-full h-[400px] group overflow-hidden">
                <a href={`/articles/${article.slug}`}>
                  <img
                    src={`/images/${article.slug}.jpg`}
                    alt={article.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={`/articles/${article.slug}`}
                    className="inline-block bg-black text-white px-4 py-2 text-sm font-medium rounded hover:bg-gray-800 transition"
                  >
                    Read Now
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900">
                  <a
                    href={`/articles/${article.slug}`}
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </h3>
                <Author date={article.date} className="mt-1" />
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {article.description}
                </p>
                <MoreInfo
                  label="Read More"
                  href={`/articles/${article.slug}`}
                />
              </div>
            </div>
          ))}
        </div>
        {canLoadMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-block px-6 py-3 bg-gray-100 text-black font-semibold text-base rounded-md hover:bg-black hover:text-white border border-black hover:scale-[1.03] transform transition-all duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
