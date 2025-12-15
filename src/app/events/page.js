"use client";

// import BaseFooter from '@/components/BaseFooter';
import { useState, useEffect } from "react";
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
];

export default function EventsPage() {
  const [filteredEvents, setFilteredEvents] = useState(eventData);
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

  const eventTypes = [
    "Fellowship Sunday",
    "Christmas Carol Competition",
    "Halleluyah Party",
    "Baby Dedication",
    "Weddings",
    "Queen Esther",
    "Grace",
    "Christmas Lights",
  ];

  const handleFilter = (filters) => {
    const { search, eventType, month, year } = filters;

    const filtered = eventData.filter((item) => {
      // Search query match
      const searchMatch =
        !search ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      // Event type match
      const typeMatch = !eventType || item.type === eventType;

      // Month match
      const monthMatch = !month || item.month === month;

      // Year match
      const yearMatch = !year || item.year === year;

      return searchMatch && typeMatch && monthMatch && yearMatch;
    });

    setFilteredEvents(filtered);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

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

        <EventsGallery
          events={filteredEvents}
          onEventClick={handleEventClick}
        />

        <div className="pagination mt-5">
          <a href="#">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <span>...</span>
          <a href="#">14</a>
          <a href="#">15</a>
          <a href="#">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        {isModalOpen && selectedEvent && (
          <EventModal event={selectedEvent} onClose={handleCloseModal} />
        )}
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}
