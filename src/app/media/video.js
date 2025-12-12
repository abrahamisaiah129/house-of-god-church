/* eslint-disable react-hooks/set-state-in-effect */
// File: ./video.js
"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link"; // Used for pagination links

// --- Data Definition (Omitted for brevity) ---
const ALL_VIDEOS = [
  // ... your video data
  {
    title: "Sunday Service - January 2025",
    date: "Jan 12, 2025",
    description:
      "A vibrant worship service to start the new year with faith and fellowship.",
    src: "https://www.youtube.com/embed/lhfk1X072kc",
  },
  {
    title: "Christmas Carol Service 2024",
    date: "Dec 20, 2024",
    description:
      "A heartwarming celebration of Christ’s birth with carols and worship.",
    src: "https://www.youtube.com/embed/lhfk1X072kc",
  },
  {
    title: "Halleluyah Crossover Service 2024",
    date: "Dec 31, 2024",
    description:
      "An inspiring crossover service filled with praise and testimonies.",
    src: "https://www.youtube.com/embed/lhfk1X072kc",
  },
  {
    title: "Children’s Sunday School Event 2024",
    date: "Aug 25, 2024",
    description:
      "A joyful event for children with songs, stories, and activities.",
    src: "https://www.youtube.com/embed/lhfk1X072kc",
  },
  {
    title: "Easter Resurrection Service 2024",
    date: "Apr 19, 2024",
    description:
      "Celebrating the resurrection of Jesus Christ with worship and reflection.",
    src: "https://www.youtube.com/embed/lhfk1X072kc",
  },
  {
    title: "Children’s Sunday School Session 2024",
    date: "Aug 25, 2023",
    description: "An engaging session for children to learn about God’s love.",
    src: "https://www.youtube.com/embed/lhfk1X072kc",
  },
  {
    title: "New Year Resurrection Service 2024",
    date: "Apr 19, 2024",
    description:
      "Celebrating the resurrection of Jesus Christ with worship and reflection.",
    src: "https://www.youtube.com/embed/lhfk1X072kc",
  },
];
const ITEMS_PER_PAGE = 6;

// --- Sub-components (VideoCard and PaginationComponent—the latter is identical to audio.js) ---

const VideoCard = ({ video }) => (
  <div className="col video-card">
       {" "}
    <div className="card h-100 shadow-sm border-0">
           {" "}
      <div className="ratio ratio-16x9">
               {" "}
        <iframe
          src={video.src}
          title={video.title}
          allowFullScreen
          frameBorder="0"
        ></iframe>
             {" "}
      </div>
           {" "}
      <div className="card-body">
                <h5 className="card-title fw-bold">{video.title}</h5>       {" "}
        <p className="text-muted small mb-1">Uploaded: {video.date}</p>       {" "}
        <p className="card-text">{video.description}</p>     {" "}
      </div>
         {" "}
    </div>
     {" "}
  </div>
);

// Pagination Component (FIXED: Uses the modern Link syntax)
const PaginationComponent = ({ totalItems, currentPage, onChangePage }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  if (totalPages <= 1) return null;

  const renderPages = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxPagesToShow - 1);
    if (end - start + 1 < maxPagesToShow)
      start = Math.max(1, end - maxPagesToShow + 1);

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages.map((p, index) => (
      <React.Fragment key={index}>
        {p === "..." ? (
          <span className="px-2">...</span>
        ) : (
          <Link
            href="#"
            className={`pagination-link ${p === currentPage ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onChangePage(p);
            }}
          >
            {p}
          </Link>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="pagination mt-5" id="videoPagination">
      {/* Previous Button */}
      <Link
        href="#"
        className={currentPage === 1 ? "disabled" : ""}
        onClick={(e) => {
          if (currentPage !== 1) {
            e.preventDefault();
            onChangePage(currentPage - 1);
          }
        }}
        aria-label="Previous page"
      >
        <i className="fas fa-chevron-left"></i>
      </Link>

      {renderPages()}

      {/* Next Button */}
      <Link
        href="#"
        className={currentPage === totalPages ? "disabled" : ""}
        onClick={(e) => {
          if (currentPage !== totalPages) {
            e.preventDefault();
            onChangePage(currentPage + 1);
          }
        }}
        aria-label="Next page"
      >
        <i className="fas fa-chevron-right"></i>
      </Link>
    </div>
  );
};

// --- Main VideoPage Component ---
export default function VideoPage() {
  const [videoQuery, setVideoQuery] = useState("");
  const [videoCurrentPage, setVideoCurrentPage] = useState(1); // 1. Filtering Logic

  const filteredVideos = useMemo(() => {
    const query = videoQuery.toLowerCase();
    if (!query) return ALL_VIDEOS;

    return ALL_VIDEOS.filter(
      (v) =>
        v.title.toLowerCase().includes(query) ||
        v.description.toLowerCase().includes(query) ||
        v.date.toLowerCase().includes(query)
    );
  }, [videoQuery]); // 2. Reset page when search query changes

  useEffect(() => {
    setVideoCurrentPage(1);
  }, [videoQuery]); // 3. Pagination Logic

  const paginatedVideos = useMemo(() => {
    const start = (videoCurrentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredVideos.slice(start, end);
  }, [filteredVideos, videoCurrentPage]); // 4. Page Change Handler

  const changeVideoPage = useCallback((page) => setVideoCurrentPage(page), []);

  return (
    <div className="container church-section">
            {/* Video Section */}     {" "}
      <div id="videoSection">
               {" "}
        <div className="text-center mb-5">
                   {" "}
          <h2 className="section-title text-warning fw-bold mb-2">
                        Watch Our Services and Events          {" "}
          </h2>
          {/* FIX: Corrected typo 'text-secondaryfw-light' to 'text-secondary fw-light' */}
                   {" "}
          <p className="lead text-secondary fw-light church-text">
                        Revisit powerful sermons, celebrations, and special
            events,             including programs for children.          {" "}
          </p>
                 {" "}
        </div>
               {" "}
        <div className="row justify-content-center mb-4">
                   {" "}
          <div className="col-md-6">
                       {" "}
            <input
              type="text"
              id="videoSearch"
              className="form-control rounded-pill ps-4"
              placeholder="Search videos..."
              aria-label="Search videos"
              value={videoQuery}
              onChange={(e) => setVideoQuery(e.target.value)}
            />
                     {" "}
          </div>
                 {" "}
        </div>
               {" "}
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          id="videoGrid"
        >
                   {" "}
          {paginatedVideos.length > 0 ? (
            paginatedVideos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))
          ) : (
            <div className="col-12 text-center text-muted">No videos found</div>
          )}
                 {" "}
        </div>
               {" "}
        <PaginationComponent
          totalItems={filteredVideos.length}
          currentPage={videoCurrentPage}
          onChangePage={changeVideoPage}
        />
             {" "}
      </div>
         {" "}
    </div>
  );
}
