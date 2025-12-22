import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
/**
 * AnnouncementsCarousel
 * Props:
 * - items: ({ image: string, title: string, text: string, link?: string } | string)[]
 * - interval: number (ms between slides)
 * - className: string (tailwind classes to apply to wrapper)
 */

const DEFAULT_ITEMS = [
  {
    image: "/assets/images/ca1.png",
    title: "Sunday Service — 7:00 AM",
    text: "Join us for a powerful time of worship and the Word. Experience the presence of God and fellowship with the saints every Sunday morning.",
    link: "/#programmes",
  },
  {
    image: "/assets/images/ca3.png",
    title: "Midweek Bible Study — Wednesday 6:00 PM",
    text: "Deepen your understanding of the Scriptures. Join us as we explore the Bible verse by verse and grow together in faith.",
    link: "/departments/children",
  },
  {
    image: " /assets/images/Rectangle 4.png'",
    title: "Youth Fellowship — Friday 7:30 PM",
    text: "A vibrant community for young people to connect, worship, and discuss life's challenges from a biblical perspective.",
    link: "/events",
  },
  {
    image: "/assets/images/ca1.png",
    title: "Community Outreach — Volunteer this Saturday",
    text: "Let's make a difference in our community. Join our outreach team this Saturday as we share love and support to those in need.",
    link: "/events",
  },
];

export default function AnnouncementsCarousel({
  items = DEFAULT_ITEMS,
  interval = 3500,
  className = "mt-20 mb-12",
}) {
  const [index, setIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (!items || items.length < 2) return;
    const id = setInterval(() => {
      if (!pausedRef.current && !lightboxItem)
        setIndex((i) => (i + 1) % items.length);
    }, Math.max(800, interval));
    return () => clearInterval(id);
  }, [items, interval, lightboxItem]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`w-full relative ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
    >
      <div className="relative h-80 md:h-64 overflow-hidden">
        {items.map((item, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out px-12 md:px-16 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i === index ? "false" : "true"}
          >
            {typeof item === "string" ? (
              <span className="text-yellow-400 font-bold text-xl text-center px-4">
                {item}
              </span>
            ) : (
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full h-full max-w-4xl">
                {item.image && (
                  <div className="relative w-full md:w-1/3 h-24 md:h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-center w-full md:w-2/3 h-auto md:h-full text-center md:text-left">
                  <h3 className="text-yellow-400 font-bold text-lg md:text-xl mb-1 md:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm md:text-base line-clamp-5 md:line-clamp-4">
                    {item.text}
                  </p>
                  {(item.text || item.link) && (
                    <button
                      onClick={() => setLightboxItem(item)}
                      className="mt-2 inline-block bg-yellow-500 hover:bg-yellow-600 text-black text-xs md:text-sm font-bold py-1 px-3 rounded transition-colors"
                    >
                      Read More
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left text-lg"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right text-lg"></i>
          </button>
        </>
      )}

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-8 h-8 flex items-center justify-center rounded-full transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {lightboxItem.image && (
              <div className="relative w-full h-64 shrink-0">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                {lightboxItem.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
                {lightboxItem.text}
              </p>
              {lightboxItem.link && (
                <Link
                  href={lightboxItem.link}
                  onClick={() => setLightboxItem(null)}
                  className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition-colors"
                >
                  Visit Page
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Screen-reader live region */}
      <div className="sr-only" aria-live="polite">
        {typeof items[index] === "string"
          ? items[index]
          : `${items[index]?.title} - ${items[index]?.text}`}
      </div>
    </div>
  );
}
