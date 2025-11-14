import React, { useState } from "react";

export default function OurCollections() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    {
      name: "Bridal Jewelry",
      info: "Crafted for the Big Day",
      images: {
        main: "/images/1.jpg",
        secondary: "/images/1.1.jpg",
      },
      images2: {
        main: "/images/2.jpg",
        secondary: "/images/2.1.jpg",
      },
    },
    {
      name: "Engagement Rings",
      info: "Find Your Perfect Ring",
      images: {
        main: "/images/1.1.jpg",
        secondary: "/images/1.jpg",
      },
      images2: {
        main: "/images/1.jpg",
        secondary: "/images/1.1.jpg",
      },
    },
    {
      name: "Earrings & Pendants",
      info: "Everyday Sparkle, Effortless Style",
      images: {
        main: "/images/1.jpg",
        secondary: "/images/1.1.jpg",
      },
      images2: {
        main: "/images/1.jpg",
        secondary: "/images/1.1.jpg",
      },
    },
    {
      name: "Men's Collection",
      info: "Refind, Bold, Modern",
      images: {
        main: "/images/1.1.jpg",
        secondary: "/images/1.jpg",
      },
      images2: {
        main: "/images/1.jpg",
        secondary: "/images/1.1.jpg",
      },
    },
  ];
  return (
    <div className='w-screen bg-[url("/bg-yellow.jpg")] bg-no-repeat bg-cover bg-center flex flex-col items-center gap-40 lg:gap-20 p-4 pb-50 lg:pb-20 lg:pt-15 xl:py-30'>
      <div className="text-center">
        <div className="mb-2 lg:flex lg:gap-2 lg:justify-center lg:items-center">
          <h1 className="text-4xl lg:text-6xl text-[#263b2e] modernfont">Explore</h1>
          <h1 className="text-4xl lg:text-6xl text-[#263b2e] modernfont">
            Our Collections
          </h1>
        </div>

        <p className="text-white text-xs lg:text-2xl w-75 lg:w-fit lg:px-4 poppinsfont bg-[#263b2e] rounded-3xl py-2">
          For every occasion, for every story There's a{" "}
          <span className="font-bold">Diamond Lleaf</span> creation.
        </p>
      </div>
      {/* category */}
      <section className="relative w-full">
        <div className="absolute left-10 bottom-35 lg:bottom-25 xl:left-50">
          <img
            className="h-35 lg:h-70 xl:h-90 relative rounded-xl shadow-xl/30 shadow-[#263b2e] border-b border-r border-[#263b2e]"
            src={categories[selectedCategory].images.main}
            alt={categories[selectedCategory].name}
          />
          <img
            className="h-20 lg:h-40 xl:h-50 absolute -bottom-10 -left-7 lg:-bottom-20 lg:left-35 rounded-xl shadow-xl/30 shadow-[#263b2e] border-b border-r border-[#263b2e]"
            src={categories[selectedCategory].images.secondary}
            alt={categories[selectedCategory].name}
          />
        </div>
        <div className="lg:flex lg:flex-col lg:gap-15">
          {categories.map((category, index) => {
            const isActive = index === selectedCategory;
            return (
              <div
                key={index}
                onClick={() => setSelectedCategory(index)}
                className="text-center text-[#263b2e] cursor-pointer"
              >
                <h1
                  className={`modernfont transition-all duration-200 ${
                    isActive
                      ? "text-xl md:text-2xl lg:text-5xl font-semibold scale-105"
                      : "text-base lg:text-4xl"
                  }`}
                >
                  {category.name}
                </h1>
                <p className="poppinsfont text-[7px] lg:text-lg">{category.info}</p>
              </div>
            );
          })}
        </div>
        <div className="absolute right-8 lg:bottom-15 xl:bottom-10 xl:right-60">
          <img
            className="h-35 lg:h-70 xl:h-90 relative rounded-xl shadow-xl/30 shadow-[#263b2e] border-b border-r border-[#263b2e]"
            src={categories[selectedCategory].images2.main}
            alt={categories[selectedCategory].name}
          />
          <img
            className="h-20 lg:h-40 xl:h-50 absolute -top-7 -right-6 lg:-left-10 lg:-top-20 rounded-xl shadow-xl/30 shadow-[#263b2e] border-b border-r border-[#263b2e]"
            src={categories[selectedCategory].images2.secondary}
            alt={categories[selectedCategory].name}
          />
        </div>
      </section>
    </div>
  );
}
