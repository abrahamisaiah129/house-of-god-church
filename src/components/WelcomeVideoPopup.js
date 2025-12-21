"use client";

import { useState, useEffect } from "react";

export default function WelcomeVideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Assets
  const placeholderVideo = "/assets/videos/intro.mp4";
  const liveServiceVideo = "/assets/videos/Apokalupsis.mp4";
  const thumbnail = "/assets/images/apokalupsis-thumbnail.jpg";

  // Open on load
  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

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
    <div className="fixed inset-0 z-9999 bg-black">
      {/* TOP TRAY */}
      <div className="absolute top-0 inset-x-0 h-14 bg-black/80 backdrop-blur flex items-center justify-between px-4 md:px-8 z-50">
        <span className="text-white font-bold text-sm md:text-base">
          {isServiceTime ? "LIVE – Apokalupsis" : "Apokalupsis Service"}
        </span>
        <div className="flex gap-3">
          <button
            onClick={() => setIsMinimized((p) => !p)}
            className="bg-white/90 hover:bg-white text-black rounded-lg px-3 py-1 text-sm font-semibold"
          >
            {isMinimized ? "Expand" : "Minimize"}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-red-600 hover:bg-red-500 text-white rounded-lg px-3 py-1 text-sm font-semibold"
          >
            Close
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-16 h-full flex flex-col">
        {/* VIDEO AREA */}
        {!isMinimized && (
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
              <div className="mt-6 grid grid-cols-4 gap-2 max-w-sm w-full">
                {Object.entries(timeLeft).map(([k, v]) => (
                  <div key={k} className="bg-white rounded-xl py-3 text-center">
                    <div className="text-2xl font-bold">
                      {String(v).padStart(2, "0")}
                    </div>
                    <div className="text-xs font-semibold uppercase">{k}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MARQUEE */}
        <div className="bg-gray-900 py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-yellow-400 font-medium text-sm md:text-base">
            <span className="mx-6">
              Watch Apokalupsis LIVE every Sunday at 7AM
            </span>
            <span className="mx-6">Plot 4 Household of God Street, Ikeja</span>
            <span className="mx-6">You are welcome in Jesus&#39; name</span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="bg-black px-4 py-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/live"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl text-center"
          >
            Watch Live Stream
          </a>
          <a
            href="/about"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-xl text-center"
          >
            Discover Church
          </a>
        </div>
      </div>
    </div>
  );
}
