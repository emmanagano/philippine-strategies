"use client";

import Link from "next/link";
import React from "react";

type SecondaryCTAProps = {
  /** Text shown on the CTA */
  label: string;
  /** Provide href to render a Link; omit to render a button */
  href?: string;
  /** onClick handler used when rendering a button (e.g., Load More) */
  onClick?: () => void;
  /** Optional extra classes to tweak spacing where needed */
  className?: string;
  target?: string;
  rel?: string;
};

// Minimal, consistent outline style used across the site
// Explicitly remove native link underline and avoid any extra underline decoration
const baseClasses =
  "inline-flex items-center justify-center rounded-lg border border-gray-900 px-6 py-3 text-base font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 no-underline decoration-transparent appearance-none";

export default function SecondaryCTA({
  label,
  href,
  onClick,
  className = "",
  target,
  rel,
}: SecondaryCTAProps) {
  const classes = `group ${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        aria-label={label}
        className={classes}
        target={target}
        rel={rel}
      >
        {label} <span className="ml-2 group-hover:animate-pulse">→</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={classes}
    >
      {label} <span className="ml-2 group-hover:animate-pulse">→</span>
    </button>
  );
}
