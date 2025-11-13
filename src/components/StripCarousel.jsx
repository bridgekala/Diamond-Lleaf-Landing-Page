import React from "react";

export default function StripCarousel() {
  const message = (
    <>
      <span className="mx-8">Transparent Pricing</span>
      <span className="mx-8">Free Consultation</span>
      <span className="mx-8">Lifetime Exchange</span>
      <span className="mx-8">IGI Certified</span>
    </>
  );

  return (
    <div className="bg-[#ffe277] text-[#263b2e] h-[4vh] poppinsfont w-full z-50 overflow-hidden flex items-center">
      <div className="strip-track">
        <div className="scroll-content">
          {message}
          {message}
          {message}
          {message}
        </div>
      </div>
    </div>
  );
}
