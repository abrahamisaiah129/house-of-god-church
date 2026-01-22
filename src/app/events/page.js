"use client";

// import BaseFooter from '@/components/BaseFooter';
import { useState, useEffect } from "react";
import Link from "next/link";
import EventsFilter from "./EventsFilter";
import EventsGallery from "./EventsGallery";
import EventModal from "./EventModal";
import { getEvents } from "@/lib/api";

const ITEMS_PER_PAGE = 9;

const PaginationComponent = ({ totalItems, currentPage, onChangePage }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination mt-5 justify-content-center">
      <div className="flex gap-2">
        <Link
          href="#"
          className={`px-4 py-2 rounded-md transition-colors ${currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage !== 1) onChangePage(currentPage - 1);
          }}
        >
          <i className="fas fa-chevron-left"></i>
        </Link>
        {pages.map((p) => (
          <Link
            href="#"
            key={p}
            className={`px-4 py-2 rounded-md transition-colors ${p === currentPage ? "bg-yellow-500 text-black font-semibold" : "bg-white text-gray-700 hover:bg-gray-100"}`}
            onClick={(e) => {
              e.preventDefault();
              onChangePage(p);
            }}
          >
            {p}
          </Link>
        ))}
        <Link
          href="#"
          className={`px-4 py-2 rounded-md transition-colors ${currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-white text-gray-700 hover:bg-gray-100"}`}
          onClick={(e) => {
            e.preventDefault();
            if (currentPage !== totalPages) onChangePage(currentPage + 1);
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await getEvents();
        console.log("Events API Response:", response);
        // Ensure we are working with an array
        const eventsData = response.data || [];
        setEvents(eventsData);
        setFilteredEvents(eventsData);
      } catch (err) {
        console.error("Failed to load events:", err);
        setError("Failed to load events. Please try again later.");
        // Fallback to empty or keep local mock logic if critical (removed hardcoded data for true integration)
        setEvents([]);
        setFilteredEvents([]);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  // Extract unique months and years for filters based on fetched data
  const months = [
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

  const uniqueMonths = [
    ...new Set(
      events
        .filter((event) => event.month)
        .map((event) => event.month)
        .sort((a, b) => months.indexOf(a) - months.indexOf(b)),
    ),
  ];

  const uniqueYears = [
    ...new Set(
      events
        .filter((event) => event.year)
        .map((event) => event.year)
        .sort((a, b) => b - a),
    ),
  ];

  // Dynamically generate event types from data if possible, or keep hardcoded list as filter options
  const eventTypes = [
    "Fellowship Sunday",
    "Christmas Carol Competition",
    "Halleluyah Party",
    "Baby Dedication",
    "Weddings",
    "Queen Esther",
    "Grace",
    "Christmas Lights",
    // Could add more dynamically
  ];

  const handleFilter = (filters) => {
    const { search, eventType, month, year } = filters;

    const filtered = events.filter((item) => {
      // Search query match
      const searchMatch =
        !search ||
        (item.title &&
          item.title.toLowerCase().includes(search.toLowerCase())) ||
        (item.description &&
          item.description.toLowerCase().includes(search.toLowerCase())) ||
        (item.date && item.date.toLowerCase().includes(search.toLowerCase()));

      // Event type match
      const typeMatch = !eventType || item.type === eventType;

      // Month match
      const monthMatch = !month || item.month === month;

      // Year match
      const yearMatch = !year || item.year === year;

      return searchMatch && typeMatch && monthMatch && yearMatch;
    });

    setFilteredEvents(filtered);
    setCurrentPage(1);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentEvents = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return (
      <div className="container py-5 my-5 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
        <p className="mt-2 text-gray-500">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 my-5 text-center">
        <div className="text-red-500 mb-2">
          <i className="fas fa-exclamation-circle text-2xl"></i>
        </div>
        <p className="text-gray-700">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-warning mb-2">Explore Our Events</h2>
          <p className="lead text-secondary">
            From monthly fellowships to special annual celebrations, find an
            event to be a part of.
          </p>
        </div>

        <EventsFilter
          months={uniqueMonths}
          years={uniqueYears}
          eventTypes={eventTypes}
          onFilter={handleFilter}
        />

        {currentEvents.length > 0 ? (
          <EventsGallery
            events={currentEvents}
            onEventClick={handleEventClick}
          />
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No events found matching your criteria.
            </p>
          </div>
        )}

        <PaginationComponent
          totalItems={filteredEvents.length}
          currentPage={currentPage}
          onChangePage={setCurrentPage}
        />

        {isModalOpen && selectedEvent && (
          <EventModal event={selectedEvent} onClose={handleCloseModal} />
        )}
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}
