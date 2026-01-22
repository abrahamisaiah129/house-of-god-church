"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function WelcomeVideoPopup({
  initialOpen = false,
  initialMinimized = false,
  autoOpen = true,
  openTrigger = null,
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isMinimized, setIsMinimized] = useState(initialMinimized);
  const searchParams = useSearchParams();
  const videoRef = useRef(null);

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

  // Global Event Listener & URL Check
  useEffect(() => {
    const handleGlobalTrigger = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };

    window.addEventListener("open-welcome-video", handleGlobalTrigger);

    return () => {
      window.removeEventListener("open-welcome-video", handleGlobalTrigger);
    };
  }, []);

  // Check URL for ?watch=true (handles client-side navigation)
  useEffect(() => {
    if (searchParams.get("watch") === "true") {
      setTimeout(() => {
        setIsOpen(true);
        setIsMinimized(false);
      }, 0);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [searchParams]);

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

  const skip = (amount) => {
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
    }
  };

  return (
    <>
      {/* Hidden Trigger for DOM Manipulation Fallback */}
      <button
        id="global-open-video-trigger"
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        type="button"
      />

      {isOpen && (
        <>
          {/* Floating Resume Button */}
          <button
            onClick={() => setIsMinimized(false)}
            className={`fixed bottom-24 right-8 z-9999 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 animate-bounce ${
              isMinimized ? "flex" : "hidden"
            }`}
          >
            <span>Resume Live Video</span>
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
                  href="/media"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg px-3 py-1.5 text-xs md:text-sm font-bold whitespace-nowrap text-decoration-none"
                >
                  Watch More Videos
                </a>
                <a
                  href="/about/church"
                  className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg px-3 py-1.5 text-xs md:text-sm font-bold whitespace-nowrap text-decoration-none"
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
                {/* <h1 className="text-white fs-3 font-bold mb-2 text-center">
                  Welcome to Household of God Church
                </h1> */}

                <div className="w-full max-w-xl relative group">
                  <video
                    ref={videoRef}
                    className="w-full rounded-2xl shadow-2xl"
                    controls
                    autoPlay
                    muted
                    loop
                    poster={thumbnail}
                  >
                    <source src={placeholderVideo} type="video/mp4" />
                  </video>

                  {/* Custom Controls Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button
                      onClick={() => skip(-10)}
                      className="w-14 h-14 bg-black/60 hover:bg-yellow-500 hover:text-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all transform hover:scale-110 pointer-events-auto shadow-lg"
                      title="Rewind 10s"
                    >
                      <i className="fas fa-backward text-xl"></i>
                    </button>
                    <button
                      onClick={() => skip(10)}
                      className="w-14 h-14 bg-black/60 hover:bg-yellow-500 hover:text-black text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all transform hover:scale-110 pointer-events-auto shadow-lg"
                      title="Forward 10s"
                    >
                      <i className="fas fa-forward text-xl"></i>
                    </button>
                  </div>
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
              <div className="bg-gray-900 py-2 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap text-yellow-400 font-medium text-xs md:text-sm">
                  <span className="mx-6">
                    Watch Apokalupsis LIVE every Sunday at 7AM
                  </span>
                  <span className="mx-6">
                    Plot 4 Household of God Street, Ikeja
                  </span>
                  <span className="mx-6">
                    You are welcome in Jesus&#39; name
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
