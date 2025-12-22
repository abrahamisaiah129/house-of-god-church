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
    image: "/assets/images/Rectangle 4.png",
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
  interval = 5000,
  className = "my-16",
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
      className={`w-full relative ${className} py-12 bg-black border-y border-yellow-500/10 text-white`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          {/* <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
            Stay Connected
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          ANNOUNCEMENTS
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
        </div>

        <div className="relative h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          {items.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-black bg-cover bg-center ${
                i === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                backgroundImage:
                  typeof item !== "string" && item.image
                    ? `url('${item.image}')`
                    : "none",
              }}
              aria-hidden={i === index ? "false" : "true"}
            >
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-8">
                {typeof item === "string" ? (
                  <span className="text-yellow-400 font-bold text-3xl md:text-4xl leading-relaxed max-w-3xl">
                    {item}
                  </span>
                ) : (
                  <>
                    <h3 className="text-yellow-400 font-bold text-3xl md:text-4xl leading-tight mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mb-6 line-clamp-3 drop-shadow-md">
                      {item.text}
                    </p>
                    {(item.text || item.link) && (
                      <button
                        onClick={() => setLightboxItem(item)}
                        className="bg-white hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Read More
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          {items.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-500 hover:text-black text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 z-20"
                aria-label="Previous slide"
              >
                <i className="fas fa-chevron-left text-lg"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-500 hover:text-black text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10 z-20"
                aria-label="Next slide"
              >
                <i className="fas fa-chevron-right text-lg"></i>
              </button>
            </>
          )}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                  : "w-2 bg-gray-700 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

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
              <p className="text-white text-base leading-relaxed whitespace-pre-wrap">
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
