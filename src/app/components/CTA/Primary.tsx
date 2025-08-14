import Link from "next/link";

interface PrimaryCTAProps {
  label: string;
  href: string;
}

const PrimaryCTA: React.FC<PrimaryCTAProps> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-full border border-black transition-all duration-200 hover:bg-gray-100 hover:text-black text-base"
    >
      {label}
    </Link>
  );
};

export default PrimaryCTA;
