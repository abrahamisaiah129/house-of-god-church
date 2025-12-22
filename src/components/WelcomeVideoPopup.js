"use client";

import { useState, useEffect, useRef } from "react";

export default function WelcomeVideoPopup({
  initialOpen = false,
  initialMinimized = false,
  autoOpen = true,
  openTrigger = null,
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isMinimized, setIsMinimized] = useState(initialMinimized);

  // Assets
  const placeholderVideo = "/assets/videos/intro.mp4";
  const liveServiceVideo = "/assets/videos/Apokalupsis.mp4";
  const thumbnail = "/assets/images/apokalupsis-thumbnail.jpg";

  // Open on load
  useEffect(() => {
    if (autoOpen) {
      const t = setTimeout(() => setIsOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, [autoOpen]);

  // Handle external trigger
  const lastTriggerRef = useRef(openTrigger);
  useEffect(() => {
    if (openTrigger && openTrigger !== lastTriggerRef.current) {
      lastTriggerRef.current = openTrigger;
      setTimeout(() => {
        setIsOpen(true);
        setIsMinimized(false);
      }, 0);
    }
  }, [openTrigger]);

  // Countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isServiceTime, setIsServiceTime] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const tick = () => {
      const now = new Date();
      const isSunday = now.getDay() === 0;
      const hour = now.getHours();
      const duringService = isSunday && hour >= 7 && hour < 11;
      setIsServiceTime(duringService);

      let nextSunday = new Date(now);
      const daysUntilSunday = (7 - now.getDay()) % 7 || 7;
      nextSunday.setDate(now.getDate() + daysUntilSunday);
      nextSunday.setHours(7, 0, 0, 0);

      if (isSunday && hour >= 7) nextSunday.setDate(nextSunday.getDate() + 7);

      const diff = nextSunday - now;
      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Floating Resume Button */}
      <button
        onClick={() => setIsMinimized(false)}
        className={`fixed bottom-24 right-8 z-9999 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 animate-bounce ${
          isMinimized ? "flex" : "hidden"
        }`}
      >
        <span>Resume Playing</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-9999 bg-black ${
          isMinimized ? "hidden" : "block"
        }`}
      >
        {/* TOP TRAY */}
        <div className="absolute top-0 inset-x-0 h-16 bg-black/80 backdrop-blur flex items-center justify-between px-4 md:px-8 z-50">
          <span className="text-white font-bold text-sm md:text-base hidden sm:block">
            {isServiceTime ? "LIVE – Apokalupsis" : "Apokalupsis Service"}
          </span>
          <div className="flex gap-2 md:gap-3 items-center ml-auto sm:ml-0 w-full sm:w-auto justify-end">
            <a
              href="/live"
              className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg px-3 py-1.5 text-xs md:text-sm font-bold whitespace-nowrap"
            >
              Watch Live
            </a>
            <a
              href="/about"
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-3 py-1.5 text-xs md:text-sm font-bold whitespace-nowrap"
            >
              Discover
            </a>
            <div className="w-px h-6 bg-gray-600 mx-1"></div>
            <button
              onClick={() => setIsMinimized(true)}
              className="bg-white/90 hover:bg-white text-black rounded-lg px-3 py-1.5 text-xs md:text-sm font-semibold"
            >
              Minimize
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-600 hover:bg-red-500 text-white rounded-lg px-3 py-1.5 text-xs md:text-sm font-semibold"
            >
              Close
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-16 h-full flex flex-col">
          {/* VIDEO AREA */}
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <h1 className="text-white text-xl md:text-3xl font-bold mb-4 text-center">
              Welcome to Household of God Church
            </h1>

            <div className="w-full max-w-5xl">
              <video
                className="w-full rounded-2xl shadow-2xl"
                controls
                autoPlay
                muted
                loop={!isServiceTime}
                poster={thumbnail}
              >
                <source
                  src={isServiceTime ? liveServiceVideo : placeholderVideo}
                  type="video/mp4"
                />
              </video>
            </div>

            {!isServiceTime && (
              <div className="mt-8 flex justify-center gap-3 md:gap-6">
                {Object.entries(timeLeft).map(([k, v]) => (
                  <div key={k} className="flex flex-col items-center">
                    <div className="bg-gray-900 border border-gray-800 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,1)] relative overflow-hidden">
                      <div className="absolute top-0 w-full h-1/2 bg-white/5 pointer-events-none"></div>
                      <span className="text-2xl md:text-3xl font-mono font-bold text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                        {String(v).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase mt-2 tracking-widest">
                      {k}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MARQUEE */}
          <div className="bg-gray-900 py-3 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-yellow-400 font-medium text-sm md:text-base">
              <span className="mx-6">
                Watch Apokalupsis LIVE every Sunday at 7AM
              </span>
              <span className="mx-6">
                Plot 4 Household of God Street, Ikeja
              </span>
              <span className="mx-6">You are welcome in Jesus&#39; name</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
