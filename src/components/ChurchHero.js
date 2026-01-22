"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const defaultSlides = [
  {
    image: "/assets/images/ca1.png",
    welcomeText: "Welcome to",
    title: "HOUSEHOLD OF GOD CHURCH",
    subtitle:
      "Join us in worship, experience God's presence, and grow in faith.",
    serviceTime: "Sunday: 9 AM – Lagos, Nigeria",
  },
  {
    image: "/assets/images/ca3.png",
    welcomeText: "Experience",
    title: "GOD'S LOVE",
    subtitle: "Come as you are and encounter the transforming power of God.",
    serviceTime: "Wednesday Bible Study: 6 PM",
  },
  {
    image: "/assets/images/Rectangle 4.png",
    welcomeText: "Join Our",
    title: "COMMUNITY",
    subtitle: "Find your place in our growing family of believers.",
    serviceTime: "Friday Prayer: 6 PM",
  },
];

export default function ChurchHero({
  slides = defaultSlides,
  title,
  welcomeText,
  onWatchLive,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pathname = usePathname();

  const [slidesData, setSlidesData] = useState(defaultSlides);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/client/hero`,
        );
        const result = await res.json();
        if (result.success && result.data && result.data.length > 0) {
          setSlidesData(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch hero slides:", error);
      }
    };
    fetchSlides();
  }, []);

  const processedSlides = slidesData.map((slide) => ({
    ...slide,
    title: title || slide.title,
    welcomeText: welcomeText || slide.welcomeText,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processedSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [processedSlides.length]);

  return (
    <div className="hero-section mt-5 pt-3">
      <div id="churchCarousel" className="carousel slide">
        <div className="carousel-inner">
          {processedSlides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-overlay">
                <p>{slide.welcomeText}</p>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <p className="service-time">
                  <i className="fa-regular fa-calendar-days"></i>{" "}
                  {slide.serviceTime}
                </p>
                <button
                  className={`watch-btn ${pathname === "/" ? "" : "d-none"}`}
                  onClick={onWatchLive}
                  type="button"
                >
                  <i className="fa-solid fa-video"></i> Watch Apokalupsis Live
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={() =>
            setActiveIndex(
              (prev) =>
                (prev - 1 + processedSlides.length) % processedSlides.length,
            )
          }
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={() =>
            setActiveIndex((prev) => (prev + 1) % processedSlides.length)
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Custom Indicators */}
        <div className="custom-indicators">
          {processedSlides.map((_, index) => (
            <div
              key={index}
              className={`custom-indicator ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
