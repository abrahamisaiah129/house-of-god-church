"use client";

import { useState, useEffect, useRef } from "react";

export default function WelcomeVideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const hasCheckedRef = useRef(false); // Prevents double run in Strict Mode

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Check if we should show popup (only on Sundays + once per day)
  useEffect(() => {
    if (hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    const today = new Date();
    const isSunday = today.getDay() === 0;

    if (!isSunday) return;

    const todayKey = `welcomePopup_${today.toISOString().slice(0, 10)}`;
    const hasSeenToday = localStorage.getItem(todayKey);

    if (!hasSeenToday) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    const todayKey = `welcomePopup_${new Date().toISOString().slice(0, 10)}`;
    localStorage.setItem(todayKey, "true");
  };

  // Countdown timer — only runs when popup is open
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
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 z-20 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-2xl hover:bg-gray-100 text-3xl font-bold text-gray-800"
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Header */}
        <div className="bg-linear-to-r from-yellow-600 to-yellow-500 text-white text-center py-8 px-6 rounded-t-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Welcome to Household of God Church
          </h2>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Video */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse z-10">
              LIVE NOW – Apokalupsis
            </div>
            <video
              className="w-full aspect-video bg-black"
              controls
              autoPlay
              muted
              loop
              poster="/assets/images/apokalupsis-thumbnail.jpg"
            >
              <source src="/videos/Apokalupsis.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>

          {/* Service Info */}
          <div className="text-center space-y-4">
            <p className="text-2xl font-bold text-yellow-600">
              Sundays at 7:00 AM
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Plot 4 Household of God Street,
              <br />
              Off Kudirat Abiola Way, Oregun, Ikeja, Lagos – Nigeria
            </p>
            <p className="text-xl font-semibold text-gray-800">
              Service Starts In
            </p>
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Mins" },
              { value: timeLeft.seconds, label: "Secs" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-linear-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-5 text-center shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Marquee */}
          <div className="bg-gray-100 rounded-xl p-5 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-lg font-medium text-gray-800">
              <span className="mx-8">
                Watch Apokalupsis LIVE every Sunday at 7AM
              </span>
              <span className="mx-8">Join us in person or online</span>
              <span className="mx-8">
                Experience the power and presence of God
              </span>
              <span className="mx-8">You are welcome in Jesus&apos; name!</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/media"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-lg py-4 px-10 rounded-xl text-center transition transform hover:scale-105"
            >
              Watch Live Stream
            </a>
            <a
              href="/about"
              className="mt-3 sm:mt-0 bg-gray-800 hover:bg-gray-900 text-white font-bold text-lg py-4 px-10 rounded-xl text-center transition transform hover:scale-105"
            >
              Visit Our Church
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
