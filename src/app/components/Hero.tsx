import PrimaryCTA from "@/app/components/CTA/Primary";
import { getAllArticles } from "@/data/articles";

export default function Hero() {
  const articles = getAllArticles();
  const latestArticle = articles.length > 0 ? articles[0] : null;

  return (
    <div className="w-full overflow-x-hidden bg-gray-100 text-black text-center pt-16 pb-6 relative z-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase">
        PHILIPPINE STRATEGIES
      </h1>
      {latestArticle && (
        <div className="mt-8 mb-10">
          <PrimaryCTA
            href={`/articles/${latestArticle.slug}`}
            label="Read Our Latest Article →"
          />
        </div>
      )}
      <div className="relative w-full h-[65vh] overflow-hidden mt-8 rounded-2xl mx-auto max-w-full px-4">
        <img
          src="/images/hero.jpg"
          alt="Hero Banner"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
    </div>
  );
}
