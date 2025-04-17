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
      <div className="absolute inset-0 bg-black/40"></div>{" "}
      {/* Optional overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl font-bold">Welcome to Philippine Strategies</h1>
        <p className="text-xl mt-4 max-w-2xl italic font-bold">
          “Before charging in with the cavalry, one must always have a good
          scouting team.” <br />
          <span className="text-sm font-normal not-italic">
            – Lieutenant-General Robert Stephenson Smyth Baden-Powell, 1st Baron
            Baden-Powell, 5th Dragoon Guards, British Army
          </span>
        </p>
        <p className="text-lg mt-4 max-w-3xl">
          Learn from more than a century of critical, in-country American
          experience on political, military and industrial aspects of the most
          challenging country in Southeast Asia.
        </p>
        {latestArticle && (
          <Link href={`/articles/${latestArticle.slug}`}>
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black font-semibold text-base rounded-md border border-black hover:from-black hover:via-gray-800 hover:to-black hover:text-white hover:scale-[1.03] transform transition-all duration-200 mt-6">
              Read the Latest Article
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}
