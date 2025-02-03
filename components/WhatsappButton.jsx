import { Whatsapp } from "./icons";
import React from "react";

const WhatsappButton = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat en WhatsApp"
    >
      <Whatsapp size={38} />
    </a>
  );
};

export default WhatsappButton;
