/* eslint-disable react-hooks/set-state-in-effect */
// File: ./audio.js
"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link";

// --- Data Definition (Omitted for brevity) ---
const ALL_AUDIOS = [
  // ... your audio data
  {
    title: "Sunday Sermon - January 2025",
    date: "Jan 12, 2025",
    description:
      "A powerful sermon on faith and renewal as we began the new year.",
    src: "/audio/sermon-2025-01-12.mp3",
  },
  {
    title: "Christmas Worship Service 2024",
    date: "Dec 20, 2024",
    description:
      "A joyful celebration of Christ’s birth with worship and carols.",
    src: "/audio/christmas-2024.mp3",
  },
  {
    title: "Crossover Service 2024",
    date: "Dec 31, 2024",
    description:
      "An inspiring crossover service filled with praise and testimonies.",
    src: "/audio/crossover-2024.mp3",
  },
  {
    title: "Children’s Sunday School Session 2024",
    date: "Aug 15, 2024",
    description: "An engaging session for children to learn about God’s love.",
    src: "/audio/childrens-session-2024.mp3",
  },
  {
    title: "Easter Resurrection Service 2024",
    date: "Apr 9, 2024",
    description:
      "Celebrating the resurrection of Jesus Christ with worship and reflection.",
    src: "/audio/easter-2024.mp3",
  },
  {
    title: "Children’s Sunday School Session 2024",
    date: "Aug 25, 2024",
    description: "An engaging session for children to learn about God’s love.",
    src: "/audio/childrens-session-2024.mp3",
  },
  {
    title: "New Year Resurrection Service 2024",
    date: "Apr 19, 2024",
    description:
      "Celebrating the resurrection of Jesus Christ with worship and reflection.",
    src: "/audio/easter-2024.mp3",
  },
];
const ITEMS_PER_PAGE = 6;
// --- End Data Definition ---

// --- Sub-components ---

const AudioCard = ({ audio }) => (
  <div className="col audio-card">
       {" "}
    <div className="card h-100 shadow-sm border-0">
           {" "}
      <div className="card-body">
                <h5 className="card-title fw-bold">{audio.title}</h5>       {" "}
        <p className="text-muted small mb-1">Uploaded: {audio.date}</p>       {" "}
        <p className="card-text">{audio.description}</p>       {" "}
        <audio className="audio-player" controls>
                    <source src={audio.src} type="audio/mpeg" />          Your
          browser does not support the audio element.        {" "}
        </audio>
             {" "}
      </div>
         {" "}
    </div>
     {" "}
  </div>
);

// Pagination Component (FIXED: Removed legacyBehavior and nested <a> tags)
const PaginationComponent = ({ totalItems, currentPage, onChangePage }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination mt-5" id="audioPagination">
            {/* Previous Button */}     {" "}
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
                <i className="fas fa-chevron-left"></i>     {" "}
      </Link>
            {/* Page Links */}     {" "}
      {pages.map((p) => (
        <Link
          href="#"
          key={p}
          className={`pagination-link ${p === currentPage ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            onChangePage(p);
          }}
        >
                    {p}       {" "}
        </Link>
      ))}
            {/* Next Button */}     {" "}
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
                <i className="fas fa-chevron-right"></i>     {" "}
      </Link>
           {" "}
      {/* Required CSS for pagination links (using global styles from previous steps) */}
           {" "}
      <style jsx global>{`
        .pagination a.disabled {
          color: #6c757d;
          pointer-events: none;
        }
        .pagination a.active {
          background-color: #212529;
          color: #fff;
          border-color: #212529;
        }
        .pagination a {
          padding: 8px 16px;
          border: 1px solid #dee2e6;
          border-radius: 5px;
          color: #212529;
          text-decoration: none;
          font-weight: 500;
        }
        .pagination a:hover {
          background-color: #ffc107;
          color: #fff;
        }
      `}</style>
         {" "}
    </div>
  );
};

// --- Main AudioPage Component ---
export default function AudioPage() {
  const [audioQuery, setAudioQuery] = useState("");
  const [audioCurrentPage, setAudioCurrentPage] = useState(1); // 1. Filtering Logic

  const filteredAudios = useMemo(() => {
    const query = audioQuery.toLowerCase();
    if (!query) return ALL_AUDIOS;

    return ALL_AUDIOS.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.date.toLowerCase().includes(query)
    );
  }, [audioQuery]); // 2. Reset page when search query changes

  useEffect(() => {
    setAudioCurrentPage(1);
  }, [audioQuery]); // 3. Pagination Logic

  const paginatedAudios = useMemo(() => {
    const start = (audioCurrentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredAudios.slice(start, end);
  }, [filteredAudios, audioCurrentPage]); // 4. Page Change Handler

  const changeAudioPage = useCallback((page) => setAudioCurrentPage(page), []);

  return (
    <div className="container church-section">
            {/* Audio Section */}     {" "}
      <div id="audioSection">
               {" "}
        <div className="text-center mb-5">
                   {" "}
          <h2 className="section-title text-warning fw-bold  mb-2">
                        Listen to Our Sermons and Events          {" "}
          </h2>
                   {" "}
          <p className="lead text-secondary fw-light church-text">
                        Revisit powerful sermons, worship sessions, and special
            events.          {" "}
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
              id="audioSearch"
              className="form-control rounded-pill ps-4"
              placeholder="Search sermons and events..."
              aria-label="Search sermons and events"
              value={audioQuery}
              onChange={(e) => setAudioQuery(e.target.value)}
            />
                     {" "}
          </div>
                 {" "}
        </div>
               {" "}
        <div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          id="audioGrid"
        >
                   {" "}
          {paginatedAudios.length > 0 ? (
            paginatedAudios.map((audio, index) => (
              <AudioCard key={index} audio={audio} />
            ))
          ) : (
            <div className="col-12 text-center text-muted">
                            No sermons or events found            {" "}
            </div>
          )}
                 {" "}
        </div>
               {" "}
        <PaginationComponent
          totalItems={filteredAudios.length}
          currentPage={audioCurrentPage}
          onChangePage={changeAudioPage}
        />
             {" "}
      </div>
         {" "}
    </div>
  );
}
