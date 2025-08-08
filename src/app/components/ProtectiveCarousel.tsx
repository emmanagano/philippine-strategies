"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProtectiveCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="w-full"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/hire-us-hero.jpg"
              alt="Protective Services Intro"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Protective Services
              </h2>
              <p className="text-lg mb-4">
                Elite protection, grounded in legacy and tactical excellence.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Our personnel include former US Marine Force Recon leaders and
                Philippine Marine MARSOG operators—offering discretion,
                deterrence, and unmatched respect in the field.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides here */}
        <SwiperSlide>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/hire-us-carousel/consulting-2.jpg"
              alt="Protective Operations"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Specialized Protection
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Whether you&apos;re a visiting executive, diplomat, or
                security-sensitive investor, our team provides tailored
                protection strategies that prioritize both safety and local
                awareness.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
