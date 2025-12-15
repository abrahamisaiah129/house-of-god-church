'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function EventModal({ event, onClose }) {
  const [activeImage, setActiveImage] = useState(event.images[0]);

  const handleThumbnailClick = (image) => {
    setActiveImage(image);
  };

  return (
    <div 
      className="modal fade show"
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      tabIndex="-1"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title fw-bold text-dark">{event.title}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          
          <div className="modal-body text-center">
            <div style={{ position: 'relative', height: '300px', marginBottom: '1rem' }}>
              <Image
                src={activeImage}
                alt={event.title}
                fill
                className="img-fluid rounded-3"
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
            </div>

            <div className="d-flex justify-content-center gap-3 my-3 flex-wrap">
              {event.images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    width: '100px',
                    height: '60px',
                    cursor: 'pointer',
                    opacity: image === activeImage ? 1 : 0.7,
                    border: image === activeImage ? '2px solid #ffc107' : 'none'
                  }}
                  onClick={() => handleThumbnailClick(image)}
                  className="rounded-3 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${event.title} ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100px"
                  />
                </div>
              ))}
            </div>

            <p className="text-muted small mb-1">
              <strong>Event Type:</strong> {event.type}
            </p>
            <p className="text-muted small mb-3">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="lead">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}