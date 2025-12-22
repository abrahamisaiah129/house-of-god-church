// File: GalleryPage.js
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";
import GalleryModal from "./GalleryModal";
import {
  mediaData,
  MEDIA_CATEGORIES,
  ALL_MONTHS,
  EVENT_TYPES,
} from "./mediaData";

const ITEMS_PER_PAGE = 6;

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
// --- End Pagination Component ---

export default function GalleryPage() {
  const [currentFilters, setCurrentFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use mediaData for gallery items (filtering for items that have images)
  const galleryItems = useMemo(
    () =>
      mediaData.filter(
        (item) =>
          item.images && item.images.length > 0 && !item.video && !item.audio
      ),
    []
  );

  // --- Data Extraction (Memoized for efficiency) ---
  const uniqueMonths = useMemo(
    () => [
      ...new Set(
        galleryItems
          .filter((item) => item.date)
          .map((item) =>
            new Date(item.date).toLocaleString("default", { month: "long" })
          )
          .sort((a, b) => ALL_MONTHS.indexOf(a) - ALL_MONTHS.indexOf(b))
      ),
    ],
    [galleryItems]
  );

  const uniqueYears = useMemo(
    () => [
      ...new Set(
        galleryItems
          .map((item) => new Date(item.date).getFullYear().toString())
          .sort((a, b) => b - a)
      ),
    ],
    [galleryItems]
  );

  // 1. Filtering Logic: Use useMemo to re-filter only when filters change
  const filteredItems = useMemo(() => {
    const { search, category, eventType, month, year } = currentFilters;

    const filtered = galleryItems.filter((item) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.toLocaleString("default", { month: "long" });
      const itemYear = itemDate.getFullYear().toString();

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
      const monthMatch = !month || itemMonth === month;
      // Year match
      const yearMatch = !year || itemYear === year;

      return (
        searchMatch && categoryMatch && typeMatch && monthMatch && yearMatch
      );
    });

    return filtered;
  }, [currentFilters, galleryItems]);

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
      <div
        className="container 
      py-5 
      my-5"
      >
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
          categories={MEDIA_CATEGORIES}
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
