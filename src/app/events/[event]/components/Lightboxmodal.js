"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function LightboxModal({ images, index, onClose, onPrev, onNext }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onPrev, onNext, onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-6xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-5xl hover:text-yellow-400 z-10 bg-black/60 rounded-full w-12 h-12 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-yellow-400 z-10 bg-black/60 rounded-full w-16 h-16 flex items-center justify-center"
        >
          ‹
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-6xl hover:text-yellow-400 z-10 bg-black/60 rounded-full w-16 h-16 flex items-center justify-center"
        >
          ›
        </button>

        <div className="flex justify-center items-center min-h-screen">
          <Image
            src={images[index]}
            alt={`Image ${index + 1}`}
            width={1200}
            height={800}
            className="max-w-full max-h-screen object-contain rounded-lg"
            priority
          />
        </div>

        <div className="text-center text-white text-xl mt-4 font-medium">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}