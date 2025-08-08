"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ConsultingCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 h-screen flex items-center">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center text-left max-h-[80vh] overflow-y-auto">
            <img
              src="/images/hire-us-gallery/robert-wagner-marykay-l-carlson.jpeg"
              alt="Consulting Intro"
              className="max-w-full max-h-[500px] w-auto h-auto object-contain rounded-xl shadow-lg mx-auto"
            />
            <div className="text-left px-4">
              <h2 className="text-2xl font-semibold mb-4">
                Strategic Consulting
              </h2>
              <h3 className="text-lg font-medium mb-2">
                Navigate the Philippines with Local Insight and Generational
                Trust
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                With over a century of deep involvement in Philippine affairs,
                the Wagner family has built strong, enduring relationships
                across government, military, and business sectors. AEGIS offers
                consulting services grounded in this legacy — not theory, not
                guesswork.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-8 items-center justify-center text-left max-h-[80vh] overflow-y-auto">
            <div className="text-left px-4">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We help foreign investors, diplomats, and organizations
                understand the real dynamics of the country — beyond embassy
                briefings or surface-level introductions. Our clients gain
                access to decision-makers, avoid costly missteps, and receive
                guidance shaped by a long history of living and working
                alongside local communities.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                From business ventures and diplomatic strategy to long-term
                relocation, we offer clear-eyed, experience-based counsel for
                those serious about making a meaningful and secure entry into
                the Philippines.
              </p>
            </div>
            <img
              src="/images/hire-us-gallery/ambassador-meeting.jpeg"
              alt="Ambassador Meeting"
              className="max-w-full max-h-[500px] w-auto h-auto object-contain rounded-xl shadow-lg mx-auto"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col justify-center max-h-[80vh] overflow-y-auto px-6">
            {" "}
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Rather than surrendering and being sent to prison camps, hundreds
              went underground and fought the Imperial Japanese with their
              Filipino brothers and sisters, whom they had known and grew up
              with since early childhood. These Americans, speaking fluent,
              inflectional Tagalog, Kapampangan and Cebuano, were considered
              “Kababayan” (Compatriots, or accepted members of the Filipino
              community), just as much as their friends and neighbors with Malay
              or Aeta genetics. During the post-war decades, natural attrition
              and migration back to mainland America saw their numbers dwindle
              to under half the pre-war number, replenished only by military
              retirees from Subic Naval and Clark Air Force bases.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center max-h-[80vh] overflow-y-auto px-6">
            <p className="text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Some families, like the Wagner’s, Forbes’ , Smiths and Laurents,
              maintained a presence on the islands into the modern era. For the
              most part engaged in charitable or philanthropic efforts to aid
              the peoples of the Philippines, they also provided and continue to
              effect services for American industry, US government and visiting
              military elements using their extensive familial contacts with
              local power centers garnered and developed over more than a
              century of relationships.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
