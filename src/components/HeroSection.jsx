import React from "react";
import StripCarousel from "../components/StripCarousel";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen bg-[url(/herobg.jpg)] lg:bg-[url(/herobg-desktop.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-end">
      <div className="p-10 flex flex-col gap-2 lg:gap-5">
        <div>
          <h1 className="text-4xl lg:text-7xl text-[#ffe277] modernfont">Certified</h1>
          <h1 className="text-4xl lg:text-7xl text-[#ffe277] modernfont">
            Diamond Jewellery
          </h1>
        </div>

        <h2 className="poppinsfont spacing text-base text-[#ffe277] lg:text-3xl">
          Crafted for Forever.
        </h2>
        <p className="poppinsfont text-base text-[#ffe277] lg:text-3xl lg:w-[80%] xl:w-[40%]">
          Discover lab-grown & natural diamond Jewellery that blends ethical
          luxury with timeless beauty.
        </p>
        <button className="modernfont text-2xl lg:text-4xl lg:rounded-4xl mt-5 xl:mt-15 text-[#263b2e] bg-[#ffe277] rounded-xl w-fit px-4 lg:px-8 lg:py-2">
          Book Free Consultation
        </button>
      </div>
      <div className="mb-7 xl:mb-15">
        <StripCarousel />
      </div>
    </div>
  );
}
