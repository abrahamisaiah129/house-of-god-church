"use client";

// import BaseFooter from '@/components/BaseFooter';
import { useState, useEffect } from "react";
import Link from "next/link";
import EventsFilter from "./EventsFilter";
import EventsGallery from "./EventsGallery";
import EventModal from "./EventModal";

// Event data array
const eventData = [
  // Fellowship Sunday
  {
    id: 1,
    title: "January Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "January 2025",
    month: "January",
    year: "2025",
    description: "A wonderful fellowship to start the new year.",
    images: ["/assets/images/ca1.png", "/assets/images/ca3.png"],
  },
  {
    id: 2,
    title: "February Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "February 2025",
    month: "February",
    year: "2025",
    description: "Celebrating love and faith during our monthly fellowship.",
    images: ["/assets/images/pastor.jpg"],
  },
  {
    id: 3,
    title: "March Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "March 2025",
    month: "March",
    year: "2025",
    description: "Joining together for a time of worship and community.",
    images: ["/assets/images/Rectangle 4.png"],
  },
  {
    id: 4,
    title: "April Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "April 2025",
    month: "April",
    year: "2025",
    description: "A special Easter fellowship service.",
    images: ["/assets/images/book.png"],
  },
  {
    id: 5,
    title: "May Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "May 2025",
    month: "May",
    year: "2025",
    description: "Honoring mothers and family during our May fellowship.",
    images: ["/assets/images/ca1.png"],
  },
  {
    id: 6,
    title: "June Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "June 2025",
    month: "June",
    year: "2025",
    description: "Father's Day celebration at our monthly fellowship.",
    images: ["/assets/images/ca3.png"],
  },
  {
    id: 7,
    title: "July Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "July 2025",
    month: "July",
    year: "2025",
    description: "Summer worship and gathering.",
    images: ["/assets/images/pastor.jpg"],
  },
  {
    id: 8,
    title: "August Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "August 2025",
    month: "August",
    year: "2025",
    description: "A special worship session for the youth.",
    images: ["/assets/images/Rectangle 4.png"],
  },
  {
    id: 9,
    title: "September Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "September 2025",
    month: "September",
    year: "2025",
    description: "Back to school prayer and fellowship.",
    images: ["/assets/images/book.png"],
  },
  {
    id: 10,
    title: "October Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "October 2025",
    month: "October",
    year: "2025",
    description: "Celebrating grace and thanksgiving.",
    images: ["/assets/images/ca1.png"],
  },
  {
    id: 11,
    title: "November Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "November 2025",
    month: "November",
    year: "2025",
    description: "A time of deep prayer and reflection.",
    images: ["/assets/images/ca3.png"],
  },
  {
    id: 12,
    title: "December Fellowship Sunday",
    type: "Fellowship Sunday",
    date: "December 2025",
    month: "December",
    year: "2025",
    description: "A final fellowship of the year, filled with joy.",
    images: ["/assets/images/pastor.jpg"],
  },
  // Christmas Carol Competition
  {
    id: 13,
    title: "Christmas Carol Competition 2024",
    type: "Christmas Carol Competition",
    date: "December 2024",
    month: "December",
    year: "2024",
    description: "Our annual competition of carols.",
    images: ["/assets/images/Rectangle 4.png"],
  },
  // Halleluyah Party
  {
    id: 14,
    title: "Halleluyah Party 2024",
    type: "Halleluyah Party",
    date: "December 2024",
    month: "December",
    year: "2024",
    description: "An end-of-year celebration filled with praise.",
    images: ["/assets/images/book.png"],
  },
  // Baby Dedication
  {
    id: 15,
    title: "Baby Dedication - Smith Family",
    type: "Baby Dedication",
    date: "October 26, 2024",
    month: "October",
    year: "2024",
    description: "The dedication of a child is a public commitment.",
    images: ["/assets/images/ca1.png"],
  },
  {
    id: 16,
    title: "Baby Dedication - Johnson Family",
    type: "Baby Dedication",
    date: "November 15, 2024",
    month: "November",
    year: "2024",
    description: "A special day for the Johnson family.",
    images: ["/assets/images/ca3.png"],
  },
  // Weddings
  {
    id: 17,
    title: "Wedding of John and Jane",
    type: "Weddings",
    date: "September 10, 2024",
    month: "September",
    year: "2024",
    description: "Celebrating the union of John and Jane.",
    images: ["/assets/images/pastor.jpg"],
  },
  {
    id: 18,
    title: "Wedding of Mark and Mary",
    type: "Weddings",
    date: "October 5, 2024",
    month: "October",
    year: "2024",
    description: "A joyous celebration for Mark and Mary.",
    images: ["/assets/images/Rectangle 4.png"],
  },
  // Queen Esther
  {
    id: 19,
    title: "Queen Esther 2017",
    type: "Queen Esther",
    date: "2017",
    month: "",
    year: "2017",
    description: "Celebrating our Queen Esther for the year 2017.",
    images: ["/assets/images/book.png"],
  },
  {
    id: 20,
    title: "Queen Esther 2016",
    type: "Queen Esther",
    date: "2016",
    month: "",
    year: "2016",
    description: "Celebrating our Queen Esther for the year 2016.",
    images: ["/assets/images/ca1.png"],
  },
  // Grace
  {
    id: 21,
    title: "Grace 2019",
    type: "Grace",
    date: "2019",
    month: "",
    year: "2019",
    description: "A year of amazing grace.",
    images: ["/assets/images/ca3.png"],
  },
  {
    id: 22,
    title: "Grace 2018",
    type: "Grace",
    date: "2018",
    month: "",
    year: "2018",
    description: "Showcasing the grace of God in our lives.",
    images: ["/assets/images/pastor.jpg"],
  },
  // Christmas Lights
  {
    id: 23,
    title: "Christmas Lights 2024",
    type: "Christmas Lights",
    date: "December 2024",
    month: "December",
    year: "2024",
    description: "Our church and community Christmas lights display.",
    images: ["/assets/images/Rectangle 4.png"],
  },
  // Gallery: About Church
  {
    id: 24,
    title: "Church Sanctuary",
    type: "Gallery: About Church",
    date: "2024",
    month: "",
    year: "2024",
    description: "Views of our beautiful sanctuary.",
    images: ["/assets/images/ca1.png", "/assets/images/ca3.png"],
  },
  // Gallery: About Pastor
  {
    id: 25,
    title: "Rev. Chris Okotie",
    type: "Gallery: About Pastor",
    date: "2024",
    month: "",
    year: "2024",
    description: "Moments with our Pastor.",
    images: ["/assets/images/pastor.jpg"],
  },
  // Gallery: Departments
  {
    id: 26,
    title: "Children's Department",
    type: "Gallery: Children's Department",
    date: "2024",
    month: "",
    year: "2024",
    description: "Activities in the Children's Department.",
    images: ["/assets/images/ca3.png"],
  },
  {
    id: 27,
    title: "Benevolence Ministry",
    type: "Gallery: Benevolence",
    date: "2024",
    month: "",
    year: "2024",
    description: "Reaching out to the community.",
    images: ["/assets/images/Rectangle 4.png"],
  },
  {
    id: 28,
    title: "Choir Ministration",
    type: "Gallery: Music",
    date: "2024",
    month: "",
    year: "2024",
    description: "The choir leading worship.",
    images: ["/assets/images/book.png"],
  },
];

const ITEMS_PER_PAGE = 9;

const PaginationComponent = ({ totalItems, currentPage, onChangePage }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination mt-5 justify-content-center">
      <Link
        href="#"
        className={currentPage === 1 ? "disabled" : ""}
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
          className={p === currentPage ? "active" : ""}
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
        className={currentPage === totalPages ? "disabled" : ""}
        onClick={(e) => {
          e.preventDefault();
          if (currentPage !== totalPages) onChangePage(currentPage + 1);
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </Link>
    </div>
  );
};

export default function EventsPage() {
  const [filteredEvents, setFilteredEvents] = useState(eventData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique months and years for filters
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
      eventData
        .filter((event) => event.month)
        .map((event) => event.month)
        .sort((a, b) => months.indexOf(a) - months.indexOf(b))
    ),
  ];

  const uniqueYears = [
    ...new Set(
      eventData
        .filter((event) => event.year)
        .map((event) => event.year)
        .sort((a, b) => b - a)
    ),
  ];

  const departments = [
    "Children's Department",
    "Benevolence",
    "Ushering",
    "Security",
    "Sanitation",
    "Technical",
    "Music",
    "Publishing",
    "Medical",
  ];

  const galleryTypes = [
    "Gallery: About Church",
    "Gallery: About Pastor",
    ...departments.map((dept) => `Gallery: ${dept}`),
  ];

  const eventTypes = [
    "Fellowship Sunday",
    "Christmas Carol Competition",
    "Halleluyah Party",
    "Baby Dedication",
    "Weddings",
    "Queen Esther",
    "Grace",
    "Christmas Lights",
    ...galleryTypes,
  ];

  const handleFilter = (filters) => {
    const { search, eventType, month, year } = filters;

    const filtered = eventData.filter((item) => {
      // Search query match
      const searchMatch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
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

        <EventsGallery events={currentEvents} onEventClick={handleEventClick} />

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
