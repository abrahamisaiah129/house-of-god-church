"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-section py-5" id="contact-section">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* LEFT COLUMN */}
          <div className="col-lg-6 d-flex">
            <div className="bg-black p-5 rounded-4 shadow-lg w-100 d-flex flex-column justify-content-center h-100 border border-gray-800">
              <h3 className="fw-bold text-warning mb-2">SEND US A MESSAGE</h3>
              <div className="w-24 h-1 bg-yellow-500 mb-4 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>

              <p
                className="text-gray-300 mb-4 text-lg"
                style={{ fontWeight: 500 }}
              >
                Questions, comments, or suggestions? Simply fill in the form and
                we&apos;ll be in touch shortly.
              </p>

              {/* EVENLY SPACED INFO */}
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="mt-1 bg-gray-900 p-2 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="fas fa-location-dot text-warning text-lg"></i>
                  </div>
                  <span className="text-gray-200 text-lg font-medium">
                    Plot 4 Household of God Street, Off Kudirat Abiola Way,{" "}
                    <br />
                    Clay Bus–Stop, Ikeja, Lagos – Nigeria
                  </span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div
                    className="bg-gray-900 p-2 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="fas fa-envelope text-warning text-lg"></i>
                  </div>
                  <span className="text-gray-200 text-lg font-medium">
                    info@householdofgodchurch.org
                  </span>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div
                    className="mt-1 bg-gray-900 p-2 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="fas fa-phone text-warning text-lg"></i>
                  </div>
                  <span className="text-gray-200 text-lg font-medium">
                    +234 813 6633 494 <br />
                    +234 702 6828 318
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6 d-flex">
            <div className="bg-white p-5 rounded-4 shadow-lg border border-light w-100 d-flex flex-column justify-content-center h-100">
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-4 h-100"
              >
                <div>
                  <h3 className="fw-bold text-warning mb-2">CONTACT FORM</h3>
                  <div className="w-24 h-1 bg-yellow-500 mb-2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                  <p className="text-muted small">
                    Kindly fill the form below to reach out to us
                  </p>
                </div>

                <div className="position-relative">
                  <i className="fas fa-user position-absolute top-50 start-0 translate-middle-y ms-3 text-warning"></i>
                  <input
                    type="text"
                    className="form-control ps-5 py-3 shadow-none"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "10px" }}
                  />
                </div>

                <div className="position-relative">
                  <i className="fas fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3 text-warning"></i>
                  <input
                    type="email"
                    className="form-control ps-5 py-3 shadow-none"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "10px" }}
                  />
                </div>

                <div className="position-relative">
                  <i className="fas fa-tag position-absolute top-50 start-0 translate-middle-y ms-3 text-warning"></i>
                  <input
                    type="text"
                    className="form-control ps-5 py-3 shadow-none"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "10px" }}
                  />
                </div>

                <div className="position-relative flex-grow-1">
                  <i className="fas fa-comment-dots position-absolute start-0 ms-3 mt-3 text-warning"></i>
                  <textarea
                    className="form-control ps-5 py-3 shadow-none h-100"
                    placeholder="Write your message here..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "10px", minHeight: "120px" }}
                  />
                </div>

                <div className="text-end">
                  <button
                    type="submit"
                    className="btn btn-warning fw-bold px-5 py-3 border-0"
                    style={{ borderRadius: "10px" }}
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
