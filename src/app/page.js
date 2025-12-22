"use client";

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

export default function Home() {
  return (
    <ChurchLayout>
      <ChurchHero />
      <AboutChurch />
      <WatchSermons />
      {/* Announcements carousel — placed near Programmes */}

      <Programmes />
      <AnnouncementsCarousel />
      <BookSection />
      <ContactSection />

      {/* This popup appears ONLY on Sundays, once per day */}
      <WelcomeVideoPopup />
    </ChurchLayout>
  );
}
