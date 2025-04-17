import Image from "next/image";
import Link from "next/link";

export default function MilitaryPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-10 shadow-lg">
          <Image
            src="/images/military-hero.jpg"
            alt="Military personnel in field"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          The Present Military Environment in the Philippines
        </h1>
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-8">
          Know the underlying details and nuances
        </p>

        <div className="prose prose-lg max-w-none text-justify text-gray-800 leading-relaxed break-words space-y-6">
          <p>
            From 2016 to 2022, the administration of{" "}
            <strong>Rodrigo Duterte</strong> shifted away from the Philippines’
            traditional ally, the United States, and toward China. The reasons
            behind this move were simple:
            <br />
            <br />
            (1) He felt slighted and disrespected by Obama,
            <br />
            <br />
            (2) China offered eyepopping amounts of money if he could keep US
            forces away from their artificial island building aka. stealth oil
            and gas fracking projects in the South China Sea,
            <br />
            <br />
            (3) Denied a US Visa due to his human rights abuse record while
            Mayor of Davao City, he felt it was time to promulgate animosity
            toward Americans, Europeans and Australians – the “loathed whites” –
            in the minds of Filipinos to “free them of their colonial
            mentality”.
            <br />
            <br />
            Ignoring warnings of duplicitousness on the part of the Chinese by
            other countries who had become their loan sharking victims, his plan
            worked well at first, hauling in boatloads of Yuan while gleefully
            denigrating foreigners in public, until July 2020 when he was
            unceremoniously left at the proverbial alter by Beijing.
          </p>

          <p>
            His successor, <strong>Ferdinand “Bongbong” Marcos Jr.</strong>,
            known colloquially as “BBM”, immediately pivoted back to Washington
            after entering office in July of 2022, reinvigorating traditional
            ties through the establishment of a total of 9 US military sites
            under the EDCA (Enhanced Defense Cooperation Agreement) that was
            enacted by President <strong>Benigno “Noynoy” Aquino III</strong>,
            Duterte’s immediate precursor.
            <br />
            <br />
            Correcting the damage done to the original coalition that had been
            polluted with bribery and corruption among senior officers and
            officials by the Chinese continues to be a daunting task,
            particularly in view of increasing aggression by the PLAN (Peoples’
            Liberation Army Navy) against Philippine Navy + Coast Guard vessels
            and aircraft in the West Philippine Sea that had been enabled by the
            Duterte.
          </p>

          <p>
            Beyond these challenges is the finding and deporting of an estimated
            4000 PLA personnel that had entered the country between 2017 to
            2022, embedded in “POGO’s” (Philippine Online Gaming Organizations)
            that Duterte had encouraged as revenue generators.
            <br />
            <br />
            To address the issue, BBM ordered a blanket ban on POGO’s in 2024
            that included a dragnet to round up Chinese who were in the country
            on sham spousal or retirement visas issued by corrupt former
            Duterte-era Bureau of Immigration (“BI”) managers.
            <br />
            <br />
            As of April 2025, no known POGO’s were in operation on Luzon or in
            the Visayas; most of them had either closed down or migrated south
            to Davao to enjoy protection under the Duterte family.
          </p>

          <p>
            Cleaning these out poses additional challenges as age-old tribal
            animosities (Mindanaoans hold Tagalogs in disdain, etc.) intensify
            after the sudden, surprising arrest and extradition to the ICC
            (International Criminal Court) in The Hague of Duterte himself,
            allowing whatever PLA remnants yet exist within such organizations
            to operate freely, even in the open.
          </p>

          <p>
            American and allied government / military entities currently or
            considering working in the Philippines are advised to avail of
            information gathered through more than a century of in-country
            experience and local contact development.
          </p>

          <p>
            For more precise data and analyses, please{" "}
            <Link
              href="/contact"
              className="text-yellow-400 hover:text-red-500 font-semibold transition underline"
            >
              send us a message
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
