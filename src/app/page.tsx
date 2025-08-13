import React from "react";
import Link from "next/link";
import { getAllArticles } from "@/data/articles";
import { getLatestBlurb } from "@/data/blurbs";
import Hero from "./components/Hero";
import SecondaryCTA from "./components/CTA/Secondary";
import MoreInfo from "./components/CTA/MoreInfo";

export default function Home() {
  const articles = getAllArticles();
  const blurb = getLatestBlurb();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div>
        <Hero />
      </div>
      {/* Marquee Section */}
      <section className="w-full bg-gray-100 overflow-hidden">
        <div className="relative w-full flex items-center h-20">
          <div className="absolute whitespace-nowrap animate-marquee text-[5vw] font-extrabold uppercase tracking-wider text-black">
            <span className="mx-8">
              FRESH ARTICLES WEEKLY - READ OUR LATEST POST
            </span>
          </div>
        </div>
      </section>
      {/* Recent Blogs Section */}
      <section className="max-w-4xl mx-auto py-12">
        {/* Featured Blog Post */}
        {articles.length > 0 && (
          <div className="relative bg-gray-200  mb-6 px-4 py-6 sm:px-6 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Content Side */}
              <div className="text-black">
                <p className="text-sm text-gray-600 mb-2">{articles[0].date}</p>
                <Link href={`/articles/${articles[0].slug}`}>
                  <h3 className="text-2xl font-bold mb-3 hover:underline hover:text-gray-800 transition-colors duration-200">
                    {articles[0].title}
                  </h3>
                </Link>
                <p className="text-gray-800 mb-4">{articles[0].description}</p>
                <MoreInfo
                  href={`/articles/${articles[0].slug}`}
                  label="Read Article"
                />
              </div>

              {/* Image Side */}
              <div className="w-full h-full">
                <img
                  src={`/images/${articles[0].slug}.jpg`}
                  alt={articles[0].title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
        {/* Latest Articles List - Flat & Separated */}
        <div className="border-t border-gray-300">
          {articles.slice(1, 4).map((article) => (
            <div
              key={article.slug}
              className="py-6 border-b border-gray-300 px-4 md:px-0"
            >
              <Link href={`/articles/${article.slug}`}>
                <h3 className="text-xl font-semibold text-black hover:text-gray-800 hover:underline transition-colors duration-200">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600">{article.date}</p>
              <p className="text-gray-800 mt-2">{article.description}</p>
              <MoreInfo
                href={`/articles/${article.slug}`}
                label="Read Article"
              />
            </div>
          ))}
        </div>
        {/* View All Blogs Button */}
        <div className="text-center mt-8">
          <SecondaryCTA label="View All Articles" href="/articles" />
        </div>
      </section>
      {/* Newsletter Subscription CTA */}
      <div className="text-black py-8 px-4 sm:px-6 mt-4 mb-16">
        <div className="max-w-xl mx-auto text-center border border-black rounded-md p-8">
          <h3 className="text-2xl font-semibold mb-2">JOIN OUR NEWSLETTER</h3>
          <p className="text-gray-700 mb-6 text-sm">
            Enter your email address to get notified about new articles and
            weekly blurbs. No spam, just insights.
          </p>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/philippinestrategies"
            method="post"
            className="flex items-center border border-black rounded-full overflow-hidden"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="px-6 py-4 w-full bg-gray-100 text-black placeholder-gray-600 text-lg focus:outline-none rounded-l-full"
            />
            <button
              type="submit"
              className="bg-black text-white text-2xl px-6 py-4 rounded-r-full hover:bg-gray-100 hover:text-black border-l border-black hover:scale-[1.03] transition-all duration-200"
            >
              →
            </button>
          </form>
        </div>
      </div>
      {/* Blurbs Section */}
      {blurb && (
        <section className="relative max-w-6xl mx-auto py-12 px-6">
          {/* Background Dotted Texture */}
          <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle,#0000001a_1px,transparent_1px)] bg-[size:8px_8px] opacity-50"></div>
          {/* Top Separation Line */}
          <div className="border-t border-gray-400 mb-8"></div>
          {/* Content Grid */}
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Staggered Title */}
            <div>
              <div className="text-gray-900 font-extrabold text-6xl md:text-7xl uppercase leading-tight">
                <div className="text-left">Blurb</div>
                <div className="text-center">Of The</div>
                <div className="text-right">Week</div>
              </div>
            </div>
            {/* Right Side - Content */}
            <div className="space-y-4">
              <p className="text-sm text-gray-500">{blurb.date}</p>
              <a
                href={blurb.article_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-gray-900 hover:underline block"
              >
                {blurb.article_title}
              </a>
              <p className="text-gray-700 leading-relaxed">
                {blurb.commentary}
              </p>
              <MoreInfo href={blurb.article_link} label="Discover" />
            </div>
          </div>
          {/* Bottom Separation Line */}
          <div className="border-t border-gray-400 mt-8"></div>
          <div className="text-center mt-8 relative z-10">
            <SecondaryCTA label="View All Blurbs" href="/blurbs" />
          </div>
        </section>
      )}
    </div>
  );
}
