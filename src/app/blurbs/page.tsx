import { blurbs } from "@/data/blurbs";

export default function BlurbsPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 bg-[radial-gradient(circle,#0000000d_1px,transparent_1px)] bg-[size:8px_8px]">
            <section className="max-w-4xl mx-auto px-6">
                <h1 className="text-2xl font-bold text-center text-gray-900 mb-10">Blurbs</h1>
                <div className="space-y-16">
                    {blurbs
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                        .map((blurb, index) => (
                            <div key={index} className="relative border-t border-b border-gray-300 py-8">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    {/* Left - Title Displayed in Staggered Lines */}
                                    <a
                                        href={blurb.article_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 font-extrabold text-xl md:text-3xl leading-tight hover:underline block"
                                    >
                                        {blurb.article_title.split(" ").reduce<string[][]>((acc, word) => {
                                            if (acc[acc.length - 1].length < 3) {
                                                acc[acc.length - 1].push(word);
                                            } else {
                                                acc.push([word]);
                                            }
                                            return acc;
                                        }, [[]]).map((line, i) => (
                                            <div key={i} className="text-center">
                                                {line.join(" ")}
                                            </div>
                                        ))}
                                    </a>
                                    {/* Right - Date, Commentary, Button */}
                                    <div className="space-y-4">
                                        <p className="text-sm text-gray-500">{blurb.date}</p>
                                        <p className="text-gray-800">{blurb.commentary}</p>
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
                            </div>
                        ))}
                </div>
            </section>
        </div>
    );
}
