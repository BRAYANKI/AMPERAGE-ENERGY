"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Return to top"
      className="fixed bottom-24 right-6 z-[9999] bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:bg-green-700 transition-all duration-300"
    >
      ↑
    </button>
  );
}