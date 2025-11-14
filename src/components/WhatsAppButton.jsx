import React from "react";

export default function WhatsAppButton({ phone = "YOUR_PHONE_NUMBER", message = "Hi! I found your site and would like to chat." }) {
  // phone should be in international format without + or dashes, e.g. 919876543210
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const wrapperStyle = {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    cursor: "pointer",
    textDecoration: "none",
  };

  const svgStyle = { width: "28px", height: "28px", display: "block" };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={wrapperStyle}
    >
      {/* WhatsApp SVG icon (simple, scalable) */}
      <svg
        style={svgStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.373 0 .03 5.346.03 12c0 2.11.55 4.08 1.6 5.84L0 24l6.42-1.68A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52z"
          fill="#fff"
          opacity="0.12"
        />
        <path
          d="M12.04 2.01c-5.49 0-9.98 4.48-9.98 9.99 0 1.76.45 3.41 1.24 4.88L3 21l4.37-1.15a9.96 9.96 0 0 0 4.67 1.1c5.5 0 9.98-4.48 9.98-9.99S17.54 2.01 12.04 2.01zM17.12 14.86c-.24.69-1.38 1.32-1.9 1.4-.5.08-1.13.11-3.02-.61-2.7-1.02-4.46-3.77-4.59-3.93-.13-.16-1.04-1.46-1.04-2.79 0-1.33.72-1.99.98-2.26.26-.27.57-.34.76-.34.19 0 .38.01.54.02.17.02.39-.06.6.44.22.5.76 1.73.83 1.86.08.13.13.28.03.45-.09.16-.14.28-.29.43-.15.15-.33.34-.47.47-.14.13-.28.27-.12.52.16.25.71 1.16 1.53 1.88 1.05.94 1.94 1.23 2.25 1.36.31.12.5.1.68-.06.18-.16.77-.9.97-1.2.2-.3.41-.24.69-.14.28.1 1.78.84 2.09.99.31.15.52.23.47.45z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}
