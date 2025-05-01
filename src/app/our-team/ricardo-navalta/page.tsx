export default function Page() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-10 bg-gray-100 text-[#111828]">
        <div className="mb-8">
          <h2 className="text-center font-semibold text-lg text-[#111828] mb-4">
            Explore More Team Members
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href="/our-team/robert-wagner"
              className="px-4 py-2 rounded-full bg-gray-200 text-[#111828] text-sm font-medium"
            >
              Wagner
            </a>
            <a
              href="/our-team/josep-jepri-miranda"
              className="px-4 py-2 rounded-full bg-gray-200 text-[#111828] text-sm font-medium"
            >
              Miranda
            </a>
            <a
              href="/our-team/ricardo-navalta"
              className="px-4 py-2 rounded-full bg-[#111828] text-white text-sm font-medium"
            >
              Navalta
            </a>
          </div>
          <hr className="mt-6 border-t border-gray-300" />
        </div>

        <h1 className="text-4xl font-bold mb-6 leading-snug">
          Ricardo J. Navalta, B.S. – Senior Associate Fellow
        </h1>
        <p className="mb-6 font-medium text-lg leading-relaxed">
          Retired U.S. Homeland Security Regional Attaché | Senior Law
          Enforcement Executive | International Security and Investigations
          Expert
        </p>
        <p className="mb-6 leading-relaxed">
          Ric is a distinguished retired law enforcement executive with over 30
          years of leadership experience in domestic and international
          operations, homeland security, financial crimes, counter-narcotics,
          counter-human trafficking, and transnational criminal investigations.
          He most recently served as the DHS and HSI Regional Attaché to the
          U.S. Embassy in Manila, Philippines, where he was the senior U.S. law
          enforcement representative overseeing DHS and HSI operations
          throughout the Philippines from 2018 to 2023.
        </p>
        <p className="mb-6 leading-relaxed">
          At the US Embassy in Manila, Ric directed bilateral and multilateral
          investigations, led diplomatic engagement with senior Philippine
          counterparts—including the National Bureau of Investigation (NBI),
          Bureau of Immigration, Bureau of Customs, and Philippine National
          Police—and revitalized a unified law enforcement task force to
          dismantle transnational criminal organizations. He oversaw major
          operations targeting financial crimes, human trafficking, cybercrime,
          narcotics smuggling, and immigration fraud, while also managing the
          U.S. Visa Security Program (VSP) in close coordination with the U.S.
          Department of State, the Regional Security Office (RSO), and embassy
          leadership. Throughout the COVID-19 pandemic, he remained deployed in
          country, ensuring operational continuity and safeguarding the health
          and morale of U.S. and local personnel. His leadership expanded HSI’s
          investigative footprint across Southeast Asia, advanced U.S. homeland
          security priorities, and strengthened key diplomatic partnerships.
        </p>
        <p className="mb-6 leading-relaxed">
          After retirement from DHS, Ric spends his time between homes in Makati
          and Angeles City, publishing informational videos on his YouTube
          channel and providing ongoing support for PhilStrats and its clients.
          He brings a unique perspective to the institute with his recent US
          government service, and maintains strong relationships in that realm
          as well as data sharing with a constantly-updated cadre of Philippine
          contacts and former local counterparts.
        </p>
      </div>
    </div>
  );
}
