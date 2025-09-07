"use client";
import React, { useState } from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#111828] text-white text-sm text-center py-2">
        📢 Check out our book:{" "}
        <strong>O.I.D.P. - Onli in Da Pilippines.</strong> For U.S. readers,{" "}
        <a
          href="https://www.amazon.com/I-D-P-PILIPPINES-PHILIPPINES-CONSTERNATING-INTERESTING/dp/B0DCVYSPX7"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300 transition"
        >
          Buy Now on Amazon →
        </a>{" "}
        For readers in the Philippines,{" "}
        <Link
          href="/contact"
          className="underline hover:text-gray-300 transition"
        >
          contact us for a signed copy
        </Link>
      </div>
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <header className="bg-white shadow-md transition-all duration-300">
          <div className="container mx-auto p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 mr-12 min-w-[330px]">
              <Link href="/" className="flex items-center">
                <div className="w-12 h-12 relative">
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    width="48"
                    height="48"
                  />
                </div>
                <span className="ml-3 font-semibold text-lg text-black hidden sm:inline">
                  Philippine Strategies
                </span>
                <span className="mx-4 text-gray-400 hidden sm:inline">|</span>
              </Link>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <div className={`hidden lg:flex items-center space-x-10 flex-grow`}>
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                Home
              </Link>
              <Link
                href="/articles"
                className={`${
                  pathname === "/articles"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600 font-semibold"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                Articles
              </Link>
              <Link
                href="/consulting"
                className={`${
                  pathname === "/consulting"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                Consulting
              </Link>
              <Link
                href="/security"
                className={`${
                  pathname === "/security"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                Security Services
              </Link>
              <Link
                href="/blurbs"
                className={`${
                  pathname === "/blurbs"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Blurbs</span>
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Contact</span>
              </Link>
              <Link
                href="/fellows"
                className={`${
                  pathname === "/fellows"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600 font-semibold"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Fellows</span>
              </Link>
              <Link
                href="/newsletter"
                className={`${
                  pathname === "/newsletter"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600 font-semibold"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Newsletter</span>
              </Link>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white shadow-md p-4">
              <Link
                href="/"
                onClick={toggleMobileMenu}
                className={`block py-2 ${
                  pathname === "/"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Home</span>
              </Link>
              <Link
                href="/articles"
                onClick={toggleMobileMenu}
                className={`block py-2 ${
                  pathname === "/articles"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Articles</span>
              </Link>
              <Link
                href="/consulting"
                onClick={toggleMobileMenu}
                className={`block py-2 ${
                  pathname === "/consulting"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Consulting</span>
              </Link>
              <Link
                href="/security"
                onClick={toggleMobileMenu}
                className={`block py-2 ${
                  pathname === "/security"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Security Services</span>
              </Link>
              <Link
                href="/blurbs"
                onClick={toggleMobileMenu}
                className={`block py-2 ${
                  pathname === "/blurbs"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Blurbs</span>
              </Link>
              <Link
                href="/contact"
                onClick={toggleMobileMenu}
                className={`block py-2 ${
                  pathname === "/contact"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Contact</span>
              </Link>
              <Link
                href="/fellows"
                onClick={toggleMobileMenu}
                className={`block py-2 ${
                  pathname === "/fellows"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Fellows</span>
              </Link>
              <Link
                href="/newsletter"
                onClick={toggleMobileMenu}
                className={`block py-2 ${
                  pathname === "/newsletter"
                    ? "text-black font-bold after:scale-x-100"
                    : "text-gray-600"
                } hover:text-gray-900 relative after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100`}
              >
                <span>Newsletter</span>
              </Link>
            </div>
          )}
        </header>
      </div>
      {/* Main Content */}
      <div className="w-full">{children}</div>
      {/* Book Promotion Banner */}
      <div className="bg-[#111828] text-white py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-center text-center md:text-left">
          <img
            src="/images/oidp.jpg"
            alt="OIDP Book Cover"
            className="w-36 h-auto shadow-md"
          />
          <div>
            <h3 className="text-2xl md:text-4xl font-bold italic mb-2">
              O.I.D.P. - ONLI IN DA PILIPPINES !!
            </h3>
            <p className="text-base md:text-lg text-gray-300 mb-2">
              Things That Make the Philippines the Most Outlandish,
              Consternating, Interesting Country in the World
            </p>
            <a
              href="https://www.amazon.com/I-D-P-PILIPPINES-PHILIPPINES-CONSTERNATING-INTERESTING/dp/B0DCVYSPX7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded px-6 py-3 text-base transition"
            >
              Buy Now →
            </a>
            <p className="text-lg text-gray-300 mt-2">
              If you’re located in the Philippines and would like to request a
              signed copy, please{" "}
              <a
                href="/contact"
                className="text-yellow-400 hover:text-red-500 font-semibold transition underline"
              >
                send us a message
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#111828] text-white pt-6 border-t border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 mt-3 items-start px-4">
          {/* Socials & Newsletter (Left Column) */}
          <div className="text-center flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-2 w-full text-center">
              Philippine Strategies
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Learn from more than a century of critical, in-country American
              experience on political, military and industrial aspects of the
              most challenging country in Southeast Asia.
            </p>
            <div className="flex justify-center gap-4 items-center mt-4 w-full">
              <a
                href="https://www.instagram.com/philstrats/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition"
              >
                <FaXTwitter size={28} />
              </a>
            </div>
          </div>
          {/* Quick Links (Middle and Right Columns) */}
          <div className="col-span-2 grid grid-cols-2 gap-x-16 text-center justify-items-center">
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="hover:underline hover:text-yellow-400"
                >
                  Home
                </Link>
                <Link
                  href="/articles"
                  className="hover:underline hover:text-yellow-400"
                >
                  Articles
                </Link>
                <Link
                  href="/blurbs"
                  className="hover:underline hover:text-yellow-400"
                >
                  Blurbs
                </Link>
                <Link
                  href="/contact"
                  className="hover:underline hover:text-yellow-400"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">See More</h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/consulting"
                  className="hover:underline hover:text-yellow-400"
                >
                  Consulting
                </Link>
                <Link
                  href="/fellows"
                  className="hover:underline hover:text-yellow-400"
                >
                  Fellows
                </Link>
                <Link
                  href="/newsletter"
                  className="hover:underline hover:text-yellow-400"
                >
                  Newsletter
                </Link>
                <Link
                  href="/security"
                  className="hover:underline hover:text-yellow-400"
                >
                  Security Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-700 my-4" />
        <div className="bg-[#111828] text-white pt-1 pb-3 text-center text-sm w-full">
          © 2025 Philippine Strategies. All rights reserved.
        </div>
      </footer>
      {/* 
      {typeof window !== "undefined" && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-[#111828] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#2c344f] transition-all"
        >
          ↑ Top
        </button>
      )} 
      */}
      <button
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="fixed bottom-6 right-6 z-50 bg-[#111828] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#2c344f] transition-all"
      >
        ↑ Top
      </button>
    </div>
  );
};

export default Layout;
