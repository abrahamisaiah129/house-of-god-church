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
    <div className="container church-section ">
      <div className="row justify-content-center mb-1">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Tab Navigation */}
          <ul className="nav nav-pills nav-fill mb-4 media-tabs">
            {availableTabs.map((tab) => (
              <li className="nav-item " key={tab.id}>
                <button
                  className={`nav-link d-flex align-items-center justify-content-center ${
                    activeTabId === tab.id ? "active " : " "
                  }`}
                  onClick={() => setActiveTabId(tab.id)}
                  aria-controls={`${tab.id}-tab-content`}
                  aria-selected={activeTabId === tab.id}
                >
                  <i className={`${tab.icon} me-0 me-md-2`}></i>
                  <span className="d-none d-md-inline">{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tab Content: Render the selected component */}
      <div>{ActiveContent}</div>

      {/* Custom styles for the tabs to ensure proper theming */}
      <style jsx global>{`
        .media-tabs .nav-link {
          cursor: pointer;
          color: #212529;
          border: 1px solid #ffc107;
          background-color: #f8f9fa;
          transition: all 0.3s ease;
        }
        .media-tabs .nav-link:hover:not(.active) {
          background-color: #ffe8a1;
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }
        .media-tabs .nav-link.active {
          color: #ffc107;
          background-color: #212529;
          font-weight: bold;
        }

        .church-section {
          padding: 60px 0;
          margin-top: 80px;
        }
      `}</style>
    </div>
  );
}
