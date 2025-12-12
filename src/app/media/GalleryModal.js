'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryModal({ item, onClose }) {
  const [activeImage, setActiveImage] = useState(item.images[0]);

  const handleThumbnailClick = (image) => {
    setActiveImage(image);
  };

  const handlePrevious = () => {
    const currentIndex = item.images.indexOf(activeImage);
    const previousIndex = currentIndex === 0 ? item.images.length - 1 : currentIndex - 1;
    setActiveImage(item.images[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = item.images.indexOf(activeImage);
    const nextIndex = currentIndex === item.images.length - 1 ? 0 : currentIndex + 1;
    setActiveImage(item.images[nextIndex]);
  };

  return (
    <div 
      className="modal fade show"
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      tabIndex="-1"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-4 bg-dark text-white">
          <div className="modal-header border-secondary">
            <h5 className="modal-title fw-bold">{item.title}</h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          
          <div className="modal-body">
            {/* Main Image with Navigation */}
            <div className="position-relative mb-4">
              <div style={{ position: 'relative', height: '400px' }}>
                <Image
                  src={activeImage}
                  alt={item.title}
                  fill
                  className="img-fluid rounded-3"
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              
              {/* Navigation Arrows */}
              {item.images.length > 1 && (
                <>
                  <button 
                    className="position-absolute top-50 start-0 translate-middle-y btn btn-dark rounded-circle p-2 ms-3"
                    onClick={handlePrevious}
                    style={{ zIndex: 10 }}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button 
                    className="position-absolute top-50 end-0 translate-middle-y btn btn-dark rounded-circle p-2 me-3"
                    onClick={handleNext}
                    style={{ zIndex: 10 }}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Carousel */}
            {item.images.length > 1 && (
              <div className="d-flex justify-content-center gap-2 my-3 flex-wrap">
                {item.images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'relative',
                      width: '80px',
                      height: '60px',
                      cursor: 'pointer',
                      opacity: image === activeImage ? 1 : 0.6,
                      border: image === activeImage ? '3px solid #ffc107' : '1px solid #666',
                      borderRadius: '5px',
                      overflow: 'hidden'
                    }}
                    onClick={() => handleThumbnailClick(image)}
                  >
                    <Image
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Item Details */}
            <div className="mt-4">
              <div className="row mb-3">
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong><i className="fas fa-tag me-2"></i>Category:</strong> {item.category}
                  </p>
                  {item.type && (
                    <p className="mb-1">
                      <strong><i className="fas fa-calendar-check me-2"></i>Event Type:</strong> {item.type}
                    </p>
                  )}
                </div>
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong><i className="far fa-calendar-alt me-2"></i>Date:</strong> {item.date}
                  </p>
                  <p className="mb-1">
                    <strong><i className="fas fa-images me-2"></i>Total Photos:</strong> {item.images.length}
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary bg-opacity-10 p-3 rounded-3">
                <p className="lead mb-0">{item.description}</p>
              </div>
            </div>
          </div>
          
          <div className="modal-footer border-secondary">
            <button 
              className="btn btn-outline-light"
              onClick={onClose}
            >
              Close
            </button>
            <button 
              className="btn btn-warning"
              onClick={() => window.open(activeImage, '_blank')}
            >
              <i className="fas fa-download me-2"></i> Download Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}