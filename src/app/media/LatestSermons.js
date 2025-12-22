"use client";
import React, { useState, useMemo } from "react";
import { mediaData } from "./mediaData";
import { VideoCard, VideoModal } from "./video";

export default function LatestSermons() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Get latest 3 videos (sermons)
  const latestVideos = useMemo(() => {
    return (
      mediaData
        .filter((item) => item.video)
        // Sort by date descending (newest first)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
    );
  }, []);

  return (
    <section className="latest-sermons py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-warning fw-bold mb-2">
            Latest Sermons
          </h2>
          <p className="lead text-secondary fw-light">
            Watch our most recent services and messages.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {latestVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onWatch={setSelectedVideo}
            />
          ))}
        </div>

        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </section>
  );
}
