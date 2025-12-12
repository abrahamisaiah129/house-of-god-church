"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/Header.css";

// Define the full event structure based on the provided PHP HTML list
const eventStructure = [
  // Yearly/Direct Links
  { name: "Grace", type: "yearly", href: "/events/grace" },

  // Monthly Events with Sub-menus
  {
    name: "Queen Esther",
    type: "monthly",
    months: ["April", "March", "October"],
    baseHref: "/events/queen-esther",
  },

  // Yearly/Direct Links
  {
    name: "Hallelujah Party",
    type: "yearly",
    href: "/events/hallelujah-party",
  },

  // Monthly Events with Sub-menus
  {
    name: "Fellowship Sunday",
    type: "monthly",
    months: ["May", "November"],
    baseHref: "/events/fellowship-sunday",
  },
  {
    name: "Baby Dedication",
    type: "monthly",
    months: ["April", "August"],
    baseHref: "/events/baby-dedication",
  },
  {
    name: "Christmas Carol",
    type: "monthly",
    months: ["December"],
    baseHref: "/events/christmas-carol",
  },
  {
    name: "Youth Rally",
    type: "monthly",
    months: ["June"],
    baseHref: "/events/youth-rally",
  },

  // Yearly/Direct Links
  {
    name: "Annual Conference",
    type: "yearly",
    href: "/events/annual-conference",
  },
  { name: "Karis Award", type: "yearly", href: "/events/karis-award" },

  // Monthly Events with Sub-menus
  {
    name: "Prayer Meeting",
    type: "monthly",
    months: ["March"],
    baseHref: "/events/prayer-meeting",
  },

  // Simple/Other Direct Links
  { name: "Incandescence", type: "simple", href: "/events/incandescence" },
  { name: "Annual Revival", type: "simple", href: "/events/annual-revival" },
  {
    name: "Youth Conference",
    type: "simple",
    href: "/events/youth-conference",
  },
  { name: "Easter", type: "simple", href: "/events/easter" },
  { name: "Thanksgiving", type: "simple", href: "/events/thanksgiving" },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const navRef = useRef(null);
  const pathname = usePathname();

  const isActive = (path) => {
    // Check for exact match for root path or startsWith for others
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when pressing Escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsNavOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const toggleDropdown = (dropdownName) => {
    // If opening a new main dropdown, close any open sub-dropdown
    if (openDropdown !== dropdownName) {
      setOpenSubDropdown(null);
    }
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const toggleSubDropdown = (subDropdownName) => {
    // Toggles the nested (monthly) event dropdown
    setOpenSubDropdown(
      openSubDropdown === subDropdownName ? null : subDropdownName
    );
  };

  const handleLinkClick = () => {
    // Resets ALL menu state on *any* internal Link click, preventing cascading renders
    setIsNavOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const getEventLink = (baseHref, month = null) => {
    // Function to construct a URL that conceptually maps to the PHP's data payload
    if (month) {
      return `${baseHref}?month=${month.toLowerCase()}`;
    }
    return baseHref;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" ref={navRef}>
      <div className="container">
        <Link className="navbar-brand" href="/" onClick={handleLinkClick}>
          <Image
            src="/assets/images/hog-logo.png"
            alt="Household of God Church Logo"
            width={120}
            height={40}
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {/* 1. Home */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                href="/"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>

            {/* 2. About Dropdown */}
            <li
              className={`nav-item dropdown ${
                openDropdown === "about" ? "show" : ""
              }`}
            >
              <button
                className={`nav-link dropdown-toggle ${
                  isActive("/about") ? "active" : ""
                }`}
                onClick={() => toggleDropdown("about")}
                aria-expanded={openDropdown === "about"}
              >
                About
              </button>
              <ul
                className={`dropdown-menu ${
                  openDropdown === "about" ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    href="/about/church"
                    onClick={handleLinkClick}
                  >
                    Our Church
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/about/pastor"
                    onClick={handleLinkClick}
                  >
                    Our Pastor
                  </Link>
                </li>
              </ul>
            </li>

            {/* 3. Departments Dropdown */}
            <li
              className={`nav-item dropdown ${
                openDropdown === "departments" ? "show" : ""
              }`}
            >
              <button
                className={`nav-link dropdown-toggle ${
                  isActive("/departments") ? "active" : ""
                }`}
                onClick={() => toggleDropdown("departments")}
                aria-expanded={openDropdown === "departments"}
              >
                Departments
              </button>
              <ul
                className={`dropdown-menu ${
                  openDropdown === "departments" ? "show" : ""
                }`}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/children"
                    onClick={handleLinkClick}
                  >
                    Children&#39;s Department
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/singles"
                    onClick={handleLinkClick}
                  >
                    Singles Department
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/works"
                    onClick={handleLinkClick}
                  >
                    Works Department
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/publication"
                    onClick={handleLinkClick}
                  >
                    Publication Department
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/evangelism"
                    onClick={handleLinkClick}
                  >
                    Evangelism Department
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/holy-police"
                    onClick={handleLinkClick}
                  >
                    Holy Police
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/technical-crew"
                    onClick={handleLinkClick}
                  >
                    Technical Crew
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/villa-sanitation"
                    onClick={handleLinkClick}
                  >
                    Villa Sanitation
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/pastoral-care"
                    onClick={handleLinkClick}
                  >
                    Pastoral Care
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/missions"
                    onClick={handleLinkClick}
                  >
                    Missions Department
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/protocol"
                    onClick={handleLinkClick}
                  >
                    Protocol Department
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href="/departments/benevolence"
                    onClick={handleLinkClick}
                  >
                    Benevolence Department
                  </Link>
                </li>
              </ul>
            </li>

            {/* 4. Events Dropdown (With complete structure) */}
            <li
              className={`nav-item dropdown ${
                openDropdown === "events" ? "show" : ""
              }`}
            >
              <button
                className={`nav-link dropdown-toggle ${
                  isActive("/events") || pathname.startsWith("/events")
                    ? "active"
                    : ""
                }`}
                onClick={() => toggleDropdown("events")}
                aria-expanded={openDropdown === "events"}
              >
                Events
              </button>
              <ul
                className={`dropdown-menu ${
                  openDropdown === "events" ? "show" : ""
                }`}
              >
                {eventStructure.map((event) => {
                  if (event.type === "monthly") {
                    // Monthly Event: Renders as a nested submenu (dropdown-submenu)
                    const eventSlug = event.name
                      .toLowerCase()
                      .replace(/\s/g, "-");
                    return (
                      <li
                        key={event.name}
                        className={`dropdown-submenu ${
                          openSubDropdown === eventSlug ? "show" : ""
                        }`}
                      >
                        <button
                          className="dropdown-item text-warning dropdown-toggle"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleSubDropdown(eventSlug);
                          }}
                          aria-expanded={openSubDropdown === eventSlug}
                        >
                          {event.name}
                        </button>
                        <ul
                          className={`dropdown-menu ${
                            openSubDropdown === eventSlug ? "show" : ""
                          }`}
                        >
                          {event.months.map((month) => (
                            <li key={month}>
                              <Link
                                className="dropdown-item"
                                href={getEventLink(event.baseHref, month)}
                                onClick={handleLinkClick}
                              >
                                {month}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    // Yearly or Simple Event: Renders as a direct link
                    return (
                      <li key={event.name}>
                        <Link
                          className="dropdown-item"
                          href={event.href}
                          onClick={handleLinkClick}
                        >
                          {event.name}
                        </Link>
                      </li>
                    );
                  }
                })}
              </ul>
            </li>

            {/* 5. New Converts */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/converts") ? "active" : ""}`}
                href="/converts"
                onClick={handleLinkClick}
              >
                New Converts
              </Link>
            </li>

            {/* 6. Media */}
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/media") ? "active" : ""}`}
                href="/media"
                onClick={handleLinkClick}
              >
                Media
              </Link>
            </li>

            {/* 7. Contact Us */}
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/#contact-section"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx global>{`
        /* Styles required for nested (dropdown-submenu) functionality */
        .dropdown-submenu {
          position: relative;
        }
        .dropdown-submenu .dropdown-menu {
          top: 0;
          left: 100%;
          margin-left: 0.1rem;
          display: none;
        }
        /* Show on hover for desktop */
        @media (min-width: 992px) {
          .dropdown-submenu:hover > .dropdown-menu {
            display: block;
          }
        }
        /* Show on click for all, controlled by state */
        .dropdown-submenu.show > .dropdown-menu {
          display: block;
        }
        /* Mobile adjustments */
        @media (max-width: 991.98px) {
          .dropdown-submenu .dropdown-menu {
            position: static;
            left: 0;
            margin-left: 1rem;
            border: none;
          }
        }

        /* 🎨 FIX: Force text color in nested dropdowns to be visible 🎨 */
        .dropdown-submenu .dropdown-menu .dropdown-item {
          color: #fff !important;
        }

        /* Ensure hover state still works for the nested items */
        .dropdown-submenu .dropdown-menu .dropdown-item:hover {
          background-color: #ffc107; /* Assuming yellow/secondary color from PHP snippet */
          color: #000 !important;
        }
      `}</style>
    </nav>
  );
}
