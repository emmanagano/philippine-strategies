import Link from "next/link";
import React from "react";

type MoreInfoProps = {
  href: string;
  /** Text to show, e.g. "Read Article", "Discover", "Read More" */
  label: string;
  /** Optional size tweak */
  size?: "sm" | "md" | "lg";
  /** Optional extra classes for rare layout needs */
  className?: string;
  target?: string;
  rel?: string;
};

/**
 * Small inline text CTA used under cards/teasers (Articles, Blurbs, etc.).
 * Consistent underline + arrow with subtle hover motion.
 */
export default function MoreInfo({
  href,
  label,
  size = "md",
  className = "",
  target,
  rel,
}: MoreInfoProps) {
  const sizeClasses =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`group inline-flex items-center gap-1 font-medium text-gray-900 transition-all duration-300 ${sizeClasses} ${className}`}
    >
      {/* Simple text with underline effect */}
      <span className="relative">
        <span className="underline underline-offset-4 decoration-2 decoration-black hover:decoration-gray-800 transition-all duration-300">
          {label}
        </span>
      </span>
      {/* Arrow nudges on hover */}
      <span
        aria-hidden
        className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-black group-hover:animate-pulse"
      >
        →
      </span>
    </Link>
  );
}
