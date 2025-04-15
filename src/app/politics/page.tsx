import { getAllArticles } from "@/data/articles";

export default function PoliticsPage() {
    const articles = getAllArticles().filter(article => article.category === "politics");

    return (
        <div className="min-h-screen bg-gray-100">
            <section className="py-12 max-w-6xl mx-auto px-4 md:px-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase tracking-widest">
                    Politics
                </h1>
                <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-base">
                    Analysis, commentary, and insights on the current political landscape of the Philippines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {articles.map((article) => (
                        <div key={article.slug} className="w-full">
                            <div className="relative w-full h-[500px]">
                                <img 
                                    src={`/images/${article.slug}.jpg`} 
                                    alt={article.title} 
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
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
            </section>
        </div>
    );
}
