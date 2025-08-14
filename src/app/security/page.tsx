import ServicesHero from "../components/ServicesHero";
import ContactUsCTA from "@/app/components/CTA/ContactUs";

export default function SecurityPage() {
  return (
    <>
      <ServicesHero headline="SECURITY" imageSrc="/images/security-hero.jpg" />

      <section className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800">
            <p>
              The word &quot;AEGIS&quot; was first spoken verbally some 3500
              years ago by a group of Mycenaean Philosophers in a region along
              the Aegean Sea that is today Modern Greece, and translated to
              aggregate concepts of leadership, defense and diplomacy.
            </p>
            <p>
              The ancient Greeks knew &quot;Aegis&quot; as the battle shield of
              Zeus’ wife, Athena, an emblem of divine power within their
              mythologies.
            </p>
            <p>
              In later eras the term was used to describe the shield as a
              protective force, becoming a component of the official post-Roman
              city seal of today’s Athens.
            </p>
            <p>
              Our goal at AEGIS, is simple: Like the shield of Athena, beyond
              our consulting services we provide world-class personal protection
              details for our many overseas clients during visits to the
              Philippines, offering qualitatively superior solutions.
            </p>
            <p>
              What makes us different is who it is that makes up our troops and
              the level of respect the mere hint of their presence evokes among
              groups who might be thinking of causing trouble for our clients:
              Former US Marine Force Recon leaders and Philippine Marine MARSOG
              operators
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/images/security-services-image-1.jpeg"
              alt="Security service example 1"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/images/security-services-image-2.jpeg"
              alt="Security service example 2"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <ContactUsCTA
            heading="Request a quote"
            subheading="Our security team is ready to assist you anywhere in the Philippines."
            buttonText="aegis@philippinestrategies.com"
            buttonLink="mailto:aegis@philippinestrategies.com"
          />
        </div>
      </section>
    </>
  );
}
