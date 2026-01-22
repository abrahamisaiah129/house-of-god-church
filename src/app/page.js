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

import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const triggerWatchLive = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-welcome-video"));
      document.getElementById("global-open-video-trigger")?.click();
    }
  };

  return (
    <ChurchLayout>
      <ChurchHero onWatchLive={triggerWatchLive} />
      <AboutChurch />
      <WatchSermons />
      {/* Announcements carousel — placed near Programmes */}

      <Programmes />
      <AnnouncementsCarousel />
      <BookSection />
      <ContactSection />

      <ScrollToTop />
    </ChurchLayout>
  );
}
