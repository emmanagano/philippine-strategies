"use client";
import { useState, useEffect } from "react";
import { staticArticles, Article } from "@/data/staticArticles";

export default function ArticlesPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const sorted = [...staticArticles].sort((a, b) => b.id - a.id);
    setArticles(sorted);
  }, []);

  const visibleArticles = articles.slice(0, visibleCount);
  const canLoadMore = visibleCount < articles.length;

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-widest">
          Explore All Articles
        </h1>
        {/* Flat Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {visibleArticles.map((article) => (
            <div key={article.slug} className="w-full px-4 sm:px-0">
              <a
                href={`/articles/${article.slug}`}
                className="relative w-full h-[500px] block"
              >
                <img
                  src={`/images/${article.slug}.jpg`}
                  alt={article.title}
                  className="w-full h-[500px] object-cover"
                />
              </a>
              {/* Article Content - Minimalist */}
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900">
                  <a
                    href={`/articles/${article.slug}`}
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-xs text-gray-500 mt-1">{article.date}</p>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {article.description}
                </p>
                <a
                  href={`/articles/${article.slug}`}
                  className="inline-block text-gray-900 text-sm mt-4 tracking-wide uppercase border-b border-gray-900 hover:text-gray-600 transition-all"
                >
                  Read More →
                </a>
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
