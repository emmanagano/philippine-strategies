import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fellows } from "@/data/fellowSeed";

export function generateStaticParams() {
  return fellows.map((fellow) => ({
    slug: fellow.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fellow = fellows.find((f) => f.slug === slug);

  if (!fellow) {
    return {
      title: "Fellow Not Found | Philippine Strategies",
      description: "This fellow profile could not be found.",
    };
  }

  return {
    metadataBase: new URL("https://philippinestrategies.com"),
    title: fellow.metadata.title,
    description: fellow.metadata.description,
    keywords: fellow.metadata.keywords,
    openGraph: {
      title: fellow.metadata.title,
      description: fellow.metadata.description,
      images: [
        {
          url: `/images/fellows/${fellow.slug}-team.png`,
          width: 1200,
          height: 630,
          alt: fellow.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fellow.metadata.title,
      description: fellow.metadata.description,
      images: [`/images/fellows/${fellow.slug}-team.png`],
    },
  };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function FellowPage({ params }: any) {
  const { slug } = params;
  const fellow = await fellows.find((f) => f.slug === slug);

  if (!fellow) return notFound();

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 min-h-screen">
        <div className="px-6 py-12 max-w-3xl mx-auto text-[#111828]">
          <div className="flex flex-col items-center space-y-6">
            <img
              src={`${fellow.fellowImage}`}
              alt={fellow.name}
              className="rounded-lg shadow-md w-48 h-48 object-cover"
            />
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                {fellow.name} – {fellow.title}
              </h1>
              <p className="italic underline text-sm mt-1">
                {fellow.fellowType}
              </p>
            </div>
            <p className="text-base">{fellow.achievements}</p>
            <p className="text-base">{fellow.shortBio}</p>
            <ul className="list-disc list-inside text-base space-y-1 text-left w-full">
              {fellow.keyTakeaways.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="space-y-4 pt-6">
              {fellow.content.map((para, i) => (
                <p className="text-base" key={i}>
                  {para}
                </p>
              ))}
            </div>
            {/* Explore other fellows */}
            <div className="pt-12 mt-8 border-t border-gray-300">
              <h2 className="text-xl font-semibold mb-6 text-center">
                Explore Other Fellows
              </h2>
              <ul className="space-y-4">
                {fellows
                  .filter((f) => f.slug !== slug)
                  .map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/fellows/${other.slug}`}
                        className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 hover:shadow transition"
                      >
                        <img
                          src={`${other.fellowImage}`}
                          alt={other.name}
                          className="h-20 w-20 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">
                            {other.name}
                          </h3>
                          <p className="text-sm text-gray-700 line-clamp-3">
                            {other.shortBio}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
