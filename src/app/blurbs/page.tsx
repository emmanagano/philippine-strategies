import { blurbs } from "@/data/blurbs";
import PageHeader from "@/app/components/PageHeader";
import MoreInfo from "@/app/components/CTA/MoreInfo";

export default function BlurbsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 bg-[radial-gradient(circle,#0000000d_1px,transparent_1px)] bg-[size:8px_8px]">
      <PageHeader title="Blurbs" />
      <section className="max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {blurbs
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((blurb, index) => (
              <div
                key={index}
                className="relative border-t border-b border-gray-300 py-8"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left - Title Displayed in Staggered Lines */}
                  <a
                    href={blurb.article_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-extrabold text-xl md:text-3xl leading-tight hover:underline block"
                  >
                    {blurb.article_title
                      .split(" ")
                      .reduce<string[][]>(
                        (acc, word) => {
                          if (acc[acc.length - 1].length < 3) {
                            acc[acc.length - 1].push(word);
                          } else {
                            acc.push([word]);
                          }
                          return acc;
                        },
                        [[]]
                      )
                      .map((line, i) => (
                        <div key={i} className="text-center">
                          {line.join(" ")}
                        </div>
                      ))}
                  </a>
                  {/* Right - Date, Commentary, Button */}
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500">{blurb.date}</p>
                    <p className="text-gray-800">{blurb.commentary}</p>
                    <MoreInfo
                      href={blurb.article_link}
                      label="Learn More"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
