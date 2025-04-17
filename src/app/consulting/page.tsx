import Image from "next/image";

export default function ConsultingPage() {
    return (
        <div className="min-h-screen bg-gray-100 py-16 px-6">
            <section className="max-w-4xl mx-auto">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mb-10 shadow-lg">
                    <Image 
                        src="/images/consulting-hero.jpeg"
                        alt="Handshake between military leaders"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                        priority
                    />
                </div>

                <article className="prose prose-lg max-w-none text-gray-900 bg-white p-6 md:p-8 rounded-md shadow-md">
                    <blockquote className="italic text-lg font-semibold border-l-4 pl-4 border-gray-400 mb-8 bg-gray-100 p-4 rounded-md">
                        “In fact, no one from the US knows this country better than the Wagner family; they all served here in the military”
                        <br />
                        <span className="text-sm font-normal block mt-1">– Former President Fidel V. Ramos, as quoted in an aside meeting during the 2012 ASEAN Summit.</span>
                    </blockquote>

                    <blockquote className="italic text-lg font-semibold border-l-4 pl-4 border-gray-400 mb-8 bg-gray-100 p-4 rounded-md">
                        “Attempting to understand this wonderful place is a delicious impossibility”
                        <br />
                        <span className="text-sm font-normal block mt-1">– Theodore Roosevelt II, Governor-General of the Philippines, 1932.</span>
                    </blockquote>

                    <p className="mt-6">The Wagner name, for centuries associated with distinguished military service in Europe and the United States, has held noteworthy significance in the annals of Philippine history since the first family member, Capt. John A., arrived in January of 1899.</p>

                    <div className="mt-6 overflow-auto whitespace-nowrap text-sm">
                        <p>
                            Source: Library of Congress –{" "}
                            <a
                                href="https://www.govinfo.gov/content/pkg/SERIALSET-04039_00_00-020-0129-0000/pdf/SERIALSET-04039_00_00-020-0129-0000.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:underline"
                            >
                                https://www.govinfo.gov/content/pkg/SERIALSET-04039_00_00-020-0129-0000/pdf/SERIALSET-04039_00_00-020-0129-0000.pdf
                            </a>{" "}
                            (from bottom of page 57, “Captain John A. Wagner, 31st US Army Infantry Regiment”).
                        </p>
                    </div>

                    <p className="mt-6">For nearly half a century, from 1899 to 1946, the majority of Americans in the Philippines were military males serving in the Army, Navy and Marines. After separation or retirement, many settled here with Filipina wives and their children, starting local businesses or working for the US government in a variety of service/support roles. By 1941, nearly 9000 Americans called the Philippines home.</p>

                    <p className="mt-6">Rather than surrendering and being sent to prison camps, hundreds went underground and fought the Imperial Japanese with their Filipino brothers and sisters, whom they had known and grew up with since early childhood. These Americans, speaking fluent, inflectional Tagalog, Kapampangan and Cebuano, were considered “Kababayan” (Compatriots, or accepted members of the Filipino community), just as much as their friends and neighbors with Malay or Aeta genetics. During the post-war decades, natural attrition and migration back to mainland America saw their numbers dwindle to under half the pre-war number, replenished only by military retirees from Subic Naval and Clark Air Force bases.</p>

                    <p className="mt-6">Some families, like the Wagner’s, Forbes’ , Smiths and Laurents, maintained a presence on the islands into the modern era. For the most part engaged in charitable or philanthropic efforts to aid the peoples of the Philippines, they also provided and continue to effect services for American industry, US government and visiting military elements using their extensive familial contacts with local power centers garnered and developed over more than a century of relationships.</p>

                    <p className="mt-6">The business, diplomatic and political environments of this region are unique beyond measure in respects that shock even the loftiest of ambassadors, consuls or State Department officials who, living in the embassy bubble, will insist they came to understand the country and its peoples after only a typical 3-year posting, ignoring wisdom and advice from the “Puting Maalam” (Old-timers / Wisemen) at their peril and frequent disgrace.</p>

                    <p className="mt-6">As Afghanistan was dubbed the “Graveyard of Empires” by Milton Bearden of Foreign Affairs magazine, the Philippines very easily fits into the “Caveat Emptor” classification of foreign investment and military alliances.</p>

                    <p className="mt-6">In multiple cases, the golden roads to success promised by Manila are littered with failed attempts of US, Canadian, Australian and European companies to prosper in special economic zones that ended up being scandal-ridden preserves of illegal Chinese online gambling and Korean money-laundering.</p>

                    <p className="mt-6">The US military, emboldened by the Benigno “Noynoy” Aquino III administration that enacted the Enhanced Defense Cooperation Agreement (EDCA) in 2014, was stymied just two years later when the xenophobic, pro-China Rodrigo Duterte ascended to the presidency.</p>

                    <p className="mt-6">Both situations cost hundreds of millions of dollars in wasted expenditures and 8 years of time losses. Only those organizations who listened to the Puting Maalam were able to enjoy success during this period.</p>

                    <p className="mt-6">When considering the Philippines, foreign investors, diplomatic planners and military strategists would be wise to heed the most famous quote attributed to Lieutenant-General Robert Stephenson Smyth Baden-Powell, 1st Baron Baden-Powell, 5th Dragoon Guards of the British Army:</p>

                    <blockquote className="italic font-semibold mt-8 bg-gray-100 p-4 rounded-md">
                        “Before charging in with the cavalry, one must always have a good scouting team.”
                    </blockquote>
                </article>
            </section>
        </div>
    );
}
