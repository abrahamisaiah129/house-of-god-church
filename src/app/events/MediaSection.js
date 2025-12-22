"use client";

import { useState } from "react";
import Image from "next/image";

export default function MediaSection() {
  const [activeTab, setActiveTab] = useState("audio");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock Data for Audio and Video
  const mediaData = [
    {
      id: 1,
      title: "The Mystery of Iniquity",
      preacher: "Rev. Chris Okotie",
      date: "January 14, 2024",
      type: "audio",
      duration: "1h 20m",
    },
    {
      id: 2,
      title: "The Last Outcast",
      preacher: "Rev. Chris Okotie",
      date: "February 10, 2024",
      type: "audio",
      duration: "55m",
    },
    {
      id: 3,
      title: "Sunday Service Live",
      preacher: "Rev. Chris Okotie",
      date: "March 3, 2024",
      type: "video",
      thumbnail: "/assets/images/ca1.png",
    },
    {
      id: 4,
      title: "Grace Programme 2023",
      preacher: "Rev. Chris Okotie",
      date: "December 15, 2023",
      type: "video",
      thumbnail: "/assets/images/pastor.jpg",
    },
  ];

  const filteredMedia = mediaData.filter((item) => {
    const matchesType = item.type === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.preacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="section-container py-5 bg-light">
      <div className="container">
        <div className="text-center mb-1">
          {/* Title with requested spacing */}
          <h2 className="fw-bold text-warning mb-3">
            Listen to Our Sermons and Events
          </h2>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3 mb-4">
            <button
              className={`btn px-5 py-3 rounded-pill fw-bold transition-all ${
                activeTab === "audio"
                  ? "btn-warning text-white shadow"
                  : "btn-outline-warning text-dark bg-white"
              }`}
              onClick={() => setActiveTab("audio")}
            >
              <i className="fas fa-headphones me-2"></i> Audio Sermons
            </button>
            <button
              className={`btn px-5 py-3 rounded-pill fw-bold transition-all ${
                activeTab === "video"
                  ? "btn-warning text-white shadow"
                  : "btn-outline-warning text-dark bg-white"
              }`}
              onClick={() => setActiveTab("video")}
            >
              <i className="fas fa-video me-2"></i> Video Sermons
            </button>
          </div>

          {/* Search Bar */}
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control py-3 ps-5 rounded-4 border-0 shadow-sm"
                  placeholder={`Search ${activeTab} by title, preacher, or date...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-warning"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="row g-4">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="bg-white rounded-4 shadow-sm h-100 overflow-hidden border border-light transition-all hover:shadow-md">
                  {item.type === "video" && (
                    <div
                      className="position-relative w-100"
                      style={{ height: "200px" }}
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={400}
                        height={250}
                        className="w-100 object-cover"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="bg-warning rounded-circle p-3 text-white shadow cursor-pointer hover:scale-110 transition-transform">
                          <i className="fas fa-play"></i>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-warning text-dark bg-opacity-25 text-warning fw-bold px-3 py-2 rounded-pill">
                        {item.type === "audio" ? "Audio" : "Video"}
                      </span>
                      <small className="text-muted">{item.date}</small>
                    </div>
                    <h5 className="fw-bold mb-1">{item.title}</h5>
                    <p className="text-muted small mb-3">{item.preacher}</p>

                    {item.type === "audio" && (
                      <div className="bg-light rounded-pill p-2 mt-3 d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-warning rounded-circle text-white d-flex align-items-center justify-content-center"
                          style={{ width: "32px", height: "32px" }}
                        >
                          <i
                            className="fas fa-play"
                            style={{ fontSize: "10px" }}
                          ></i>
                        </button>
                        <div
                          className="grow bg-secondary bg-opacity-25 rounded-pill"
                          style={{ height: "4px" }}
                        >
                          <div
                            className="bg-warning rounded-pill"
                            style={{ width: "30%", height: "100%" }}
                          ></div>
                        </div>
                        <small
                          className="text-muted"
                          style={{ fontSize: "10px" }}
                        >
                          {item.duration}
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted lead">No results found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
