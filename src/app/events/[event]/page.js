"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";

// Fixed imports — exact file names + case-sensitive
import FilterDropdown from "./components/FilterDropdown";
import GalleryGrid from "./components/GalleryGrid"; // Matches GalleryGrid.js
import LightboxModal from "./components/Lightboxmodal"; // Matches LightboxModal.js
import WelcomeVideoPopup from "@/components/WelcomeVideoPopup";
import ScrollToTop from "@/components/ScrollToTop";

// ====================== EVENT DATA ======================
const eventData = {
  grace: {
    type: "yearly",
    title: "GRACE Programme",
    slogan: "Extending Care to the Less Privileged",
    description:
      "A charity-driven programme instituted to extend care and sharing to the less privileged in society through recognized non-governmental organizations. It is a major benevolence channel of the ministry on an annual basis.",
    coordinator: "Rev. Chris Okotie",
    coordinatorImage: "/assets/images/pastor.jpg",
    entries: [
      {
        year: 1990,
        month: "December",
        date: "December 1990",
        gallery: Array(12).fill("/assets/images/ca1.png"),
      },
      {
        year: 2006,
        month: "December",
        date: "25 December 2006",
        gallery: Array(15).fill("/assets/images/ca2.png"),
      },
      {
        year: 2007,
        month: "December",
        date: "25 December 2007",
        gallery: Array(14).fill("/assets/images/ca3.png"),
      },
      {
        year: 2008,
        month: "December",
        date: "25 December 2008",
        gallery: Array(16).fill("/assets/images/ca1.png"),
      },
      {
        year: 2017,
        month: "December",
        date: "25 December 2017",
        gallery: Array(18).fill("/assets/images/ca3.png"),
      },
      {
        year: 2025,
        month: "December",
        date: "25 December 2025",
        gallery: Array(20).fill("/assets/images/church-background.png"),
        sermon: "https://www.youtube.com/embed/M7lc1UVf-VE",
      },
    ],
  },

  "queen-esther": {
    type: "monthly",
    title: "Queen Esther Pageant",
    slogan: "Celebrating Biblical Womanhood",
    description:
      "A women’s pageant initiated in 2006 to promote biblical values and empower women through faith and grace.",
    coordinator: "Mrs. Maryam Abubakar",
    coordinatorImage: "/assets/images/benevolence-head.jpg",
    entries: [
      {
        year: 2006,
        month: "march",
        date: "25 March 2006",
        gallery: Array(15).fill("/assets/images/book.png"),
      },
      {
        year: 2007,
        month: "march",
        date: "25 March 2007",
        gallery: Array(14).fill("/assets/images/ca1.png"),
      },
      {
        year: 2008,
        month: "march",
        date: "25 March 2008",
        gallery: Array(16).fill("/assets/images/ca3.png"),
      },
      {
        year: 2017,
        month: "march",
        date: "25 March 2017",
        gallery: Array(18).fill("/assets/images/Rectangle 4.png"),
      },
      {
        year: 2017,
        month: "april",
        date: "April 2017",
        gallery: Array(12).fill("/assets/images/ca2.png"),
      },
      {
        year: 2017,
        month: "october",
        date: "October 2017",
        gallery: Array(20).fill("/assets/images/hog-logo.png"),
      },
      {
        year: 2024,
        month: "april",
        date: "20 April 2024",
        gallery: Array(16).fill("/assets/images/book.png"),
        sermon: "https://www.youtube.com/embed/M7lc1UVf-VE",
      },
    ],
  },

  "hallelujah-party": {
    type: "yearly",
    title: "Hallelujah Party",
    slogan: "Entering the New Year with Praise",
    description:
      "An electrifying night of praise, worship, music, dance, drama, and thanksgiving as we cross over into the new year.",
    coordinator: "Chinedu Eze",
    coordinatorImage: "/assets/images/children-church-head.jpg",
    entries: [
      {
        year: 2022,
        month: "December",
        date: "31 December 2022",
        gallery: Array(20).fill("/assets/images/church-background.png"),
      },
      {
        year: 2023,
        month: "December",
        date: "31 December 2023",
        gallery: Array(22).fill("/assets/images/footer-hh-logo.png"),
      },
      {
        year: 2024,
        month: "December",
        date: "31 December 2024",
        gallery: Array(25).fill("/assets/images/ca1.png"),
      },
    ],
  },

  "fellowship-sunday": {
    type: "monthly",
    title: "Fellowship Sunday",
    slogan: "Building Bonds in Christ",
    description:
      "A special monthly service dedicated to fellowship, community building, and spiritual growth among members.",
    coordinator: "Fatima Yusuf",
    coordinatorImage: "/assets/images/pastoral-care-head.jpg",
    entries: [
      {
        year: 2023,
        month: "november",
        date: "12 November 2023",
        gallery: Array(14).fill("/assets/images/ca1.png"),
      },
      {
        year: 2024,
        month: "may",
        date: "19 May 2024",
        gallery: Array(16).fill("/assets/images/ca3.png"),
      },
      {
        year: 2024,
        month: "november",
        date: "10 November 2024",
        gallery: Array(12).fill("/assets/images/book.png"),
      },
    ],
  },

  "baby-dedication": {
    type: "monthly",
    title: "Baby Dedication",
    slogan: "Presenting Our Children to the Lord",
    description:
      "A joyful celebration where families dedicate their newborns and infants to God in the presence of the church.",
    coordinator: "Emeka Nwosu",
    coordinatorImage: "/assets/images/villa-head.jpg",
    entries: [
      {
        year: 2023,
        month: "august",
        date: "20 August 2023",
        gallery: Array(12).fill("/assets/images/book.png"),
      },
      {
        year: 2024,
        month: "april",
        date: "14 April 2024",
        gallery: Array(15).fill("/assets/images/ca2.png"),
      },
      {
        year: 2024,
        month: "august",
        date: "18 August 2024",
        gallery: Array(18).fill("/assets/images/ca1.png"),
      },
    ],
  },

  "christmas-carol": {
    type: "monthly",
    title: "Christmas Carol Service",
    slogan: "Celebrating the Birth of Christ",
    description:
      "A festive evening of Christmas carols, scripture readings, and joyful celebration of the Savior’s birth.",
    coordinator: "Aisha Bello",
    coordinatorImage: "/assets/images/technical-crew-head.jpg",
    entries: [
      {
        year: 2022,
        month: "december",
        date: "18 December 2022",
        gallery: Array(18).fill("/assets/images/hog-logo.png"),
      },
      {
        year: 2023,
        month: "december",
        date: "17 December 2023",
        gallery: Array(20).fill("/assets/images/church-background.png"),
      },
      {
        year: 2024,
        month: "december",
        date: "15 December 2024",
        gallery: Array(22).fill("/assets/images/ca3.png"),
      },
    ],
  },

  "youth-rally": {
    type: "monthly",
    title: "Youth Rally",
    slogan: "Igniting Faith in the Next Generation",
    description:
      "A high-energy gathering for young people featuring powerful worship, teaching, and fellowship.",
    coordinator: "Uchechukwu Obi",
    coordinatorImage: "/assets/images/dept-head-evangelism.jpg",
    entries: [
      {
        year: 2024,
        month: "june",
        date: "15 June 2024",
        gallery: Array(22).fill("/assets/images/ca3.png"),
      },
      {
        year: 2023,
        month: "june",
        date: "10 June 2023",
        gallery: Array(18).fill("/assets/images/ca1.png"),
      },
    ],
  },

  "annual-conference": {
    type: "yearly",
    title: "Annual Conference",
    slogan: "United in Faith and Purpose",
    description:
      "Our flagship yearly gathering of all members for spiritual renewal, teaching, and vision casting.",
    coordinator: "Rev. John Okafor",
    coordinatorImage: "/assets/images/works-head.jpg",
    entries: [
      {
        year: 2024,
        month: "November",
        date: "30 November 2024",
        gallery: Array(25).fill("/assets/images/ca1.png"),
      },
      {
        year: 2023,
        month: "November",
        date: "25 November 2023",
        gallery: Array(20).fill("/assets/images/ca2.png"),
      },
    ],
  },

  "karis-award": {
    type: "yearly",
    title: "Karis Award",
    slogan: "Honoring Unsung Heroes",
    description:
      "Instituted in 1996, the Karis Award recognizes Nigerians who have made extraordinary contributions to society but remain unrecognized.",
    coordinator: "Zainab Sani",
    coordinatorImage: "/assets/images/singles-head.jpg",
    entries: [
      {
        year: 1996,
        month: "December",
        date: "December 1996",
        gallery: Array(12).fill("/assets/images/Rectangle 4.png"),
      },
      {
        year: 2024,
        month: "December",
        date: "December 2024",
        gallery: Array(15).fill("/assets/images/ca3.png"),
      },
    ],
  },

  "prayer-meeting": {
    type: "monthly",
    title: "Prayer Meeting",
    slogan: "A Time of Spiritual Renewal",
    description:
      "A focused gathering for intercession, warfare prayer, and seeking God’s direction for the church and nation.",
    coordinator: "Halima Mohammed",
    coordinatorImage: "/assets/images/holy-police-head.jpg",
    entries: [
      {
        year: 2023,
        month: "march",
        date: "15 March 2023",
        gallery: Array(10).fill("/assets/images/book.png"),
      },
      {
        year: 2024,
        month: "march",
        date: "20 March 2024",
        gallery: Array(12).fill("/assets/images/ca1.png"),
      },
    ],
  },

  incandescence: {
    type: "simple",
    title: "Incandescence",
    slogan: "Light of the World",
    description: "Annual youth worship night.",
    coordinator: "Youth Team",
    coordinatorImage: "/assets/images/dept-head-evangelism.jpg",
    entries: [
      { year: 2024, gallery: Array(15).fill("/assets/images/ca3.png") },
    ],
  },
  "annual-revival": {
    type: "simple",
    title: "Annual Revival",
    slogan: "Fire on the Altar",
    description: "Powerful move of the Holy Spirit.",
    coordinator: "Revival Team",
    coordinatorImage: "/assets/images/pastor.jpg",
    entries: [
      {
        year: 2024,
        gallery: Array(18).fill("/assets/images/church-background.png"),
      },
    ],
  },
  "youth-conference": {
    type: "simple",
    title: "Youth Conference",
    slogan: "Arise & Shine",
    description: "Empowering the next generation.",
    coordinator: "Uchechukwu Obi",
    coordinatorImage: "/assets/images/dept-head-evangelism.jpg",
    entries: [
      { year: 2024, gallery: Array(20).fill("/assets/images/ca1.png") },
    ],
  },
  easter: {
    type: "simple",
    title: "Easter Celebration",
    slogan: "He is Risen!",
    description: "Celebrating the resurrection of our Lord Jesus Christ.",
    coordinator: "Worship Team",
    coordinatorImage: "/assets/images/technical-crew-head.jpg",
    entries: [
      { year: 2024, gallery: Array(22).fill("/assets/images/hog-logo.png") },
    ],
  },
  thanksgiving: {
    type: "simple",
    title: "Thanksgiving Service",
    slogan: "Give Thanks to the Lord",
    description: "Annual thanksgiving and testimony service.",
    coordinator: "Pastor Okotie",
    coordinatorImage: "/assets/images/pastor.jpg",
    entries: [
      { year: 2024, gallery: Array(16).fill("/assets/images/ca2.png") },
    ],
  },
};

// Keep hyphens, only lowercase
const slugToKey = (slug) => slug?.toLowerCase() || "";

// Local Pagination Component to match global style
const Pagination = ({ current, total, onChange }) => {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button
        onClick={() => current > 1 && onChange(current - 1)}
        disabled={current === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
          current === 1
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
        }`}
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
            p === current
              ? "bg-yellow-500 text-black shadow-lg scale-110"
              : "text-gray-500 hover:text-yellow-500 hover:bg-gray-50"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => current < total && onChange(current + 1)}
        disabled={current === total}
        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
          current === total
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
        }`}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default function EventPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const slug = pathname.split("/events/")[1]?.split("?")[0] || "";
  const urlMonth = searchParams.get("month")?.toLowerCase();

  const eventKey = slugToKey(slug);
  const config = eventData[eventKey];

  const [selectedMonth, setSelectedMonth] = useState(urlMonth || "");
  const [selectedYear, setSelectedYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [sermonView, setSermonView] = useState("hidden"); // 'hidden', 'modal', 'minimized'
  const hasAutoShown = useRef(false);

  useEffect(() => {
    if (currentEntry?.sermon && !hasAutoShown.current) {
      setSermonView("modal");
      hasAutoShown.current = true;
    }
  }, [currentEntry]);

  const imagesPerPage = 8;

  const resetPageAndSet = (setter, value) => {
    setCurrentPage(1);
    setter(value);
  };

  const handleMonthChange = (value) => {
    resetPageAndSet(
      setSelectedMonth,
      value === "All Months" ? "" : value.toLowerCase()
    );
  };

  const handleYearChange = (value) => {
    resetPageAndSet(setSelectedYear, value === "All Years" ? "" : value);
  };

  const months = useMemo(() => {
    if (!config || config.type !== "monthly") return [];
    const set = new Set(config.entries.map((e) => e.month).filter(Boolean));
    return Array.from(set)
      .map((m) => m.charAt(0).toUpperCase() + m.slice(1))
      .sort();
  }, [config]);

  const years = useMemo(() => {
    if (!config) return [];
    return Array.from(new Set(config.entries.map((e) => e.year))).sort(
      (a, b) => b - a
    );
  }, [config]);

  const currentEntry = useMemo(() => {
    if (!config) return null;
    // Sort entries by year descending to show the latest by default
    const sortedEntries = [...config.entries].sort((a, b) => b.year - a.year);
    return (
      sortedEntries.find((e) => {
        const monthMatch =
          !selectedMonth ||
          e.month?.toLowerCase() === selectedMonth.toLowerCase();
        const yearMatch = !selectedYear || e.year === Number(selectedYear);
        return monthMatch && yearMatch;
      }) || sortedEntries[0]
    );
  }, [config, selectedMonth, selectedYear]);

  const gallery = currentEntry?.gallery || [];
  const totalPages = Math.ceil(gallery.length / imagesPerPage);
  const paginated = gallery.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  if (!config) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-4xl text-warning">Event Not Found</h1>
        <p className="text-gray-500 mt-4">Key tried: &ldquo;{eventKey}&quot;</p>
      </div>
    );
  }

  const openLightbox = (localIndex) => {
    setLightboxIndex((currentPage - 1) * imagesPerPage + localIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="container mt-5 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-warning">{config.title}</h1>
          <p className="text-2xl mt-3 text-black">{config.slogan}</p>
          {currentEntry?.sermon && (
            <button
              onClick={() => setSermonView("modal")}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-flex items-center gap-2 animate-pulse"
            >
              <i className="fas fa-play-circle text-xl"></i>
              <span>Watch Live</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {config.type === "monthly" && months.length > 0 && (
            <FilterDropdown
              label="Month"
              options={["All Months", ...months]}
              value={
                selectedMonth
                  ? selectedMonth.charAt(0).toUpperCase() +
                    selectedMonth.slice(1)
                  : "All Months"
              }
              onChange={handleMonthChange}
            />
          )}
          {years.length > 1 && (
            <FilterDropdown
              label="Year"
              options={["All Years", ...years.map(String)]}
              value={selectedYear || "All Years"}
              onChange={handleYearChange}
            />
          )}
        </div>

        <div className="row g-5 align-items-stretch mb-12">
          <div className="col-lg-5">
            <Image
              src={config.coordinatorImage}
              alt={config.coordinator}
              width={600}
              height={700}
              className="w-100 h-100 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="col-lg-7">
            <div className="bg-white border-l-4 border-warning shadow-2xl rounded-2xl p-8 d-flex flex-column justify-content-center">
              <h2 className="text-4xl font-bold mb-4 text-warning">
                {config.title}
              </h2>
              <p className="text-xl mb-3">
                <strong>Coordinator:</strong> {config.coordinator}
              </p>
              {currentEntry?.date && (
                <p className="text-lg mb-4">
                  <strong>Date:</strong> {currentEntry.date}
                </p>
              )}
              <p className="text-lg">{config.description}</p>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-10 text-warning">
          Gallery
        </h2>
        {gallery.length > 0 ? (
          <>
            <GalleryGrid images={paginated} onClick={openLightbox} />
            {totalPages > 1 && (
              <Pagination
                current={currentPage}
                total={totalPages}
                onChange={setCurrentPage}
              />
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No images for selected filters.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <LightboxModal
          images={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() =>
            setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length)
          }
          onNext={() => setLightboxIndex((i) => (i + 1) % gallery.length)}
        />
      )}

      {/* Persistent Sermon Player Modal */}
      {currentEntry?.sermon && sermonView !== "hidden" && (
        <>
          <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-300 ${
              sermonView === "modal"
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <div className="relative w-full max-w-5xl mx-4 bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
                <h3 className="text-white font-semibold text-lg">
                  Watching: {config.title}
                </h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSermonView("minimized")}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                    title="Minimize"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <button
                    onClick={() => setSermonView("hidden")}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    title="Close"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={currentEntry.sermon}
                  title="Sermon Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {sermonView === "minimized" && (
            <button
              onClick={() => setSermonView("modal")}
              className="fixed bottom-24 right-8 z-[100] w-16 h-16 bg-yellow-500 rounded-full shadow-2xl flex items-center justify-center text-black hover:scale-110 transition-transform animate-bounce border-4 border-white"
              title="Resume Watching"
            >
              <i className="fas fa-play text-2xl"></i>
            </button>
          )}
        </>
      )}

      {/* Global Video Popup (Floating Button for Navigation) */}
      <WelcomeVideoPopup
        initialOpen={true}
        initialMinimized={true}
        autoOpen={false}
      />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </>
  );
}
