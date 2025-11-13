import React from "react";

export default function Form() {
  return (
    <div className="h-screen w-screen bg-[url(/bg-green.jpg)] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-15">
      <div className="modernfont text-[#ffe277] text-3xl text-center">
        <h1>Book Your Free</h1>
        <h1>Consultation Now</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <form action="" className="flex flex-col w-[80%] gap-8">
          <input
            className="border rounded-3xl bg-[#263b2e00] border-[#263b2e] p-2 text-[#ffe277] shadow-xl/20 poppinsfont glass-card"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="border rounded-3xl bg-[#263b2e00] border-[#263b2e] p-2 text-[#ffe277] shadow-xl/20 poppinsfont glass-card"
            type="Number"
            placeholder="WhatsApp Number"
          />
          <input
            className="border rounded-3xl bg-[#263b2e00] border-[#263b2e] p-2 text-[#ffe277] shadow-xl/20 poppinsfont glass-card"
            type="text"
            placeholder="City"
          />

          <select
            name=""
            id=""
            className="border rounded-3xl bg-[#263b2e00] border-[#263b2e] p-2 text-[#ffe277] shadow-xl/20 poppinsfont glass-card"
          >
            <option>--Jewellry Type--</option>
            <option value="">Ring</option>
            <option value="">Pendant</option>
            <option value="">Earrings </option>
            <option value="">Bridal</option>
            <option value="">Custom</option>
          </select>
        </form>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="border border-[#ffe277] rounded-xl text-[#ffe277] text-xs text-center w-[70%] p-1">
          Get a personalized quote and design suggestions from our experts
          within 24 hours.
        </h1>
      </div>
    </div>
  );
}
0;
