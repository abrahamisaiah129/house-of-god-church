'use client';

import { useState, useEffect } from 'react';

export default function Banner({ title, highlight = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      image: '/assets/images/ca1.png',
      title: title,
      subtitle: 'Join us in worship, experience God\'s presence, and grow in faith.',
      serviceTime: 'Sunday: 9 AM – Lagos, Nigeria'
    },
    {
      image: '/assets/images/ca3.png',
      title: title,
      subtitle: 'Come as you are and encounter the transforming power of God.',
      serviceTime: 'Wednesday Bible Study: 6 PM'
    },
    {
      image: '/assets/images/Rectangle 4.png',
      title: title,
      subtitle: 'Find your place in our growing family of believers.',
      serviceTime: 'Friday Prayer: 6 PM'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section mt-5 pt-3">
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              style={{ 
                backgroundImage: `url('${slide.image}')`,
                height: '60vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="carousel-overlay">
                {highlight && <p className="text-warning mb-2">{highlight}</p>}
                <h1>{slide.title}</h1>
                <p className="mt-3">{slide.subtitle}</p>
                <p className="service-time">
                  <i className="fa-regular fa-calendar-days"></i> {slide.serviceTime}
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
          onClick={() => setActiveIndex(prev => (prev - 1 + slides.length) % slides.length)}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button 
          className="carousel-control-next" 
          type="button" 
          onClick={() => setActiveIndex(prev => (prev + 1) % slides.length)}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Custom indicators */}
        <div className="custom-indicators">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`custom-indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}