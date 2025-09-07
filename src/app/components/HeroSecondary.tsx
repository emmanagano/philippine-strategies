import Link from "next/link";
import { getAllArticles } from "@/data/articles";
import Author from "./Author";

export default function HeroSecondary() {
  const articles = getAllArticles();
  const latestArticle = articles.length > 0 ? articles[0] : null;

  return (
    <div className="w-full overflow-x-hidden bg-gray-100 text-black pt-16 pb-6 px-6 relative z-20 max-w-6xl mx-auto">
      {latestArticle && (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <p className="text-sm uppercase text-gray-600 font-semibold mb-2 border-b border-[#111828]">
              Latest Article
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              <Link href={`/articles/${latestArticle.slug}`}>
                <span className="hover:text-red-600 transition-colors duration-200">
                  {latestArticle.title}
                </span>
              </Link>
            </h2>
            <p className="text-md md:text-lg text-gray-800 mb-4">
              {latestArticle.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <p>{latestArticle.date}</p>
              <Author />
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/2">
            <Link href={`/articles/${latestArticle.slug}`}>
              <img
                src={`/images/${latestArticle.slug}.jpg`}
                alt={latestArticle.alt || latestArticle.title}
                className="w-full h-auto rounded-xl object-cover hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
