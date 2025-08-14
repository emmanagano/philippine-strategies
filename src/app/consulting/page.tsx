import ServicesHero from "../components/ServicesHero";
import ContactUsCTA from "@/app/components/CTA/ContactUs";
export default function ConsultingPage() {
  return (
    <>
      <ServicesHero
        headline="Consulting"
        imageSrc="/images/consulting-hero.jpg"
      />

      {/* Content wrapper */}
      <section className="bg-gray-100 py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Quotes card */}
          <div className="bg-white/70 backdrop-blur rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <figure className="border-l-4 border-gray-900 pl-4">
                <blockquote className="text-gray-900 text-lg md:text-xl leading-relaxed">
                  “In fact, no one from the US knows this country better than
                  the Wagner family; they all served here in the military”.
                </blockquote>
                <figcaption className="mt-3 text-sm text-gray-600">
                  — Former President Fidel V. Ramos, aside meeting during the
                  2012 ASEAN Summit
                </figcaption>
              </figure>
              <figure className="border-l-4 border-gray-900 pl-4">
                <blockquote className="text-gray-900 text-lg md:text-xl leading-relaxed">
                  “Attempting to understand this wonderful place is a delicious
                  impossibility”.
                </blockquote>
                <figcaption className="mt-3 text-sm text-gray-600">
                  — Theodore Roosevelt II, Governor‑General of the Philippines
                  (1932)
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Body copy */}
          <div className="space-y-6 md:space-y-7 mt-10 text-lg md:text-xl leading-relaxed text-gray-800">
            <p>
              The Wagner name, for centuries associated with distinguished
              military service in Europe and the United States, has held
              noteworthy significance in the annals of Philippine history since
              the first family member, Capt. John A., arrived in January of
              1899.
            </p>
            <p>
              For nearly half a century, from 1899 to 1946, the majority of
              Americans in the Philippines were military males serving in the
              Army, Navy and Marines. After separation or retirement, many
              settled here with Filipina wives and their children, starting
              local businesses or working for the US government in a variety of
              service/support roles. By 1941, nearly 9000 Americans called the
              Philippines home.
            </p>
            <p>
              Rather than surrendering and being sent to prison camps, hundreds
              went underground and fought the Imperial Japanese with their
              Filipino brothers and sisters, whom they had known and grew up
              with since early childhood. These Americans, speaking fluent,
              inflectional Tagalog, Kapampangan and Cebuano, were considered
              “Kababayan” (Compatriots, or accepted members of the Filipino
              community), just as much as their friends and neighbors with Malay
              or Aeta genetics.
            </p>
            <p>
              During the post‑war decades, natural attrition and migration back
              to mainland America saw their numbers dwindle to under half the
              pre‑war number, replenished only by military retirees from Subic
              Naval and Clark Air Force bases. Some families, like the Wagner’s,
              Forbes’, Smiths and Laurents, maintained a presence on the islands
              into the modern era.
            </p>
            <p>
              For the most part engaged in charitable or philanthropic efforts
              to aid the peoples of the Philippines, they also provided and
              continue to effect services for American industry, US government
              and visiting military elements using their extensive familial
              contacts with local power centers garnered and developed over more
              than a century of relationships.
            </p>
            <p>
              The business, diplomatic and political environments of this region
              are unique beyond measure in respects that shock even the loftiest
              of ambassadors, consuls or State Department officials who, living
              in the embassy bubble, will insist they came to understand the
              country and its peoples after only a typical 3‑year posting,
              ignoring wisdom and advice from the “Puting Maalam” (Old‑timers /
              Wisemen) at their peril and frequent disgrace.
            </p>
            <p>
              As Afghanistan was dubbed the “Graveyard of Empires” by Milton
              Bearden of Foreign Affairs magazine, the Philippines very easily
              fits into the “Caveat Emptor” classification of foreign investment
              and military alliances.
            </p>
            <p>
              In multiple cases, the golden roads to success promised by Manila
              are littered with failed attempts of US, Canadian, Australian and
              European companies to prosper in special economic zones that ended
              up being scandal‑ridden preserves of illegal Chinese online
              gambling and Korean money‑laundering.
            </p>
            <p>
              The US military, emboldened by the Benigno “Noynoy” Aquino III
              administration that enacted the Enhanced Defense Cooperation
              Agreement (EDCA) in 2014, was stymied just two years later when
              the xenophobic, pro‑China Rodrigo Duterte ascended to the
              presidency.
            </p>
            <p>
              Both situations cost hundreds of millions of dollars in wasted
              expenditures and 8 years of time losses. Only those organizations
              who listened to the Puting Maalam were able to enjoy success
              during this period.
            </p>
            <p>
              When considering the Philippines, foreign investors, diplomatic
              planners and military strategists would be wise to heed the most
              famous quote attributed to Lieutenant‑General Robert Stephenson
              Smyth Baden‑Powell, 1st Baron Baden‑Powell, 5th Dragoon Guards of
              the British Army: “Before charging in with the cavalry, one must
              always have a good scouting team.”
            </p>
          </div>

          {/* Call to action */}
          <div className="mt-12 md:mt-14">
            <ContactUsCTA
              heading="Let’s work together"
              subheading="Discuss your objectives and we’ll map the safest path forward."
              buttonText="aegis@philippinestrategies.com"
              buttonLink="mailto:aegis@philippinestrategies.com"
            />
          </div>
        </div>
      </section>
    </>
  );
}
