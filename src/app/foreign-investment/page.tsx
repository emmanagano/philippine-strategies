import Image from "next/image";
import Link from "next/link";

export default function ForeignInvestmentPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-10 shadow-lg">
          <Image
            src="/images/foreign-investment-hero.jpg"
            alt="Foreign investment landscape"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Foreign Investment in the Philippines
        </h1>
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-8">
          From Duterte to Marcos Jr. – Persistent Challenges
        </p>

        <div className="prose prose-lg max-w-none text-justify text-gray-800 leading-relaxed break-words space-y-6">
          <p>
            When President Rodrigo Duterte assumed office in 2016, the
            Philippines entered an era marked by tough rhetoric, a controversial
            war on drugs, and a pivot towards China. But one of the less
            discussed — yet deeply consequential — impacts of his administration
            was the collapse of foreign direct investment (FDI), which the
            country still struggles to recover from nearly a decade later.
          </p>

          <p>
            <strong>The Duterte Decline</strong>
            <br />
            Despite campaign promises of economic growth and infrastructure
            overhaul, Duterte’s tenure saw FDI inflows drop dramatically.
            According to Bangko Sentral ng Pilipinas (BSP) data, net FDI inflows
            peaked in 2017 at $10.3 billion, only to begin a downward slide that
            was exacerbated by unpredictable policies, political volatility, and
            a growing perception that the Philippines was an increasingly risky
            place to do business.
          </p>

          <p>
            Duterte’s open hostility to Western allies, cozying up to China
            without significant economic reciprocation, and the chilling effect
            of his aggressive domestic policies all contributed to investor
            hesitation. The business climate suffered from regulatory
            uncertainty, rule-of-law concerns, and a perception that the
            government was more interested in consolidating power than enabling
            business.
          </p>

          <p>
            <strong>The Marcos-Duterte Conflict</strong>
            <br />
            Upon entering the Palace in mid-2022, President Ferdinand “Bongbong”
            Marcos Jr., ushered in an era of cautious optimism that the country
            might reorient towards stability. But that hope was short-lived.
            What has emerged instead is an increasingly public power struggle
            between the Marcos and Duterte dynasties — two of the country’s most
            powerful political families, now locked in a bitter rivalry.
          </p>

          <p>
            This ongoing “clan war” has spilled over into public policy,
            appointments, and the security sector. For foreign investors, it
            signals a return to uncertainty. With key sectors of the bureaucracy
            and judiciary potentially influenced by partisan interests,
            long-term investment becomes harder to justify.
          </p>

          <p>
            Notably, the rivalry hampers any serious push for reform of the
            industrial sector. Despite Marcos Jr.&apos;s stated goals of
            economic liberalization, the political capital needed to pursue
            meaningful changes is being squandered on factional battles. Many
            foreign investors already setup in country have complained bitterly
            about abuses heaped upon them by LCU’s (Local Government Units),
            contrary to national government promises.
          </p>

          <p>
            <strong>The 60/40 Rule: A Relic That Still Repels</strong>
            <br />
            One major, long-standing deterrent remains untouched: the 60/40 rule
            in the current Philippine Constitution, which limits foreign
            ownership of land and key industries to just 40%. While certain
            sectors like retail and renewable energy have seen incremental
            liberalization, the core restriction on equity remains.
          </p>

          <p>
            Foreign firms continue to view this as a dealbreaker, particularly
            when neighboring countries like Vietnam and Indonesia offer more
            favorable terms. Without constitutional reform — a political hot
            potato that Marcos has effectively championed yet — the Philippines
            will remain a secondary choice for serious foreign capital.
          </p>

          <p>
            <strong>The CREATE Law: A Broken Promise</strong>
            <br />
            Adding salt to the wound, the Corporate Recovery and Tax Incentives
            for Enterprises (CREATE) law, passed during the Duterte
            administration and implemented under Marcos Jr., has caused
            widespread disillusionment among foreign investors — especially
            those operating in freeport zones like Clark and Subic.
          </p>

          <p>
            While touted as a way to rationalize tax incentives and attract more
            business, the CREATE law did the opposite for many Locators. It
            retroactively changed the terms of their tax holidays and
            incentives, undermining trust and violating long-standing
            agreements. Many companies that had sunk millions into facilities
            based on specific tax regimes suddenly found themselves in a new,
            less favorable playing field.
          </p>

          <p>
            This reversal has led to legal disputes and, in some cases, outright
            withdrawal of investments. For foreign investors, the message was
            clear: even government assurances in the Philippines can be subject
            to abrupt political change.
          </p>

          <p>
            <strong>The Bottom Line</strong>
            <br />
            The Philippines once held the promise of becoming Southeast Asia’s
            rising economic tiger, but the past decade has turned that narrative
            into a cautionary tale. FDI remains sluggish, and despite official
            optimism, the numbers don’t lie. Political infighting, outdated
            ownership laws, and broken promises have left the country at a
            standstill.
          </p>

          <p>
            Until real reform — political, economic, and institutional — is
            undertaken, foreign investors will continue to look elsewhere. And
            unless the Marcos and Duterte camps find a way to end their zero-sum
            war, the Philippines risks becoming a footnote in the regional
            economic story rather than a protagonist.
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
