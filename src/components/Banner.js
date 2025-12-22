'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Banner({ title, highlight = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "/assets/images/ca1.png",
      title: title,
      subtitle:
        "Join us in worship, experience God's presence, and grow in faith.",
      serviceTime: "Sunday: 9 AM – Lagos, Nigeria",
    },
    {
      image: "/assets/images/ca3.png",
      title: title,
      subtitle: "Come as you are and encounter the transforming power of God.",
      serviceTime: "Wednesday Bible Study: 6 PM",
    },
    {
      image: "/assets/images/Rectangle 4.png",
      title: title,
      subtitle: "Find your place in our growing family of believers.",
      serviceTime: "Friday Prayer: 6 PM",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[60vh] mt-20 overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
            {highlight && (
              <p className="text-yellow-400 font-bold mb-2 uppercase tracking-wider">
                {highlight}
              </p>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
            <p className="flex items-center gap-2 text-sm md:text-base mb-8 font-medium">
              <i className="fa-regular fa-calendar-days text-yellow-400"></i>{" "}
              {slide.serviceTime}
            </p>
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2 shadow-lg"
            >
              <i className="fa-solid fa-video"></i> Watch Live
            </a>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-yellow-500 w-8"
                : "bg-white/50 w-2 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}