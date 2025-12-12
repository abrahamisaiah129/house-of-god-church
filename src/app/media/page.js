"use client";

import BaseFooter from "@/components/BaseFooter";
import Tabs from "./Tabs";
import VideoPage from "./video";
import AudioPage from "./audio";
import GalleryPage from "./gallery";
import Header from "@/components/Navigation";
export default function MediaPage() {
  return (
    <>
      <Header />
      {/* takes the file selected ad renders it ( as a returned component) */}
      <Tabs
        Video={<VideoPage />}
        Audio={<AudioPage />}
        Gallery={<GalleryPage />}
      />

      <BaseFooter />
    </>
  );
}
