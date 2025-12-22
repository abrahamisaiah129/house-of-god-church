"use client";

import { useState } from "react";
import ChurchLayout from "@/app/layout/ChurchLayout";
import ChurchHero from "@/components/ChurchHero";
import AboutChurch from "@/components/AboutChurch";
import WatchSermons from "@/components/WatchSermons";
import Programmes from "@/components/Programmes";
import BookSection from "@/components/BookSection";
import ContactSection from "@/components/ContactSection";
import AnnouncementsCarousel from "@/components/AnnouncementsCarousel";

// This file must be in src/components/WelcomeVideoPopup.js
import WelcomeVideoPopup from "@/components/WelcomeVideoPopup";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [watchLiveTrigger, setWatchLiveTrigger] = useState(null);

  return (
    <ChurchLayout>
      <ChurchHero onWatchLive={() => setWatchLiveTrigger(Date.now())} />
      <AboutChurch />
      <WatchSermons />
      {/* Announcements carousel — placed near Programmes */}

      <Programmes />
      <AnnouncementsCarousel />
      <BookSection />
      <ContactSection />

      {/* This popup appears ONLY on Sundays, once per day */}
      <WelcomeVideoPopup openTrigger={watchLiveTrigger} />
      <ScrollToTop />
    </ChurchLayout>
  );
}
