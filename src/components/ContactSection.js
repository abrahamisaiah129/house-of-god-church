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
        <div className="row g-5 align-items-stretch">
          {/* LEFT COLUMN */}
          <div className="col-lg-6 d-flex flex-column">
            <h3 className="fw-bold text-warning mb-3">SEND US A MESSAGE</h3>

            <p
              className="text-gray-600 mb-4 text-lg"
              style={{ fontWeight: 500 }}
            >
              Questions, comments, or suggestions? Simply fill in the form and
              we&apos;ll be in touch shortly.
            </p>

            {/* EVENLY SPACED INFO */}
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-start gap-3">
                <i className="fas fa-location-dot text-warning text-xl mt-1"></i>
                <span className="text-gray-800 text-lg font-medium">
                  Plot 4 Household of God Street, Off Kudirat Abiola Way, <br />
                  Clay Bus–Stop, Ikeja, Lagos – Nigeria
                </span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <i className="fas fa-envelope text-warning text-xl"></i>
                <span className="text-gray-800 text-lg font-medium">
                  info@householdofgodchurch.org
                </span>
              </div>

              <div className="d-flex align-items-start gap-3">
                <i className="fas fa-phone text-warning text-xl mt-1"></i>
                <span className="text-gray-800 text-lg font-medium">
                  +234 813 6633 494 <br />
                  +234 702 6828 318
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6 d-flex">
            <div className="bg-white p-5 rounded-4 shadow-lg border border-light w-100 d-flex flex-column">
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-4 h-100"
              >
                <div>
                  <h3 className="fw-bold text-warning mb-1">CONTACT FORM</h3>
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
