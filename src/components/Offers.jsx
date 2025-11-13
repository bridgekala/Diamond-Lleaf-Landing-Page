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
    <div className=" w-screen bg-[url(/bg-green.jpg)]  bg-no-repeat bg-cover bg-center p-10 flex flex-col items-center gap-4">
      <div className="text-center">
        <h1 className="modernfont text-[#ffe277] text-2xl">
          This Week's Exclusive Offer
        </h1>
        <p className="poppinsfont text-[#b2963c] text-[9px]">
          Book your free consultation and{" "}
          <span className="text-[#ffe277]">
            get a complimentory diamond upgrade or ₹5,000 off
          </span>{" "}
          your first purchase.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {cards.map((card) => {
          return (
            <div className="relative rounded-2xl p-5 bg-[rgba(10,40,34,0)] backdrop-blur-md border border-[rgba(255,255,255,0.04)] shadow-lg">
              <div className="absolute -top-2 left-6 w-10 h-1 rounded-xl bg-[rgba(255,255,255,0.03)] blur-sm" />
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 flex items-center justify-center rounded-lg bg-[rgba(255,255,255,0.02)]">
                  <img className="h-10" src={card.img} alt="" />
                </div>
                <div className="text-[16px] text-[#ffe277] font-medium tracking-tight">
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
