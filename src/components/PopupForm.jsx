import React, { useEffect, useRef, useState } from "react";
import Form from "./Form";

function Dropdown({ name, placeholder, options, value, onChange, includeHiddenInput = true }) {
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
          className={`w-4 h-4 ml-2 transition-transform ${open ? "transform rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 7l5 5 5-5" stroke="#ffe277" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

export default function PopupForm() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40 p-4">
          <div className="relative bg-[url(/bg-green.jpg)] bg-no-repeat bg-center bg-cover rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-50 bg-[#ffe277] hover:bg-[#ffdd3d] text-[#263b2e] rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg transition-colors"
              aria-label="Close popup"
            >
              ✕
            </button>

            {/* Form Content - Scaled down version */}
            <div className="py-12 px-6">
              <div className="modernfont text-[#ffe277] text-3xl lg:text-5xl text-center mb-6">
                <h1>Book Your Free</h1>
                <h1>Consultation Now</h1>
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                {/* Reuse the main Form component in compact mode so popup submits the same way */}
                <Form compact={true} className="lg:w-[90%]" />
              </div>
              <div className="w-full flex justify-center mt-6">
                <p className="border border-[#ffe277] rounded-xl text-[#ffe277] text-sm lg:text-base text-center w-full p-3">
                  Get a personalized quote and design suggestions from our
                  experts within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
