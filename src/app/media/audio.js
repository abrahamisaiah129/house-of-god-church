// File: ./audio.js
"use client";

import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Link from "next/link";
import { mediaData, MEDIA_CATEGORIES } from "./mediaData";
import GalleryFilter from "./GalleryFilter";

const ITEMS_PER_PAGE = 6;

// --- Sub-components ---

// Custom Audio Player Component
const CustomAudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setCurrentTime(current);
    setProgress((current / total) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
    setCurrentTime(seekTime);
  };

  const skipTime = (seconds) => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime + seconds;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === "0");
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="custom-audio-player bg-light p-3 rounded border w-100 text-dark">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="d-flex align-items-center justify-content-center mb-3 gap-3">
        <button
          onClick={() => skipTime(-10)}
          className="btn btn-outline-secondary btn-sm rounded-circle"
          title="Rewind 10s"
        >
          <i className="fas fa-backward"></i>
        </button>

        <button
          onClick={togglePlay}
          className="btn btn-warning rounded-circle text-dark shadow-sm d-flex align-items-center justify-content-center"
          style={{ width: "50px", height: "50px" }}
        >
          <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"} fa-lg`}></i>
        </button>

        <button
          onClick={() => skipTime(10)}
          className="btn btn-outline-secondary btn-sm rounded-circle"
          title="Forward 10s"
        >
          <i className="fas fa-forward"></i>
        </button>
      </div>

      <div className="d-flex justify-content-between small text-muted fw-bold font-monospace mb-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <input
        type="range"
        className="form-range custom-range mb-2"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
      />

      <div className="d-flex align-items-center">
        <i
          className={`fas ${
            isMuted || volume === "0" ? "fa-volume-mute" : "fa-volume-up"
          } text-secondary me-2 small`}
        ></i>
        <input
          type="range"
          className="form-range custom-range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          style={{ width: "80px" }}
        />
      </div>
    </div>
  );
};

export const AudioModal = ({ audio, onClose }) => {
  if (!audio) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.8)", zIndex: 1055 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white border-0 shadow-lg">
          <div className="modal-header border-0">
            <h5 className="modal-title">{audio.title}</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body p-4 d-flex flex-column align-items-center">
            <div
              className="position-relative mb-4 rounded overflow-hidden shadow"
              style={{ width: "100%", maxWidth: "400px", aspectRatio: "16/9" }}
            >
              {audio.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={audio.image}
                  alt={audio.title}
                  className="w-100 h-100 object-fit-cover"
                />
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100 bg-secondary w-100">
                  <i className="fas fa-music fa-4x opacity-50"></i>
                </div>
              )}
            </div>
            <p className="text-light opacity-75 text-center mb-4">
              {audio.description}
            </p>
            <CustomAudioPlayer src={audio.audio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AudioCard = ({ audio, onListen }) => (
  <div className="col audio-card">
    <div className="card h-100 shadow-sm border-0">
      <div
        className="ratio ratio-16x9 bg-secondary position-relative"
        style={{ cursor: "pointer" }}
        onClick={() => onListen(audio)}
      >
        {audio.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={audio.image}
            alt={audio.title}
            className="w-100 h-100 object-fit-cover"
          />
        ) : (
          <div className="d-flex align-items-center justify-content-center h-100 text-white">
            <i className="fas fa-music fa-3x opacity-50"></i>
          </div>
        )}
        <div
          className="position-absolute top-0 start-0 m-2"
          style={{ zIndex: 2 }}
        >
          <span className="badge bg-warning text-dark">
            {audio.category || "Audio"}
          </span>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
          <i className="fas fa-play-circle fa-4x text-white opacity-75 hover-opacity-100 transition"></i>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold">{audio.title}</h5>
        <p className="text-muted small mb-1">Uploaded: {audio.date}</p>
        <p
          className="card-text"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {audio.description}
        </p>
      </div>
    </div>
  </div>
);

// Pagination Component (FIXED: Removed legacyBehavior and nested <a> tags)
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

// --- Main AudioPage Component ---
export default function AudioPage() {
  const [currentFilters, setCurrentFilters] = useState({});
  const [audioCurrentPage, setAudioCurrentPage] = useState(1); // 1. Filtering Logic
  const [selectedAudio, setSelectedAudio] = useState(null);

  // Use mediaData instead of ALL_AUDIOS
  const allAudios = useMemo(() => mediaData.filter((item) => item.audio), []);

  // Extract unique filter data
  const uniqueMonths = useMemo(() => {
    const months = allAudios.map((a) =>
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
  }, [allAudios]);

  const uniqueYears = useMemo(() => {
    const years = allAudios.map((a) =>
      new Date(a.date).getFullYear().toString()
    );
    return [...new Set(years)].sort((a, b) => b - a);
  }, [allAudios]);

  const categories = MEDIA_CATEGORIES;

  const filteredAudios = useMemo(() => {
    const { search, category, month, year } = currentFilters;

    return allAudios.filter((item) => {
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
  }, [currentFilters, allAudios]);

  const handleFilter = useCallback((filters) => {
    setCurrentFilters(filters);
    setAudioCurrentPage(1);
  }, []);

  const paginatedAudios = useMemo(() => {
    const start = (audioCurrentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredAudios.slice(start, end);
  }, [filteredAudios, audioCurrentPage]); // 4. Page Change Handler

  const changeAudioPage = useCallback((page) => setAudioCurrentPage(page), []);

  return (
    <div className="container py-5 my-5">
      <div id="audioSection">
        <div className="text-center mb-5">
          <h2 className="section-title text-warning fw-bold mb-2">
            Listen to Our Sermons and Events
          </h2>
          <p className="lead text-secondary fw-light church-text">
            Revisit powerful sermons, worship sessions, and special events.
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
          id="audioGrid"
        >
          {paginatedAudios.length > 0 ? (
            paginatedAudios.map((audio, index) => (
              <AudioCard
                key={index}
                audio={audio}
                onListen={setSelectedAudio}
              />
            ))
          ) : (
            <div className="col-12 text-center text-muted">
              No sermons or events found
            </div>
          )}
        </div>

        <PaginationComponent
          totalItems={filteredAudios.length}
          currentPage={audioCurrentPage}
          onChangePage={changeAudioPage}
        />

        {selectedAudio && (
          <AudioModal
            audio={selectedAudio}
            onClose={() => setSelectedAudio(null)}
          />
        )}
        <style jsx global>{`
          .custom-range::-webkit-slider-thumb {
            background: #ffc107;
          }
          .custom-range::-moz-range-thumb {
            background: #ffc107;
          }
        `}</style>
      </div>
    </div>
  );
}
