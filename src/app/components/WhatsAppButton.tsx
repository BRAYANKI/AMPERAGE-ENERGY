"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "254726050901";

  const message = encodeURIComponent(
    "Hello Amperage Energy, I would like to inquire about your solar energy solutions."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Amperage Energy on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      {/* WhatsApp Icon */}
      <div className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:shadow-green-500/40 transition-all duration-300">
        <svg
          viewBox="0 0 32 32"
          className="w-9 h-9 text-white fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.2c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />

          <path d="M16 3C8.83 3 3 8.83 3 16c0 2.3.61 4.55 1.77 6.53L3.1 29l6.62-1.64A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.7c-2.06 0-4.08-.55-5.86-1.59l-.42-.25-3.93.97 1.05-3.83-.27-.39A10.67 10.67 0 1 1 16 26.7z" />
        </svg>

        {/* Online indicator */}
        <span className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </span>
      </div>

      {/* Tooltip */}
      <span className="absolute right-20 whitespace-nowrap bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-lg">
        Chat with us
      </span>
    </motion.a>
  );
}