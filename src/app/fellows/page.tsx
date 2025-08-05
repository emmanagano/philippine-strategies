"use client";
import Image from "next/image";
import { fellows } from "@/data/fellowSeed";

export default function FellowsPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 text-[#111828]">
      <div className="max-w-6xl mx-auto">
        <section className="py-16 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-wide uppercase">
            Fellows
          </h1>
        </section>
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#f5d90a_1px,_transparent_1px)] [background-size:20px_20px] opacity-20 -z-10 rounded-lg" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {fellows.map((fellow) => (
              <div
                key={fellow.name}
                className="flex flex-col items-center space-y-2"
              >
                <div className="overflow-hidden w-full h-[480px] relative">
                  <a
                    href={`/fellows/${fellow.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full h-full"
                  >
                    <Image
                      src={fellow.fellowImage}
                      alt={fellow.name}
                      fill
                      className="object-cover transition duration-300 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <span className="text-white text-lg font-bold bg-black bg-opacity-60 px-4 py-2 rounded">
                        Learn More
                      </span>
                    </div>
                  </a>
                </div>
                <div className="w-full rounded-lg text-left space-y-4">
                  <h2 className="text-xl font-extrabold text-[#111828] uppercase">
                    <a
                      href={`/fellows/${fellow.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:opacity-80 transition"
                    >
                      {fellow.name}
                    </a>
                  </h2>
                  <p className="text-sm font-semibold text-[#111828] tracking-wide">
                    {fellow.title}
                  </p>
                  <p className="text-sm font-medium text-[#111828] uppercase">
                    {fellow.fellowType}
                  </p>
                  <p className="text-sm text-[#111828]">{fellow.shortBio}</p>
                  <a
                    href={`/fellows/${fellow.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#111828] underline hover:opacity-80 transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supported By section */}
        <div className="mt-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase tracking-widest">
            Supported By
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[
              "aegis.png",
              "philippine-marine-corps.png",
              "stb-giga.png",
              "force-recon-association.png",
              "dmg.png",
              "jusmag-philippines.png",
              "us-chamber-of-commerce.png",
              "vfw.png",
            ].map((filename) => (
              <Image
                key={filename}
                src={`/images/our-team-logos/${filename}`}
                alt={filename.replace(".png", "")}
                width={250}
                height={250}
                className="object-contain h-44 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
