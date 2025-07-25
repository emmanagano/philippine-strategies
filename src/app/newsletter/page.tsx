export default function NewsletterPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-black py-8 px-4 sm:px-6">
        <div className="mx-auto text-center border border-black rounded-lg px-8 py-10">
          <img
            src="/images/newsletter-logo.png"
            alt="Newsletter Logo"
            className="mx-auto mb-4 w-40 h-auto"
          />
          <h3 className="text-2xl font-semibold mb-3">JOIN OUR NEWSLETTER</h3>
          <p className="text-gray-700 mb-8 text-base">
            Enter your email address to get notified about new articles. No
            spam, just insights.
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
    </div>
  );
}
