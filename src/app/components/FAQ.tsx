"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Philippine Strategies?",
    answer:
      "Philippine Strategies is a collection of in-depth articles offering geopolitical, economic, and cultural insights on the Philippines. It’s especially valuable for foreign readers seeking long-term context beyond headlines.",
  },
  {
    question: "Who writes the content on this site?",
    answer:
      "All articles are written by Robert Wagner, a strategic analyst and longtime resident of the Philippines whose family has been deeply rooted in the country since 1899. His work offers rare historical and strategic depth.",
  },
  {
    question: "What kinds of topics do you cover?",
    answer:
      "We cover military affairs, foreign investment, politics, propaganda, and cultural commentary — all with a focus on strategic understanding.",
  },
  {
    question: "Is the content based on facts, opinions, or both?",
    answer:
      "Both. Articles are grounded in research and historical analysis, often combined with personal insights and strategic interpretation.",
  },
  {
    question: "Can I suggest a topic or article idea?",
    answer:
      "Yes. We welcome thoughtful suggestions and topic ideas. Feel free to use the contact form above to get in touch with us.",
  },
  {
    question: "Do you accept guest writers or contributors?",
    answer:
      "We’re open to featuring guest contributions if the work aligns with our voice and mission. Reach out if you’re interested.",
  },
  {
    question: "Why are the topics on this site relevant to Filipinos today?",
    answer:
      "Because they examine root issues and long-term power dynamics that are often overlooked, but critical to national development.",
  },
  {
    question: "How often is the site updated with new content?",
    answer:
      "We aim to post once or twice a week depending on relevance, research, and available time for analysis.",
  },
  {
    question: "How can I contact you directly?",
    answer:
      "Use the contact form above to send us a message. We do our best to reply promptly.",
  },
  {
    question: "Can I share or repost your articles?",
    answer:
      "Yes. You’re welcome to share articles as long as you credit Philippine Strategies and link to the original post.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-4 py-3 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <span
                  className={`font-medium text-sm sm:text-base transition-colors duration-200 ${
                    openIndex === index ? "text-blue-700" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-200 text-gray-500 ${
                    openIndex === index ? "rotate-90 text-blue-700" : ""
                  }`}
                >
                  ▶
                </span>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 text-sm leading-relaxed ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-4 pb-4 pt-2 bg-gray-100 text-gray-800">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
