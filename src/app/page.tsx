import React from "react";
import Link from "next/link";
import { getAllArticles } from "@/data/articles";
import { getLatestBlurb } from "@/data/blurbs";
import Hero from "./components/Hero";

export default function Home() {
  const articles = getAllArticles();
  const blurb = getLatestBlurb();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-screen h-screen">
        <Hero />
      </div>
      {/* Recent Blogs Section */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Latest Articles
        </h2>
        {/* Featured Blog Post */}
        {articles.length > 0 && (
          <div
            className="relative bg-cover bg-center min-h-[500px] md:min-h-[350px] mb-6 px-4 sm:px-6 overflow-hidden"
            style={{
              backgroundImage: `url('/images/${articles[0].slug}.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative flex items-center justify-center h-full">
              <div className="p-6 max-w-xl text-white text-center">
                <h3 className="text-2xl font-bold">{articles[0].title}</h3>
                <hr className="w-64 border-t-2 border-white my-2 mx-auto" />
                <p className="text-sm text-gray-300">{articles[0].date}</p>
                <p className="mt-2 text-gray-200">{articles[0].description}</p>
                <Link
                  href={`/articles/${articles[0].slug}`}
                  className="inline-block mt-4 px-6 py-2.5 bg-gradient-to-r from-gray-900 via-red-800 to-gray-700 text-white font-medium text-sm rounded-md border border-white hover:border-red-400 hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  Dive into the Story →
                </Link>
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
              <Link
                href={`/articles/${article.slug}`}
                className="text-black border border-black px-4 py-2 rounded-md mt-2 inline-block hover:bg-black hover:text-white hover:scale-[1.03] transform transition-all duration-200"
              >
                Continue Reading →
              </Link>
            </div>
          ))}
        </div>
        {/* View All Blogs Button */}
        <div className="text-center mt-8">
          <Link
            href="/articles"
            className="inline-block px-6 py-3 bg-black text-white font-semibold text-base rounded-md hover:bg-gray-100 hover:text-black border border-black hover:scale-[1.03] transform transition-all duration-200"
          >
            View All Articles
          </Link>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle,#0000001a_1px,transparent_1px)] bg-[size:8px_8px] opacity-50"></div>
          {/* Top Separation Line */}
          <div className="border-t border-gray-400 mb-8"></div>
          {/* Content Grid */}
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
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
              <a
                href={blurb.article_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black border border-black px-4 py-2 rounded-md mt-2 inline-block hover:bg-black hover:text-white hover:scale-[1.03] transform transition-all duration-200"
              >
                Discover →
              </a>
            </div>
          </div>
          {/* Bottom Separation Line */}
          <div className="border-t border-gray-400 mt-8"></div>
          <div className="text-center mt-8">
            <Link
              href="/blurbs"
              className="inline-block px-6 py-3 bg-black text-white font-semibold text-base rounded-md hover:bg-gray-100 hover:text-black border border-black hover:scale-[1.03] transform transition-all duration-200"
            >
              View All Blurbs
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
