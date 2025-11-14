import React from "react";

export default function Offers() {
  const cards = [
    {
      img: "/icons/Free Consultation.png",
      tag: "Free Consultation",
    },
    {
      img: "/icons/Free Design Preview_.png",
      tag: "Free Design Preview",
    },
    {
      img: "/icons/₹5,000 Voucher_.png",
      tag: "₹5,000 Voucher",
    },
  ];
  return (
    <div className=" w-screen bg-[url(/bg-green.jpg)]  bg-no-repeat bg-cover bg-center p-10 lg:py-20 xl:py-30 flex flex-col items-center gap-4 lg:gap-15 xl:gap-20">
      <div className="text-center lg:flex lg:flex-col lg:justify-center items-center">
        <h1 className="modernfont text-[#ffe277] text-2xl lg:text-6xl xl:text-8xl">
          This Week's Exclusive Offer
        </h1>
        <p className="poppinsfont text-[#b2963c] text-[9px] lg:text-xl xl:text-3xl lg:w-[60%]">
          Book your free consultation and{" "}
          <span className="text-[#ffe277]">
            get a complimentory diamond upgrade or ₹5,000 off
          </span>{" "}
          your first purchase.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-15">
        {cards.map((card,i) => {
          return (
            <div key={i} className="relative rounded-2xl p-5 bg-[rgba(10,40,34,0)] backdrop-blur-md border border-[rgba(255,255,255,0.04)] shadow-lg">
              <div className="absolute -top-2 left-6 w-10 h-1 rounded-xl bg-[rgba(255,255,255,0.03)] blur-sm" />
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 lg:w-40 xl:w-50 flex items-center justify-center rounded-lg ">
                  <img className="h-10 lg:h-30 xl:h-50" src={card.img} alt="" />
                </div>
                <div className="text-[16px] lg:text-2xl xl:text-3xl text-[#ffe277] font-medium tracking-tight">
                  {card.tag}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="text-[#263b2e] bg-[#ffe277] px-4 py-1 rounded-xl text-2xl">Offer valid till Sunday</h1>
      </div>
    </div>
  );
}
