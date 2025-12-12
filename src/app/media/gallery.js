// File: GalleryPage.js
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";
import GalleryModal from "./GalleryModal";

// --- Static Data (Omitted for brevity, but remains above the component) ---
const galleryData = [
  // ... your gallery data ...
  {
    id: 1,
    title: "Pastor Teaching Sunday Service",
    type: "Pastor's Gallery",
    category: "Pastor's Gallery",
    date: "January 2025",
    month: "January",
    year: "2025",
    description: "Pastor delivering a powerful sermon during Sunday service.",
    images: ["/assets/images/ca1.png", "/assets/images/ca3.png"],
  },
  // ... (rest of data)
  {
    id: 16,
    title: "Christmas Lights 2024",
    type: "Christmas Lights",
    category: "Church's Gallery",
    date: "December 2024",
    month: "December",
    year: "2024",
    description: "Our church and community Christmas lights display.",
    images: ["/assets/images/Rectangle 4.png"],
  },
];

const ALL_MONTHS = [
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
const CATEGORIES = ["Pastor's Gallery", "Church's Gallery"];
const EVENT_TYPES = [
  "Fellowship Sunday",
  "Christmas Carol Competition",
  "Halleluyah Party",
  "Baby Dedication",
  "Weddings",
  "Queen Esther",
  "Grace",
  "Christmas Lights",
];
const ITEMS_PER_PAGE = 6;
// --- End Static Data ---

// --- Pagination Component (FIXED: Uses modern Link syntax) ---
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
          if (currentPage !== 1) {
            e.preventDefault();
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
// --- End Pagination Component ---

export default function GalleryPage() {
  const [currentFilters, setCurrentFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Data Extraction (Memoized for efficiency) ---
  const uniqueMonths = useMemo(
    () => [
      ...new Set(
        galleryData
          .filter((item) => item.month)
          .map((item) => item.month)
          .sort((a, b) => ALL_MONTHS.indexOf(a) - ALL_MONTHS.indexOf(b))
      ),
    ],
    []
  );

  const uniqueYears = useMemo(
    () => [
      ...new Set(
        galleryData
          .filter((item) => item.year)
          .map((item) => item.year)
          .sort((a, b) => b - a)
      ),
    ],
    []
  );

  // 1. Filtering Logic: Use useMemo to re-filter only when filters change
  const filteredItems = useMemo(() => {
    const { search, category, eventType, month, year } = currentFilters;

    const filtered = galleryData.filter((item) => {
      // Search query match
      const searchMatch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      // Category match
      const categoryMatch = !category || item.category === category;
      // Event type match (for Church's Gallery, Pastor's Gallery is always included if no type is selected)
      const typeMatch =
        !eventType ||
        item.type === eventType ||
        item.category === "Pastor's Gallery";
      // Month match
      const monthMatch = !month || item.month === month;
      // Year match
      const yearMatch = !year || item.year === year;

      return (
        searchMatch && categoryMatch && typeMatch && monthMatch && yearMatch
      );
    });

    return filtered;
  }, [currentFilters]);

  // 2. Pagination Logic: Slice the filtered array for the current page
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredItems.slice(start, end);
  }, [filteredItems, currentPage]);

  // --- Handlers ---

  const handleFilter = useCallback((filters) => {
    setCurrentFilters(filters);
    setCurrentPage(1);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleChangePage = useCallback((page) => {
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* title */}
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-warning mb-2">Explore Our Gallery</h2>
          <p className="lead text-secondary">
            From monthly fellowships to special annual celebrations, find a
            memory to be a part of.
          </p>
        </div>

        {/* filter */}
        <GalleryFilter
          months={uniqueMonths}
          years={uniqueYears}
          categories={CATEGORIES}
          eventTypes={EVENT_TYPES}
          onFilter={handleFilter}
        />

        {/* image grid */}
        <GalleryGrid items={paginatedItems} onItemClick={handleItemClick} />

        {/* Dynamic Pagination */}
        <PaginationComponent
          totalItems={filteredItems.length}
          currentPage={currentPage}
          onChangePage={handleChangePage}
        />

        {isModalOpen && selectedItem && (
          <GalleryModal item={selectedItem} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
}
