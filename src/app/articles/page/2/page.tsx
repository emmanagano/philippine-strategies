import { getAllArticles } from "@/data/articles";
import Link from "next/link";

export default function ArticlesPage() {
    const articles = getAllArticles().slice(6, 12);

    return (
        <div className="min-h-screen bg-gray-100">
            <section className="py-12 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase tracking-widest">
                    All Articles
                </h1>
                {/* Flat Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {articles.map((article) => (
                        <div key={article.slug} className="w-full px-4 sm:px-0">
                            <div className="relative w-full h-[500px]">
                                <img 
                                    src={`/images/${article.slug}.jpg`} 
                                    alt={article.title} 
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                            {/* Article Content - Minimalist */}
                            <div className="mt-4">
                                <h3 className="text-xl font-medium text-gray-900 uppercase">{article.title}</h3>
                                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{article.description}</p>
                                <p className="text-xs text-gray-500 mt-1">{article.date}</p>
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
                <div className="flex justify-center mt-8 space-x-2">
                    {[1, 2, 3].map((page) => {
                        const isActive = page === 2;
                        return (
                            <Link
                                key={page}
                                href={page === 1 ? "/articles" : `/articles/page/${page}`}
                                className={`px-4 py-2 rounded border ${
                                    isActive
                                        ? "bg-gray-900 text-white border-gray-900"
                                        : "border-gray-300 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {page}
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
