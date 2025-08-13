import React from "react";

export interface ContactUsCTAProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink?: string;
}

export default function ContactUsCTA({
  heading,
  subheading,
  buttonText,
  buttonLink,
}: ContactUsCTAProps) {
  return (
    <div className="rounded-2xl bg-gray-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow my-6">
      <div>
        <h3 className="text-2xl font-semibold">{heading}</h3>
        <p className="mt-1 text-gray-300">{subheading}</p>
      </div>
      {buttonLink ? (
        <a
          href={buttonLink}
          className="inline-block bg-white text-gray-900 font-medium px-5 py-3 rounded-full hover:bg-gray-200 transition"
        >
          {buttonText}
        </a>
      ) : (
        <button className="inline-block bg-white text-gray-900 font-medium px-5 py-3 rounded-full hover:bg-gray-200 transition">
          {buttonText}
        </button>
      )}
    </div>
  );
}
