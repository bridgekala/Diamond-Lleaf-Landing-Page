import React from "react";

export default function OurCollections() {
  const categories = [
    {
      name: "Bridal Jewelry",
      info: "Crafted for the Big Day",
    },
    {
      name: "Engagement Rings",
      info: "Find Your Perfect Ring",
    },
    {
      name: "Earrings & Pendants",
      info: "Everyday Sparkle, Effortless Style",
    },
    {
      name: "Men's Collection",
      info: "Refind, Bold, Modern",
    },
  ];
  return (
    <div className='h-screen w-screen bg-[url("/bg-yellow.jpg")] bg-no-repeat bg-cover bg-center flex flex-col items-center gap-40 p-4'>
      <div className="text-center">
        <div className="mb-2">
          <h1 className="text-4xl text-[#263b2e] modernfont">Explore</h1>
          <h1 className="text-4xl text-[#263b2e] modernfont">
            Our Collections
          </h1>
        </div>

        <p className="text-white text-xs w-75 poppinsfont bg-[#263b2e] rounded-3xl py-2">
          For every occasion, for every story There's a{" "}
          <span className="font-bold">Diamond Lleaf</span> creation.
        </p>
      </div>
      {/* category */}
      <section className="relative w-full">
        <div className="absolute left-10 bottom-35">
            <img className="h-35 relative rounded-xl shadow-xl/30 shadow-[#263b2e] border-b border-r border-[#263b2e]" src="/images/1.jpg" alt="" />
            <img className="h-20 absolute -bottom-10 -left-7 rounded-xl shadow-xl/30 shadow-[#263b2e] border-b border-r border-[#263b2e]" src="/images/1.1.jpg" alt="" />
        </div>
        <div>
          {categories.map((category) => {
            return (
              <div className="text-center text-[#263b2e]">
                <h1 className="modernfont text-base">{category.name}</h1>
                <p className="poppinsfont text-[7px]">{category.info}</p>
              </div>
            );
          })}
        </div>
        <div className="absolute right-8">
            <img className="h-35 relative rounded-xl shadow-xl/30 shadow-[#263b2e] border-b border-r border-[#263b2e]" src="/images/2.jpg" alt="" />
            <img className="h-20 absolute -top-7 -right-6 rounded-xl shadow-xl/30 shadow-[#263b2e] border-b border-r border-[#263b2e]" src="/images/2.1.jpg" alt="" />
        </div>
      </section>
    </div>
  );
}
