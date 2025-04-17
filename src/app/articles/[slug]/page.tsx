import { getArticleBySlug, articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
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
    const processedContent = await remark().use(html).process(article.content);
    const contentHtml = processedContent.toString();

    const currentIndex = articles.findIndex((a) => a.slug === slug);
    const prevArticle = articles[currentIndex - 1] || null;
    const nextArticle = articles[currentIndex + 1] || null;

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <section className="max-w-3xl mx-auto px-6">
                <div className="flex justify-between items-center gap-4 text-sm border-b border-gray-300 pb-6 mb-8">
                    {prevArticle ? (
                        <a href={`/articles/${prevArticle.slug}`} className="flex items-center text-[#111828] hover:underline">
                            <FaArrowLeft className="mr-1" />
                            Previous Article
                        </a>
                    ) : <div />}
                    {nextArticle ? (
                        <a href={`/articles/${nextArticle.slug}`} className="flex items-center text-[#111828] hover:underline">
                            Next Article
                            <FaArrowRight className="ml-1" />
                        </a>
                    ) : <div />}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {article.title}
                </h1>
                <p className="text-sm text-gray-500 mb-6">{article.date}</p>
                <article
                    className="prose prose-lg prose-gray text-gray-900 leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
                <div className="flex justify-between items-center gap-4 text-sm border-t border-gray-300 pt-6 mt-12">
                    {prevArticle ? (
                        <a href={`/articles/${prevArticle.slug}`} className="flex items-center text-[#111828] hover:underline">
                            <FaArrowLeft className="mr-1" />
                            Previous Article
                        </a>
                    ) : <div />}
                    {nextArticle ? (
                        <a href={`/articles/${nextArticle.slug}`} className="flex items-center text-[#111828] hover:underline">
                            Next Article
                            <FaArrowRight className="ml-1" />
                        </a>
                    ) : <div />}
                </div>
            </section>
        </div>
    );
}