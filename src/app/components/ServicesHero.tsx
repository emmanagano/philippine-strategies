import React from "react";

interface ServicesHeroProps {
  headline: string;
  imageSrc: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ headline, imageSrc }) => {
  return (
    <div className="w-full overflow-x-hidden bg-gray-100 text-black text-center pt-16 pb-6 relative z-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase">
        {headline}
      </h1>
      <div className="relative w-full h-[65vh] overflow-hidden mt-8 rounded-2xl mx-auto max-w-full px-4">
        <img
          src={imageSrc}
          alt=""
          className="object-contain w-full h-full rounded-2xl"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default ServicesHero;
