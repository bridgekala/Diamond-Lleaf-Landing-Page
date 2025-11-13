import React from "react";
import StripCarousel from "../components/StripCarousel";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen bg-[url(/herobg.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-end items-center">
      <div className="p-10 flex flex-col gap-2">
        <div>
          <h1 className="text-4xl text-[#ffe277] modernfont">Certified</h1>
          <h1 className="text-4xl text-[#ffe277] modernfont">
            Diamond Jewellery
          </h1>
        </div>

        <h2 className="poppinsfont spacing text-base text-[#ffe277]">
          Crafted for Forever.
        </h2>
        <p className="poppinsfont text-base text-[#ffe277]">
          Discover lab-grown & natural diamond Jewellery that blends ethical
          luxury with timeless beauty.
        </p>
        <button className="modernfont text-2xl mt-5 text-[#263b2e] bg-[#ffe277] rounded-xl w-fit px-4">
          Book Free Consultation
        </button>
      </div>
      <div className="mb-7">
        <StripCarousel />
      </div>
    </div>
  );
}
