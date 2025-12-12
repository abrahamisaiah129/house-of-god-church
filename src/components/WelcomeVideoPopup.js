"use client";

import { useState, useEffect } from "react";

export default function WelcomeVideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const videoThumbnail =
    "/assets/images/apokalupsis-thumbnail.jpg" || "/assets/images/hog-logo.png";
  const videoSource = "/assets/videos/Apokalupsis.mp4";
  // Poster image for the video
  // Show popup on first visit (or every time — remove localStorage if you want every load)
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("welcomePopupSeen");

    // Remove this line below if you want it to show EVERY TIME
    if (hasSeenPopup) return;

    // Small delay so it doesn't flash on fast loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("welcomePopupSeen", "true"); // Remember user closed it
  };

  // Countdown to next Sunday 7:00 AM
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!isOpen) return;

    const updateCountdown = () => {
      const now = new Date();
      let nextSunday = new Date(now);
      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
      nextSunday.setHours(7, 0, 0, 0);

      if (now >= nextSunday) {
        nextSunday.setDate(nextSunday.getDate() + 7);
      }

      const diff = nextSunday - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-9999 flex items-center justify-center p-4">
      <div className="bg-dark rounded-3xl shadow-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl text-4xl font-bold text-gray-800 transition-all hover:scale-110"
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <div className="bg-black text-white text-center py-10 px-6 rounded-t-3xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Welcome to Household of God Church
          </h2>
        </div>

        <div className="p-6 bg-black md:p-10 space-y-8">
          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-3xl border-4 border-yellow-500">
            <div className="absolute top-4 left-4 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse z-10 shadow-lg">
              LIVE NOW – Apokalupsis
            </div>
            <video
              className="w-full aspect-video bg-black"
              controls
              autoPlay
              muted
              loop
              poster={videoThumbnail}
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>

          {/* Service Info */}
          <div className="text-center space-y-5">
            <p className="text-3xl font-bold text-yellow-600">
              Sundays at 7:00 AM
            </p>
            <p className="text-xl text-light leading-relaxed font-medium">
              Plot 4 Household of God Street,
              <br />
              Off Kudirat Abiola Way, Oregun, Ikeja, Lagos – Nigeria
            </p>
            <p className="text-2xl font-bold text-gray-800">
              Service Starts In
            </p>
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-6 max-w-lg mx-auto">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Mins" },
              { value: timeLeft.seconds, label: "Secs" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white text-dark rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition"
              >
                <div className="text-5xl md:text-6xl font-black">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Marquee */}
          <div className="bg-gray-100 rounded-2xl p-6 overflow-hidden shadow-inner">
            <div className="animate-marquee whitespace-nowrap text-xl font-bold text-gray-800">
              <span className="mx-10">
                Watch Apokalupsis LIVE every Sunday at 7AM
              </span>
              <span className="mx-10">Join us in person or online</span>
              <span className="mx-10">
                Experience the power and presence of God
              </span>
              <span className="mx-10">
                You are welcome in Jesus&apos; name!
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <a
              href="/media"
              className="bg-warning text-white font-black text-xl text-decoration-none py-5 px-12 rounded-2xl text-center transition-all transform hover:scale-110 shadow-2xl"
            >
              Watch Live Stream
            </a>
            <a
              href="/about"
              className="bg-gray-900 hover:bg-black text-white  text-decoration-none font-black text-xl py-5 px-12 rounded-2xl text-center transition-all transform hover:scale-110 shadow-2xl"
            >
              Visit Our Church
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
