// app/converts/page.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createConvert } from "@/lib/api";

import Header from "@/components/Navigation";
import BaseFooter from "@/components/BaseFooter";
import ChurchHero from "@/components/ChurchHero";
export default function ConvertsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        phonenumber: formData.phone,
        status: "Not Contacted",
        category: "New Convert",
      };

      const result = await createConvert(payload);
      if (result.success || result.data) {
        // Handle both response formats
        console.log("New Convert Submitted:", result.data);
        setCurrentStep(3);
      } else {
        const errorMsg =
          result.error || "Something went wrong. Please try again.";
        console.error("Submission failed:", errorMsg);
        setErrorMessage(errorMsg);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage(error.message || "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToStep2 = () => setCurrentStep(2);
  const goToStep3 = () => setCurrentStep(3);

  // WhatsApp link (replace with your church's number)
  const whatsappNumber = "2348031234567"; // Change this!
  const whatsappMessage = `Hello! I just gave my life to Christ on the Household of God website. My name is ${
    formData.name || "a new believer"
  }. Please reach out to me.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <>
      {/* the navigation bar here  */}
      <Header />
      {/* Hero Banner  */}
      {/* <Banner title={"NEW CONVERTS"} highlight="Welcome to" /> */}
      <ChurchHero title="NEW CONVERTS" />

      <div className="container py-5">
        {/* Progress Steps */}
        <div className="progress-steps d-flex justify-content-center mb-5">
          <div className={`step-indicator ${currentStep >= 1 ? "active" : ""}`}>
            1
          </div>
          <div className={`step-indicator ${currentStep >= 2 ? "active" : ""}`}>
            2
          </div>
          <div className={`step-indicator ${currentStep >= 3 ? "active" : ""}`}>
            3
          </div>
        </div>

        {/* Step 1: Prayer of Salvation */}
        {currentStep === 1 && (
          <div className="card bg-dark text-white shadow p-5 step-card active">
            <div className="text-center mb-4">
              <Image
                src="/assets/images/hog-logo.png"
                alt="Church Logo"
                width={120}
                height={80}
                className="img-fluid mb-3 bg-dark p-2 rounded"
              />
              <h2 className="fw-bold" style={{ color: "#ffc107" }}>
                Would You Like to Give Your Life to Christ Today?
              </h2>
            </div>
            <p className="lead">
              If your answer is{" "}
              <strong style={{ color: "#ffc107" }}>YES</strong>, kindly say this
              prayer with faith in your heart:
            </p>
            <h5 className="fw-bold" style={{ color: "#ffc107" }}>
              Prayer of Salvation
            </h5>
            <p className="lead">
              Father, I come to You now in the Name of Jesus Christ.
              <br />
              I believe in my heart that Jesus Christ is the Son of God.
              <br />
              I believe He died for me and that He rose from the dead.
              <br />
              Today, I confess with my mouth that Jesus Christ is my Lord and my
              personal Saviour.
              <br />
              Thank You, Lord, for saving me. I give You all the glory.
              <br />
              <strong style={{ color: "#ffc107" }}>Amen.</strong>
            </p>
            <div className="text-center">
              <button
                type="button"
                onClick={goToStep2}
                className="btn btn-warning btn-lg fw-bold px-5"
                style={{ backgroundColor: "#ffc107", border: "none" }}
              >
                I Have Affirmed This Prayer
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Contact Form */}
        {currentStep === 2 && (
          <div className="card bg-dark text-white shadow p-5 step-card active">
            <div className="text-center mb-4">
              <i
                className="fas fa-check-circle"
                style={{ fontSize: "2.5rem", color: "#ffc107" }}
              ></i>
              <h5 className="fw-bold mt-3" style={{ color: "#ffc107" }}>
                Great! Now Let&#39;s Connect
              </h5>
            </div>
            <p className="lead">
              We would love to stand with you in prayer and guide you on your
              new journey of faith.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 position-relative">
                <input
                  type="text"
                  name="name"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder=" "
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label className="form-label position-absolute">
                  Full Name
                </label>
              </div>

              <div className="mb-4 position-relative">
                <input
                  type="email"
                  name="email"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label className="form-label position-absolute">
                  Email Address (Optional)
                </label>
              </div>

              <div className="mb-4 position-relative">
                <input
                  type="text"
                  name="address"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder=" "
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <label className="form-label position-absolute">Address</label>
              </div>

              <div className="mb-4 position-relative">
                <input
                  type="text"
                  name="phone"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder=" "
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <label className="form-label position-absolute">
                  Phone Number
                </label>
              </div>

              {errorMessage && (
                <div className="alert alert-danger mb-4" role="alert">
                  {errorMessage}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-warning btn-lg fw-bold px-5 d-inline-flex align-items-center justify-content-center"
                  style={{ minWidth: "200px" }}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Sending...
                    </>
                  ) : (
                    "Submit & Continue"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: WhatsApp */}
        {currentStep === 3 && (
          <div className="card bg-dark text-white shadow p-5 step-card active">
            <div className="text-center">
              <i
                className="fas fa-check-circle"
                style={{ fontSize: "3rem", color: "#28a745" }}
              ></i>
              <h3 className="fw-bold mt-4" style={{ color: "#ffc107" }}>
                Congratulations!
              </h3>
              <h5 className="fw-bold mt-3">Welcome to God&lsquo;s Family!</h5>
              <p className="lead mb-4">
                Your information has been received. A soul winner will contact
                you soon.
              </p>
              <p className="lead mb-5">
                Or chat with us right now on WhatsApp:
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg px-5"
                style={{ backgroundColor: "#25d366", border: "none" }}
              >
                <i className="fab fa-whatsapp me-2"></i>
                Chat on WhatsApp Now
              </a>
              <div className="mt-4">
                <Link href="/" className="btn btn-outline-light">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Label CSS */}
      <style jsx>{`
        .form-control:focus,
        .form-control:not(:placeholder-shown) {
          padding-top: 1.5rem;
          padding-bottom: 0.5rem;
        }
        .form-label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 1rem 0.75rem;
          font-size: 1rem;
          color: #aaa;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        .form-control:focus ~ .form-label,
        .form-control:not(:placeholder-shown) ~ .form-label {
          top: -0.5rem;
          left: 0.75rem;
          font-size: 0.75rem;
          color: #ffc107;
          background-color: #212529;
          padding: 0 0.35rem;
        }
        .progress-steps {
          gap: 2rem;
        }
        .step-indicator {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #444;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          border: 3px solid #666;
          transition: all 0.3s;
        }
        .step-indicator.active {
          background: #ffc107;
          color: black;
          border-color: #ffc107;
          transform: scale(1.1);
        }
      `}</style>
      {/* footer imported */}
      <BaseFooter />
    </>
  );
}
