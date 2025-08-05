export default function HireUsPage() {
  return (
    <div className="bg-white text-[#111828] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden text-white flex items-center justify-center px-4">
        <img
          src="/images/athena-hire-us.png"
          alt="Statue of Athena"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 text-center max-w-2xl px-6 bg-black/60 py-10 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">
            Elite Consulting Services for the Philippines
          </h1>
          <p className="text-lg mb-6">
            Guiding foreign investors, diplomats, and security personnel through
            the complexities of Philippine business, politics, and national
            defense.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-[#111828] font-semibold px-8 py-3 rounded hover:bg-yellow-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* AEGIS Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2 text-center">
          Strategic Consulting & Protection Services in the Philippines
        </h2>
        <p className="mb-8 text-center text-lg">
          <strong>Powered by AEGIS. Backed by Legacy.</strong>
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-center">What We Do</h3>
        <p className="mb-6 text-base leading-relaxed text-center max-w-3xl mx-auto">
          AEGIS offers elite consulting and protective services tailored for
          foreign individuals, companies, diplomats, and military contractors
          operating or investing in the Philippines.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          <div className="bg-white shadow-md p-6 rounded border-t-4 border-gray-300">
            <h4 className="font-semibold text-lg mb-2">
              Business & Investment Consulting
            </h4>
            <p>
              Navigate the real Philippine economy. We help clients avoid costly
              mistakes by connecting them directly to trusted power centers —
              not just “public-facing” bureaucracy.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded border-t-4 border-gray-300">
            <h4 className="font-semibold text-lg mb-2">
              Residency & Relocation Advisory
            </h4>
            <p>
              For foreigners seeking to live long-term in the Philippines, we
              advise on legal, social, and practical integration from visa
              pathways to local property.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded border-t-4 border-gray-300">
            <h4 className="font-semibold text-lg mb-2">
              Political Risk Assessment & Diplomatic Insight
            </h4>
            <p>
              We analyze and explain the real geopolitical terrain beyond
              embassy briefings and headline news.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded border-t-4 border-gray-300">
            <h4 className="font-semibold text-lg mb-2">
              Security & Personal Protection
            </h4>
            <p>
              Our VIP protective details are led by former US Marine Force Recon
              leaders and Philippine Marine MARSOG operators. Our clients are
              kept safe not just by muscle, but by reputation and deep respect
              in the field.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Why Choose Us?
          </h3>
          <blockquote className="italic text-center text-gray-700 mb-4">
            “No one from the US knows this country better than the Wagner
            family.”
            <br />— President Fidel V. Ramos, 2012 ASEAN Summit
          </blockquote>
          <ul className="list-disc list-inside max-w-3xl mx-auto space-y-2 text-base">
            <li>
              <strong>Over 120 Years of Legacy:</strong> The Wagner name has
              been embedded in Philippine history since 1899.
            </li>
            <li>
              <strong>Trusted by Presidents, Generals, and CEOs:</strong> Our
              family is among the few Westerners fully embedded within elite
              local circles.
            </li>
            <li>
              <strong>Fluent in the Terrain:</strong> Not just linguistically
              (Tagalog, Kapampangan, Cebuano) — but politically, socially, and
              historically.
            </li>
            <li>
              <strong>Discretion and Power:</strong> Our security presence alone
              deters problems. We operate quietly, powerfully, and respectfully.
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-2">Our Legacy in Action</h3>
          <p className="text-base mb-8">
            A Gallery of Encounters & Engagements
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="/images/hire-us-gallery/robert-wagner.jpeg"
              alt="Young Robert Wagner in military uniform holding a rifle in front of an American flag backdrop, showcasing his early service"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/soldiers-military.jpeg"
              alt="Group of armed soldiers in full combat gear smiling for a photo during deployment, likely Vietnam War era"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/soldiers-group picture.jpeg"
              alt="Formal group photo of U.S. military personnel in camo uniforms posing in a wooded area, possibly after a training exercise"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/casaverdante.jpeg"
              alt="Robert Wagner and a colleague giving a thumbs up in front of Casa Verdante 2318, featuring vehicles and a gold medallion sign"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/us-naval-school.jpeg"
              alt="Class photo of U.S. Naval School Diver Second Class, San Diego, 1978, with students in uniform posing outside the dive training facility"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/aegis-regulatory-inc.jpeg"
              alt="Robert Wagner with AEGIS Regulatory staff standing below a welcome screen inside the company office, November 2024"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/robert-wagner-marykay-l-carlson.jpeg"
              alt="Handshake between Robert Wagner and U.S. Ambassador MaryKay L. Carlson inside a luxurious hotel lobby"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/vfw-dinner.jpeg"
              alt="Robert Wagner and colleagues gathered at a dinner table with veterans and military personnel, sharing a meal in a private home"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/ambassador-meeting.jpeg"
              alt="Robert Wagner with three men in smart casual attire giving thumbs up and peace signs after a formal meeting"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
            <img
              src="/images/hire-us-gallery/delfin-lorenzana.jpeg"
              alt="Robert Wagner standing beside Philippine Secretary of National Defense Delfin Lorenzana, both smiling and posing with peace signs in a conference room"
              className="rounded-lg shadow-md object-cover transition-transform duration-300 transform hover:scale-125"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            What You’re Avoiding When You Work With Us
          </h3>
          <ul className="list-disc list-inside max-w-3xl mx-auto space-y-2 text-base">
            <li>
              Scandal-ridden “eco zones” built for gambling and laundering
            </li>
            <li>Useless connections from embassy handbooks</li>
            <li>Empty promises from fixers and so-called experts</li>
            <li>Years of wasted time and millions in sunk cost</li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Engage?</h3>
          <p className="mb-6 text-base">
            Let’s talk. Whether you’re investing, moving, or planning — your
            success in the Philippines starts with the right team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-[#111828] font-semibold px-10 py-4 rounded hover:bg-yellow-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-8 text-gray-600 italic text-lg">
          <blockquote className="flex-1 flex flex-col items-start border-l-4 border-gray-300 pl-4 relative">
            <svg
              className="w-8 h-8 mb-4 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.17 6A5 5 0 002 11v7a3 3 0 003 3h5v-2H5a1 1 0 01-1-1v-6a3 3 0 013-3h.17zm9 0A5 5 0 0011 11v7a3 3 0 003 3h5v-2h-5a1 1 0 01-1-1v-6a3 3 0 013-3h.17z" />
            </svg>
            “Attempting to understand this wonderful place is a delicious
            impossibility.”
            <br />– Theodore Roosevelt II, Governor-General of the Philippines,
            1932
          </blockquote>
          <blockquote className="flex-1 flex flex-col items-start border-l-4 border-gray-300 pl-4 relative">
            <svg
              className="w-8 h-8 mb-4 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.17 6A5 5 0 002 11v7a3 3 0 003 3h5v-2H5a1 1 0 01-1-1v-6a3 3 0 013-3h.17zm9 0A5 5 0 0011 11v7a3 3 0 003 3h5v-2h-5a1 1 0 01-1-1v-6a3 3 0 013-3h.17z" />
            </svg>
            “Before charging in with the cavalry, one must always have a good
            scouting team.”
            <br />– Lieutenant-General Robert Baden-Powell
          </blockquote>
        </div>
      </section>
    </div>
  );
}
