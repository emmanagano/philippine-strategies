import { notFound } from "next/navigation";
import { fellows } from "@/data/fellowSeed";

export function generateStaticParams() {
  return fellows.map((fellow) => ({
    slug: fellow.slug,
  }));
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
          </div>
        </div>
      </div>
    </div>
  );
}
