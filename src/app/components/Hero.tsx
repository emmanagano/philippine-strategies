import Link from "next/link";
import { getAllArticles } from "@/data/articles";

export default function Hero() {
    const articles = getAllArticles();
    const latestArticle = articles.length > 0 ? articles[0] : null;

    return (
        <section 
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/40"></div> {/* Optional overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <h1 className="text-5xl font-bold">Welcome to Philippine Strategies</h1>
                <p className="text-xl mt-4 max-w-2xl italic font-bold">
                    “Before charging in with the cavalry, one must always have a good scouting team.” <br />
                    <span className="text-sm font-normal not-italic">– Lieutenant-General Robert Stephenson Smyth Baden-Powell, 1st Baron Baden-Powell, 5th Dragoon Guards, British Army</span>
                </p>
                <p className="text-lg mt-4 max-w-3xl">
                    Learn from more than a century of critical, in-country American experience on political, military and industrial aspects of the most challenging country in Southeast Asia.
                </p>
                {latestArticle && (
                    <Link href={`/articles/${latestArticle.slug}`}>
                        <button className="px-4 py-2 bg-white text-gray-900 font-medium text-base rounded-md shadow-md border border-gray-900 hover:bg-gray-100 transition-transform transform hover:scale-105 mt-6">
                            Read the Latest Article
                        </button>
                    </Link>
                )}
            </div>
        </section>
    );
}
