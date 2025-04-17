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
    </div>
  );
}
