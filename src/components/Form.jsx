import React, { useEffect, useRef, useState } from "react";

function Dropdown({
  name,
  placeholder,
  options,
  value,
  onChange,
  includeHiddenInput = true,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || null);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // keep internal selected in sync when parent controls value
  useEffect(() => {
    setSelected(value || null);
  }, [value]);

  const selectOption = (opt) => {
    if (onChange) onChange(opt);
    else setSelected(opt);
    setOpen(false);
  };

  const active = value ?? selected;

  return (
    <div className="relative w-full" ref={ref}>
      {/* Hidden input to participate in native form submission (optional) */}
      {includeHiddenInput && (
        <input type="hidden" name={name} value={active ? active.value : ""} />
      )}

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left border rounded-3xl bg-[#263b2e00] border-[#263b2e54] p-2 text-[#ffe277] shadow-xl/20 poppinsfont flex items-center justify-between"
      >
        <span className="truncate">{active ? active.label : placeholder}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            open ? "transform rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7l5 5 5-5"
            stroke="#ffe277"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-50 mt-2 w-full max-h-48 overflow-auto rounded-2xl bg-[#263b2eff] backdrop-blur-md border border-[#263b2e54] p-1 shadow-xl/20 poppinsfont"
        >
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                role="option"
                onClick={() => selectOption(opt)}
                className="w-full text-left p-2 rounded-lg text-[#ffe277] hover:bg-[#263b2e54]"
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Form({ compact = false, className = "" }) {
  const [jewelleryOption, setJewelleryOption] = useState(null); // stores selected option object
  const [isCustom, setIsCustom] = useState(false);
  const [customText, setCustomText] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef(null);


const handleSubmit = async (e) => {
  e.preventDefault();

  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  // validation
  if (!data.fullName || !data.whatsapp) {
    setMessage("Please enter your name and WhatsApp number.");
    return;
  }

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxmaWlCPXnrmtqKSnBFrE1St0FEJsheoFE07BsHph9oy_8S2gYY1noY5SFAXOK_zuV1EQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setMessage("Thanks! We'll contact you within 24 hours.");
  } catch (error) {
    console.error(error);
    setMessage("Something went wrong, please try again.");
  }

  // Reset form
  e.target.reset();
  setJewelleryOption(null);
  setIsCustom(false);
  setCustomText("");

  setTimeout(() => setMessage(""), 6000);
};

  // Render a compact inline form when used inside popup, otherwise full-screen layout
  const formElement = (
    <form
      action=""
      ref={formRef}
      onSubmit={handleSubmit}
      className={`flex flex-col w-full ${
        compact ? "gap-3" : "w-[80%] lg:w-[60%] gap-4 lg:gap-7 xl:gap-10"
      }`}
    >
      <input
        name="fullName"
        className="border rounded-3xl bg-[#263b2e00] border-[#263b2e54] p-2 text-[#ffe277] shadow-xl/20 poppinsfont"
        type="text"
        placeholder="Full Name"
      />
      <input
        name="whatsapp"
        className="border rounded-3xl bg-[#263b2e00] border-[#263b2e54] p-2 text-[#ffe277] shadow-xl/20 poppinsfont"
        type="tel"
        placeholder="WhatsApp Number"
      />
      <input
        name="city"
        className="border rounded-3xl bg-[#263b2e00] border-[#263b2e54] p-2 text-[#ffe277] shadow-xl/20 poppinsfont"
        type="text"
        placeholder="City"
      />

      <Dropdown
        name="jewelleryType"
        includeHiddenInput={
          false
        } /* parent will control submitted value to support custom text */
        placeholder="--Jewellery Type--"
        value={jewelleryOption}
        onChange={(opt) => {
          setJewelleryOption(opt);
          if (opt && opt.value === "custom") {
            setIsCustom(true);
            setCustomText("");
          } else {
            setIsCustom(false);
            setCustomText("");
          }
        }}
        options={[
          { value: "ring", label: "Ring" },
          { value: "pendant", label: "Pendant" },
          { value: "earrings", label: "Earrings" },
          { value: "bridal", label: "Bridal" },
          { value: "custom", label: "Custom" },
        ]}
      />

      {/* Hidden input used for form submission. If custom is selected we send the typed value, otherwise the option value */}
      <input
        type="hidden"
        name="jewelleryType"
        value={
          isCustom ? customText : jewelleryOption ? jewelleryOption.value : ""
        }
      />

      {/* If user selected Custom, show a text input to type their own type */}
      {isCustom && (
        <input
          name="jewelleryCustom"
          className="border rounded-3xl bg-[#263b2e00] border-[#263b2e54] p-2 text-[#ffe277] shadow-xl/20 poppinsfont"
          type="text"
          placeholder="Type your custom jewellery type"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
        />
      )}

      <button
        type="submit"
        className="w-full border border-[#ffe277] rounded-3xl text-[#ffe277] p-2 mt-2 poppinsfont hover:bg-[#ffe277] hover:text-[#263b2e] transition-colors"
      >
        Submit
      </button>

      {message && (
        <p className="text-center text-sm text-[#ffe277] mt-2">{message}</p>
      )}
    </form>
  );

  if (compact) {
    return <div className={`w-full ${className}`}>{formElement}</div>;
  }

  return (
    <div className="h-screen w-screen bg-[url(/bg-green.jpg)] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-15">
      <div className="modernfont text-[#ffe277] text-3xl lg:text-6xl text-center">
        <h1>Book Your Free</h1>
        <h1>Consultation Now</h1>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        {formElement}
      </div>
      <div className="w-full flex justify-center">
        <h1 className="border border-[#ffe277] rounded-xl text-[#ffe277] text-xs lg:text-lg xl:text-2xl text-center w-[70%] lg:w-[50%] xl:w-[30%] p-1">
          Get a personalized quote and design suggestions from our experts
          within 24 hours.
        </h1>
      </div>
    </div>
  );
}
