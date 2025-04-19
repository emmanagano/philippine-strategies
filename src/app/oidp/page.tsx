export default function OIDPPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white py-12 px-6">
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        {/* Book Cover */}
        <div className="w-full h-full flex items-stretch">
          <img
            src="/images/oidp.jpg"
            alt="OIDP Book Cover"
            className="w-auto h-full object-contain"
          />
        </div>

        {/* Book Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              O.I.D.P. - ONLI IN DA PILIPPINES !!
            </h1>
            <p className="mt-2 text-lg md:text-xl font-semibold">
              Things That Make the Philippines the Most Outlandish,
              Consternating, Interesting Country in the World
            </p>
          </div>
          <p className="text-sm italic">
            <span className="text-lg font-medium not-italic">
              by R. Ballater Aegis |{" "}
            </span>{" "}
            &nbsp; August 12, 2024
          </p>
          <p className="text-white text-base leading-relaxed">
            With its politicians openly threatening to kill you, insanely
            beautiful mountain and maritime scenery that astounds you, and
            traffic that makes you feel as if you’re stuck in a looped chase
            scene of a Mad Max movie, the Philippines is, without a doubt, the
            most interesting, consternating, delighting, upsetting, stimulating
            land on Earth. Like men trying to understand women, or physicists
            grappling to peg the mechanics of gravity, attempting to comprehend
            this archipelago of 7100-plus islands once dubbed &quot;the Pearl of
            the Orient Seas&quot; is a delicious impossibility.
            <br />
            <br />
            Filipinos have long used &quot;Only In the Philippines&quot; as a
            manner of offering up descriptions of the indescribable to
            foreigners with screwed up looks etched on their faces. &quot;OIDP:
            Onli In Da Pilippines&quot; - not only speaks to the local manner in
            which the quip is pronounced, but also to the real-world Geist of
            what the place is all about. It is a guide for the uninitiated and
            newbie alike, as well as an entertaining elaboration on the obvious
            to the homeborn. The uniqueness of this country and its 174
            ethno-linguistic cultures amazes even the most jaded traveler or
            longtime resident. The world is lucky that such a place indeed
            exists.
          </p>
          <div className="text-center">
            <a
              href="https://www.amazon.com/I-D-P-PILIPPINES-PHILIPPINES-CONSTERNATING-INTERESTING/dp/B0DCVYSPX7"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto block bg-[#FFD814] text-black font-semibold text-lg py-3 px-6 rounded-full hover:bg-[#f7ca00] transition"
            >
              Buy Now →
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-yellow-400">
          The Chapters Unpacked
        </h2>
        <div className="space-y-6">
          {[
            [
              "1",
              "American In-Laws",
              <>
                <div className="font-medium text-white">
                  How Uncle Sam became part of the Filipino family.
                </div>
                <div>
                  Explores the deep roots of U.S.-Philippine relations, from
                  McKinley’s moral dilemma to modern OFW culture.
                </div>
              </>,
            ],
            [
              "2",
              "Goodbye Kano!",
              <>
                <div className="font-medium text-white">
                  When the Americans left, others pounced.
                </div>
                <div>
                  Base closures created a vacuum filled by foreign
                  interests—with messy consequences.
                </div>
              </>,
            ],
            [
              "3",
              "MacMelda",
              <>
                <div className="font-medium text-white">
                  Corruption, myth-making, and political resurrection.
                </div>
                <div>
                  The Marcos story isn’t over—it’s back in power, glossier than
                  ever.
                </div>
              </>,
            ],
            [
              "4",
              "Bahala Na Si Batman",
              <>
                <div className="font-medium text-white">
                  “Bahala Na” is more than a phrase—it’s a worldview.
                </div>
                <div>
                  A fatalistic thread runs through politics, pop culture, and
                  everyday survival.
                </div>
              </>,
            ],
            [
              "5",
              "Dracula Would Freak",
              <>
                <div className="font-medium text-white">
                  Filipino monsters put Western vampires to shame.
                </div>
                <div>
                  From the Manananggal to the Aswang, fear and folklore meet at
                  the crossroads of identity.
                </div>
              </>,
            ],
            [
              "6",
              "It’s Showtime!",
              <>
                <div className="font-medium text-white">
                  Where scandal meets spectacle—welcome to noontime TV.
                </div>
                <div>
                  Pop culture as escapism, nationalism, and sometimes courtroom
                  drama.
                </div>
              </>,
            ],
            [
              "7",
              "Tribes, Bribes, and Federalism",
              <>
                <div className="font-medium text-white">
                  Federalism was never just a dream—it was a gamble.
                </div>
                <div>
                  Duterte’s vision clashed with tribal politics, dynasties, and
                  deep-rooted divisions.
                </div>
              </>,
            ],
            [
              "8",
              "Bakla Nation",
              <>
                <div className="font-medium text-white">
                  The Philippines is more queer than you think.
                </div>
                <div>
                  Bakla identity bridges pre-colonial power, cultural flair, and
                  quiet contradictions.
                </div>
              </>,
            ],
            [
              "9",
              "Kill, Kill, Kill!",
              <>
                <div className="font-medium text-white">
                  Duterte’s war wasn’t on drugs—it was on people.
                </div>
                <div>
                  A brutal look at how violence became normalized and
                  politicized.
                </div>
              </>,
            ],
            [
              "10",
              "OFWs to the Rescue",
              <>
                <div className="font-medium text-white">
                  The Philippines exports love, labor, and loss.
                </div>
                <div>
                  OFWs keep the economy alive—but at what emotional cost?
                </div>
              </>,
            ],
            [
              "11",
              "Trapik",
              <>
                <div className="font-medium text-white">
                  You haven’t truly suffered until you’ve sat in EDSA traffic.
                </div>
                <div>
                  Gridlock as metaphor for governance, culture, and slow-motion
                  chaos.
                </div>
              </>,
            ],
            [
              "12",
              "Graveyard of Lawyers",
              <>
                <div className="font-medium text-white">
                  In the Philippines, defending the law can cost your life.
                </div>
                <div>A chilling portrait of justice under siege.</div>
              </>,
            ],
            [
              "13",
              "The Disasterpines",
              <>
                <div className="font-medium text-white">
                  Disaster isn’t just natural—it’s political.
                </div>
                <div>
                  Typhoons, quakes, and the corruption that makes everything
                  worse.
                </div>
              </>,
            ],
            [
              "14",
              "Living Valhalla",
              <>
                <div className="font-medium text-white">
                  In the madness, the author found meaning.
                </div>
                <div>
                  A memoir of staying, sacrificing, and still believing in the
                  Philippines.
                </div>
              </>,
            ],
          ].map((item, idx) => {
            const [chapter, title, teaser] = item as [
              string,
              string,
              React.ReactNode
            ];
            return (
              <div
                key={chapter}
                className={`grid md:grid-cols-12 items-start gap-4 p-4 rounded-lg ${
                  idx % 2 === 0 ? "bg-[#1E293B]/60" : "bg-[#0F172A]/80"
                }`}
              >
                <div className="md:col-span-1 text-yellow-300 font-bold text-lg">
                  {chapter}
                </div>
                <div className="md:col-span-3 font-semibold text-white">
                  {title}
                </div>
                <div className="md:col-span-8 text-slate-300 text-sm md:text-base">
                  {teaser}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
