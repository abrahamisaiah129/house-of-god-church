// File: ./video.js
"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link"; // Used for pagination links
import { mediaData, MEDIA_CATEGORIES } from "./mediaData";
import GalleryFilter from "./GalleryFilter";

const ITEMS_PER_PAGE = 6;

// Helper to extract embed URL from various YouTube formats
const getEmbedUrl = (url) => {
  if (!url) return "";
  if (url.includes("embed")) return url;
  if (url.includes("youtu.be"))
    return `https://www.youtube.com/embed/${url.split("/").pop()}`;
  const v = url.split("v=")[1];
  if (v) return `https://www.youtube.com/embed/${v.split("&")[0]}`;
  return url;
};

export const VideoCard = ({ video, onWatch }) => (
  <div className="col video-card">
    <div className="card h-100 shadow-sm border-0">
      <div
        className="ratio ratio-16x9 bg-dark position-relative"
        style={{ cursor: "pointer" }}
        onClick={() => onWatch(video)}
      >
        {video.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.image}
            alt={video.title}
            className="w-100 h-100 object-fit-cover opacity-75"
          />
        ) : (
          <div className="d-flex align-items-center justify-content-center h-100 text-white">
            <i className="fas fa-video fa-3x opacity-50"></i>
          </div>
        )}
        <div
          className="position-absolute top-0 start-0 m-2"
          style={{ zIndex: 2 }}
        >
          <span className="badge bg-warning text-dark">
            {video.category || "Video"}
          </span>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
          <i className="fas fa-play-circle fa-4x text-white opacity-75 hover-opacity-100 transition"></i>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold">{video.title}</h5>
        <p className="text-muted small mb-1">Uploaded: {video.date}</p>
        <p
          className="card-text"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {video.description}
        </p>
      </div>
    </div>
  </div>
);

// Video Modal Component
export const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 1055 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-black border-0">
          <div
            className="modal-header border-0 p-2 position-absolute top-0 end-0"
            style={{ zIndex: 10 }}
          >
            <button
              type="button"
              className="btn-close btn-close-white bg-white rounded-circle p-2 opacity-100"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body p-0">
            <div className="ratio ratio-16x9">
              <iframe
                src={`${getEmbedUrl(video.video)}?autoplay=1`}
                title={video.title}
                allowFullScreen
                allow="autoplay; encrypted-media"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pagination Component (FIXED: Uses the modern Link syntax)
const PaginationComponent = ({ totalItems, currentPage, onChangePage }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination mt-5 justify-content-center">
      {/* Previous Button */}
      <Link
        href="#"
        className={currentPage === 1 ? "disabled" : ""}
        onClick={(e) => {
          e.preventDefault();
          if (currentPage !== 1) {
            onChangePage(currentPage - 1);
          }
        }}
        aria-label="Previous page"
      >
        <i className="fas fa-chevron-left"></i>
      </Link>

      {/* Page Links */}
      {pages.map((p) => (
        <Link
          href="#"
          key={p}
          className={p === currentPage ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            onChangePage(p);
          }}
        >
          {p}
        </Link>
      ))}

      {/* Next Button */}
      <Link
        href="#"
        className={currentPage === totalPages ? "disabled" : ""}
        onClick={(e) => {
          e.preventDefault();
          if (currentPage !== totalPages) {
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
  const [currentFilters, setCurrentFilters] = useState({});
  const [videoCurrentPage, setVideoCurrentPage] = useState(1); // 1. Filtering Logic
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Use mediaData instead of ALL_VIDEOS
  const allVideos = useMemo(() => mediaData.filter((item) => item.video), []);

  // Extract unique filter data
  const uniqueMonths = useMemo(() => {
    const months = allVideos.map((a) =>
      new Date(a.date).toLocaleString("default", { month: "long" })
    );
    const monthsOrder = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return [...new Set(months)].sort(
      (a, b) => monthsOrder.indexOf(a) - monthsOrder.indexOf(b)
    );
  }, [allVideos]);

  const uniqueYears = useMemo(() => {
    const years = allVideos.map((a) =>
      new Date(a.date).getFullYear().toString()
    );
    return [...new Set(years)].sort((a, b) => b - a);
  }, [allVideos]);

  const categories = MEDIA_CATEGORIES;

  const filteredVideos = useMemo(() => {
    const { search, category, month, year } = currentFilters;

    return allVideos.filter((item) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.toLocaleString("default", { month: "long" });
      const itemYear = itemDate.getFullYear().toString();

      const searchMatch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(search.toLowerCase()));
      const categoryMatch = !category || item.category === category;
      const monthMatch = !month || itemMonth === month;
      const yearMatch = !year || itemYear === year;

      return searchMatch && categoryMatch && monthMatch && yearMatch;
    });
  }, [currentFilters, allVideos]);

  const handleFilter = useCallback((filters) => {
    setCurrentFilters(filters);
    setVideoCurrentPage(1);
  }, []);

  const paginatedVideos = useMemo(() => {
    const start = (videoCurrentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredVideos.slice(start, end);
  }, [filteredVideos, videoCurrentPage]); // 4. Page Change Handler

  const changeVideoPage = useCallback((page) => setVideoCurrentPage(page), []);

  return (
    <div className="container py-5 my-5">
      <div className="text-center mb-5">
        <h2 className="section-title text-warning fw-bold mb-2">
          Watch Our Services and Events
        </h2>
        <p className="lead text-secondary fw-light church-text">
          Revisit powerful sermons, celebrations, and special events, including
          programs for children.
        </p>
      </div>

      {/* Filter */}
      <GalleryFilter
        months={uniqueMonths}
        years={uniqueYears}
        categories={categories}
        onFilter={handleFilter}
      />

      <div
        className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
        id="videoGrid"
      >
        {paginatedVideos.length > 0 ? (
          paginatedVideos.map((video, index) => (
            <VideoCard key={index} video={video} onWatch={setSelectedVideo} />
          ))
        ) : (
          <div className="col-12 text-center text-muted">No videos found</div>
        )}
      </div>
      <PaginationComponent
        totalItems={filteredVideos.length}
        currentPage={videoCurrentPage}
        onChangePage={changeVideoPage}
      />
      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
