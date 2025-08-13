import Link from "next/link";

interface PrimaryCTAProps {
  text: string;
  href: string;
}

const PrimaryCTA: React.FC<PrimaryCTAProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-full border border-black transition-all duration-200 hover:bg-gray-100 hover:text-black text-base"
    >
      {text}
    </Link>
  );
};

export default PrimaryCTA;
