"use client";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  title: string;
  shortBlurb: string;
  fullBio: string;
  imageUrl: string;
  slug: string;
  keyTakeaways: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Robert T. Wagner, JD, PhD",
    title: "Senior Fellow",
    shortBlurb:
      "Founder of Philippine Strategies Research Institute and author of 'OIDP - Onli In Da Pilippines', Bob provides deep strategic insight shaped by decades of in-country military, business, and diplomatic activities experience.",
    fullBio: `Beginning his US Marine career as a Force Recon (ITT - Interrogator / Translator) Operator out of Okinawa and Subic Bay in the mid-1970’s, Bob functioned as a Tactical Advisor to the Philippine Marine Brigade on Basilan and Sulu islands during the early phases of the MNLF (Moro National Liberation Front) insurgency. He later transitioned to the US Embassy in Beirut at the height of the Lebanese civil war, performing Recon and ITT duties for the Defense Attaché Office while stationed there in a Marine
Security capacity. The first Wagner ancestor to arrive in the Philippines, Capt. John A., came over with
the 49 th US Volunteer Infantry Regiment in January 1899, along with other units prior to the outbreak of
the Philippine-American war (previously known in early history books as the “Philippine Insurrection”).
Bob returned for a second posting in early 80’s, spending most of his time flying under the callsign of
“Preacher” out of Cubi Point and Clark in various types of fixed-wing and rotor aircraft, after which he was
engaged by non-military government entities while pursuing additional degrees in Languages, Physics,
and The Law, while traveling the world.

Since 1995, he has been the President &amp; CEO of AEGIS, Inc. a consulting firm which acts as US Agent
and Official Correspondent for overseas manufacturers of medical devices and OTC pharmaceuticals,
interfacing with the US Food and Drug Administration (HHS/FDA/CDRH/OPEQ). Upon returning to the
Philippines in 2005, he established the Robert T. Wagner foundation, a 501(c)(3) in conjunction with its
sister organization, the Philippine SEC-registered NGO Help Philippine Schools Foundation, also setting
up AEGIS Aviation Services that oversaw flight operations of small aircraft he piloted along with volunteer
aviators during school donation and disaster relief missions around the country.

Based on the historic, former US Air Base, Clark Field in Pampanga, Central Luzon, his personal and
family connections are far-reaching throughout Philippine society and government. Author of “O.I.D.P –
Onli In Da Pilippines” and other books, Bob writes bi-weekly articles for PhilStrats while posting videos
in the YouTube channel, as well. His official residence, known as Casa Verdante on Clark, is visited
regularly by diplomats, politicians and notables from both within and without the country.`,
    imageUrl: "/images/robert-wagner-team.png",
    slug: "robert-wagner",
    keyTakeaways: [
      "President & CEO of AEGIS, Inc. and Founder of Philippine Strategies Research Institute",
      "Former US Marine Force Recon Operator and Tactical Advisor during the MNLF insurgency",
      "Author of 'O.I.D.P – Onli In Da Pilippines' and leader in aviation and disaster relief missions",
    ],
  },
  {
    name: "Josep Jepri M. Miranda, Esq.",
    title: "Senior Associate Fellow",
    shortBlurb:
      "One of the top jurists in the Philippines, Jep specializes in dispute resolution and foreign investment law.  A member of the New York State Bar, he was the foundational legal mind that effected and continues to support the Clark and Subic Freeports.",
    fullBio:
      "Jep Miranda hails from one of the oldest Kapampangan political families. A San Sebastian College law graduate, he founded the Miranda, Vitug & Francisco firm and became VP at Clark International Airport Corporation. Known as the 'Filipino Fullback' by investors, Jep champions anti-corruption initiatives, upholding government promises to foreign businesses operating inside the Freeports.",
    imageUrl: "/images/jep-miranda-team.png",
    slug: "josep-jepri-miranda",
    keyTakeaways: [
      "Founder of Miranda, Vitug & Francisco Law Firm",
      "Vice President of Clark International Airport Corporation and CDC Chief Counsel",
      "Awarded Aldo Ning Parangal Presidential Award for Outstanding Legal Academics",
    ],
  },
  {
    name: "Ricardo J. Navalta, B.S.",
    title: "Senior Associate Fellow",
    shortBlurb:
      "Former Homeland Security Attaché to Manila, Ric offers unrivaled expertise in international law enforcement, counter-criminal operations, and security consulting.",
    fullBio:
      "Ric served as the senior DHS and HSI representative to the US Embassy in Manila from 2018-2023, spearheading operations against financial crimes, human trafficking, cybercrime, and narcotics smuggling. After retiring, he continues to support PhilStrats and regional initiatives, splitting his time between Makati and Angeles City.",
    imageUrl: "/images/ric-navalta-team.png",
    slug: "ricardo-navalta",
    keyTakeaways: [
      "Former U.S. DHS and HSI Regional Attaché to the U.S. Embassy in Manila",
      "Leader in counter-human trafficking, financial crimes, cybercrime, and homeland security",
      "Expanded U.S. Homeland Security operations throughout Southeast Asia",
    ],
  },
];

export default function OurTeamPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 text-[#111828]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center uppercase tracking-widest">
          Our Team
        </h1>

        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_#f5d90a_1px,_transparent_1px)] [background-size:20px_20px] opacity-20 -z-10 rounded-lg" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center space-y-2"
              >
                <div className="bg-[#111828] rounded-lg overflow-hidden shadow-md w-full h-[480px] relative">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full bg-[oklch(.905_.182_98.111)] rounded-lg px-4 py-3 shadow-md text-left">
                  <h2 className="text-lg font-bold text-[#111828]">
                    {member.name}
                  </h2>
                  <p className="text-sm text-[#111828] mb-1">{member.title}</p>
                  <p className="text-sm text-[#111828] mb-2">
                    {member.shortBlurb}
                  </p>
                  <Link
                    href={`/our-team/${member.slug}`}
                    className="text-sm font-semibold text-[#111828] underline hover:opacity-80 transition"
                  >
                    Learn More
                  </Link>
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
