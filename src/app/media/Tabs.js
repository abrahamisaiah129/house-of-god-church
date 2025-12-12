/* eslint-disable jsx-a11y/role-supports-aria-props */
// File: ./Tabs.js
"use client";

import { useState, useMemo } from "react";
import React from "react";

/**
 * Simplified Tab Component.
 * Manages the active tab state and renders the content component passed via props.
 * * @param {object} props
 * @param {React.ReactNode} props.Video - The Video content component (e.g., <VideoPage />).
 * @param {React.ReactNode} props.Audio - The Audio content component (e.g., <AudioPage />).
 * @param {React.ReactNode} props.Gallery - The Gallery content component (e.g., <GalleryPage />).
 */
export default function Tabs({ Video, Audio, Gallery }) {
  // 1. Define all available tabs, linking the ID to the content prop.
  const allTabs = useMemo(
    () => [
      {
        id: "gallery",
        label: "Image Gallery",
        icon: "fas fa-images",
        content: Gallery,
      },
      {
        id: "video",
        label: "Watch Videos",
        icon: "fas fa-video",
        content: Video,
      },
      {
        id: "audio",
        label: "Listen Audio",
        icon: "fas fa-headphones",
        content: Audio,
      },
    ],
    [Video, Audio, Gallery]
  ); // Dependencies ensure this updates if the passed props change

  // Filter out any tabs whose content prop is null/undefined (though based on your usage, all should be present).
  const availableTabs = allTabs.filter((tab) =>
    React.isValidElement(tab.content)
  );

  // 2. State to track the currently active tab (defaults to the first available one)
  const [activeTabId, setActiveTabId] = useState(availableTabs[0]?.id || null);

  // 3. Find the active content to render
  const ActiveContent = availableTabs.find(
    (tab) => tab.id === activeTabId
  )?.content;

  if (availableTabs.length === 0) {
    return (
      <div className="text-center text-muted py-5">
        No media content available.
      </div>
    );
  }

  return (
    <div className="container church-section">
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Tab Navigation */}
          <ul className="nav nav-pills nav-fill mb-4 media-tabs">
            {availableTabs.map((tab) => (
              <li className="nav-item " key={tab.id}>
                <button
                  className={`nav-link  ${
                    activeTabId === tab.id ? "active " : " "
                  }`}
                  onClick={() => setActiveTabId(tab.id)}
                  aria-controls={`${tab.id}-tab-content`}
                  aria-selected={activeTabId === tab.id}
                >
                  <i className={`${tab.icon} me-2`}></i> {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tab Content: Render the selected component */}
      <div className="tab-content">{ActiveContent}</div>

      {/* Custom styles for the tabs to ensure proper theming */}
      <style jsx global>{`
        .media-tabs .nav-link {
          cursor: pointer;
          color: #212529; /* Default text color */
          border: 1px solid #ffc107;
          background-color: #f8f9fa; /* Light background */
          transition: all 0.2s ease-in-out;
        }
        .media-tabs .nav-link:hover:not(.active) {
          background-color: #ffe8a1; /* Light hover effect */
        }
        .media-tabs .nav-link.active {
          color: #ffc107; /* Active background (Yellow/Secondary) */
          background-color: #212529; /* Active text color (Fixed to dark gray/black) */
          font-weight: bold;
        }
        /* Add church-section styling here if it's not global */
        /* .church-section { padding: 60px 0; } */
      `}</style>
    </div>
  );
}
