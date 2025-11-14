import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Testimonials() {
  const cards = [
    {
      img1: "/icons/igi.png",
      img2: "/icons/gia.png",
      tag: "Certified & Ethical Diamonds",
      para: "IGI & GIA Certification  on every piece.",
    },
    {
      img1: "/icons/Free Design Preview_.png",
      tag: "Factory-Direct Pricing",
      para: "No retail mark-ups.",
    },
    {
      img1: "/icons/Custom-Made Perfection.png",
      tag: "Custom-Made Perfection",
      para: "crafted to match your exact vision.",
    },
    {
      img1: "/icons/Lifetime Care & Exchange.png",
      tag: "Lifetime Care & Exchange",
      para: "Because your sparkle should last forever.",
    },
  ];
  const testi = [
    {
      user: "Riya, Delhi",
      says: "Absolutely loved the transparency and design process — my engagement ring turned out even better.",
    },
    {
      user: "Aarav, Mumbai",
      says:
        "The sparkle and craftsmanship are unmatched. I'm recommending them to everyone I know.",
    },
    {
      user: "Aman, UP",
      says:
        "The sparkle and craftsmanship are unmatched. I'm recommending them to everyone I know.",
    },
  ];
  return (
    <div className="w-screen bg-[url(/bg-yellow.jpg)] bg-center bg-no-repeat bg-cover p-4 flex flex-col gap-20 lg:gap-40 pb-20 lg:py-20">
      {/* first */}
      <div className="flex flex-col gap-5">
        <div className="text-[#263b2e] text-center">
          <h1 className="text-xl lg:text-3xl poppinsfont">Why Customers Choose</h1>
          <h1 className="text-5xl lg:text-7xl modernfont">Diamond Lleaf</h1>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:justify-items-center">
          {cards.map((card) => {
            return (
              <div className="relative rounded-2xl p-5 bg-[rgba(10,40,34,0)] backdrop-blur-md border border-[rgba(255,255,255,0.04)] shadow-lg xl:w-[90%]">
                <div className="absolute -top-2 left-6 w-10 h-1 rounded-xl bg-[rgba(255,255,255,0.03)] blur-sm" />
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 lg:w-50 flex items-center justify-center rounded-lg">
                    <img className="h-15 lg:h-50" src={card.img1} alt="" />
                    <img className="h-15 lg:h-50" src={card.img2} alt="" />
                  </div>
                  <div className="text-[10px] lg:text-3xl text-[#263b2e] modernfont font-medium tracking-tight">
                    {card.tag}
                  </div>
                  <div className="text-[8px] lg:text-base  text-[#263b2e] font-medium tracking-tight">
                    {card.para}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* second */}
       <div className="flex flex-col gap-5">
      {/* Heading */}
      <div className="text-[#263b2e] text-center">
        <h1 className="text-xl lg:text-3xl poppinsfont">What Our</h1>
        <h1 className="text-5xl lg:text-7xl modernfont">Customer Says</h1>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="w-full"
      >
        {testi.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-2xl p-5 bg-[rgba(10,40,34,0)] backdrop-blur-md border border-[rgba(255,255,255,0.04)] shadow-lg xl:w-[90%]">
              <div className="absolute -top-2 left-6 w-10 h-1 rounded-xl bg-[rgba(255,255,255,0.03)] blur-sm" />
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex justify-center items-center gap-2">
                  <div className="w-fit flex items-center justify-center rounded-lg bg-[rgba(255,255,255,0.02)]">
                    <img className="h-6 lg:h-10" src="/icons/user.png" />
                  </div>
                  <div className="text-[10px] lg:text-3xl text-[#263b2e] modernfont font-semibold">
                    {item.user}
                  </div>
                </div>
                <p className="text-[9px] lg:text-2xl xl:text-3xl text-[#263b2e] font-medium tracking-tight">
                 " {item.says}"
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
