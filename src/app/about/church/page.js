"use client";

// import BaseFooter from "@/components/BaseFooter";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutChurchPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: "/assets/images/ca1.png",
      welcomeText: "Welcome to",
      title: "HOUSEHOLD OF GOD CHURCH",
      subtitle:
        "Join us in worship, experience God's presence, and grow in faith.",
      serviceTime: "Sunday: 9 AM – Lagos, Nigeria",
    },
    {
      image: "/assets/images/ca3.png",
      welcomeText: "Experience",
      title: "GOD'S LOVE",
      subtitle: "Come as you are and encounter the transforming power of God.",
      serviceTime: "Wednesday Bible Study: 6 PM",
    },
    {
      image: "/assets/images/Rectangle 4.png",
      welcomeText: "Join Our",
      title: "COMMUNITY",
      subtitle: "Find your place in our growing family of believers.",
      serviceTime: "Friday Prayer: 6 PM",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <div className="hero-section mt-5 pt-3">
        <div
          id="churchCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  height: "60vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="carousel-overlay">
                  <p>{slide.welcomeText}</p>
                  <h1>{slide.title}</h1>
                  <p className="mt-3">{slide.subtitle}</p>
                  <p className="service-time">
                    <i className="fa-regular fa-calendar-days"></i>{" "}
                    {slide.serviceTime}
                  </p>
                  <a href="#" className="watch-btn mt-3">
                    <i className="fa-solid fa-video"></i> Watch Live
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

          {/* Custom indicators */}
          <div className="custom-indicators">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`custom-indicator ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* About Church Content */}
      <div className="container church-section">
        <div className="row align-items-stretch church-row">
          <div className="col-md-5 d-flex">
            <div className="w-100 h-100">
              <Image
                src="/assets/images/ca1.png"
                alt="Church Building"
                width={500}
                height={400}
                className="church-image h-100 w-100 object-fit-cover rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="bg-white! border-l-4 border-[#ffd700] shadow-lg rounded-2xl p-8 md:p-10 d-flex flex-column justify-content-center w-100 leading-relaxed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 text-justify">
              <h2 className="church-title">
                The Household Of God Church International Ministries
              </h2>
              <p className="church-text">
                The young ministry had its inaugural Sunday morning service on
                the 1st of February, 1987 in his living room, then in the Ikeja
                area of Lagos state. As membership of the young but peculiar
                church grew into the hundreds and thousands, the surrounding
                grounds of his house became sitting area for the overspill from
                the living room.
              </p>
              <p className="church-text">
                The ministry of the church and the person of Reverend Chris
                Okotie as a minister of the gospel became nationally recognized
                when the Lord Jesus Christ inspired the inauguration of the
                GRACE PROGRAMME and the television ministry, APOKALUPSIS.
              </p>
              <p className="church-text">
                The charity driven GRACE programme was instituted in 1990 and
                has become a major benevolence channel of the ministry on an
                annual basis.
              </p>
              <p className="church-text">
                The objective of the programme as directed by the Lord Jesus is
                to extend the arm of care and sharing to the less privileged in
                the society through recognized non governmental organizations
                who deal directly with such people.
              </p>
              <p className="church-text">
                In 1996 the KARIS AWARD, yet another inspiration by the Lord
                Jesus, which is aimed at appreciating Nigerians who have
                positively impacted the nation but have not been recognized by
                the government, was instituted and subsumed into the GRACE
                programme.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12"></div>
        </div>

        {/* Additional Content Sections */}
        {/* <div className="row mt-5">
          <div className="col-md-6">
            <h3 className="church-subtitle mb-3">Our Vision</h3>
            <p className="church-text">
              To be a church where grace meets glory, transforming lives through the power of the Gospel and building a community of believers who reflect God's love in the world.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="church-subtitle mb-3">Our Mission</h3>
            <p className="church-text">
              To preach the Gospel of Jesus Christ, disciple believers, minister to the needs of people, and impact our community and nation through God's love and grace.
            </p>
          </div>
        </div> */}

        {/* Core Values */}
        {/* <div className="row mt-5">
          <div className="col-12">
            <h3 className="church-title text-center mb-4">Our Core Values</h3>
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="text-center p-3">
                  <div className="value-icon mb-3">
                    <i className="fas fa-heart fa-2x text-warning"></i>
                  </div>
                  <h5>Love</h5>
                  <p className="small">Demonstrating God's unconditional love</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="text-center p-3">
                  <div className="value-icon mb-3">
                    <i className="fas fa-hands-praying fa-2x text-warning"></i>
                  </div>
                  <h5>Faith</h5>
                  <p className="small">Walking in faith and trust in God</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="text-center p-3">
                  <div className="value-icon mb-3">
                    <i className="fas fa-handshake fa-2x text-warning"></i>
                  </div>
                  <h5>Community</h5>
                  <p className="small">Building strong Christian fellowship</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="text-center p-3">
                  <div className="value-icon mb-3">
                    <i className="fas fa-book-bible fa-2x text-warning"></i>
                  </div>
                  <h5>Word</h5>
                  <p className="small">Standing on the truth of God's Word</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Church History Timeline */}
        {/* <div className="row mt-5">
          <div className="col-12">
            <h3 className="church-title text-center mb-4">Church History Timeline</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">1987</div>
                <div className="timeline-content">
                  <h5>Church Inauguration</h5>
                  <p>First Sunday service held in Reverend Chris Okotie's living room in Ikeja, Lagos</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1990</div>
                <div className="timeline-content">
                  <h5>GRACE Programme Launch</h5>
                  <p>Inauguration of the charity-driven GRACE programme for the less privileged</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">1996</div>
                <div className="timeline-content">
                  <h5>KARIS Award Institution</h5>
                  <p>Establishment of the KARIS AWARD to recognize impactful Nigerians</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">Present</div>
                <div className="timeline-content">
                  <h5>Continuing Ministry</h5>
                  <p>Growing church community with multiple departments and outreach programs</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          {/* Visit Us Card */}
          <div className="bg-white p-6 border-l-4 border-yellow-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-3">Visit Us</h4>
            <p className="flex items-start text-gray-700 leading-relaxed">
              <i className="fas fa-map-marker-alt text-yellow-500 mt-1 mr-2"></i>
              Plot 4 Household of God Street, Off Kudirat Abiola Way, Clay
              Bus–Stop, Ikeja, Lagos – Nigeria
            </p>
          </div>

          {/* Service Times Card */}
          <div className="bg-white p-6 border-l-4 border-yellow-500 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-3">Service Times</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <i className="far fa-clock text-yellow-500 mr-2"></i>
                <strong className="mr-1">Sunday Service:</strong> 9:00 AM
              </li>
              <li className="flex items-center">
                <i className="far fa-clock text-yellow-500 mr-2"></i>
                <strong className="mr-1">Wednesday Bible Study:</strong> 6:00 PM
              </li>
              <li className="flex items-center">
                <i className="far fa-clock text-yellow-500 mr-2"></i>
                <strong className="mr-1">Friday Prayer Meeting:</strong> 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <BaseFooter /> */}
    </>
  );
}
