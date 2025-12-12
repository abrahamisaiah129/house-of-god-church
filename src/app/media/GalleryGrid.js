'use client';

import Image from 'next/image';

export default function GalleryGrid({ items, onItemClick }) {
  if (items.length === 0) {
    return (
      <div className="row">
        <div className="col-12 text-center text-muted py-5">
          <p>No gallery items found matching your criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="galleryGrid">
      {items.map((item) => (
        <div key={item.id} className="col">
          <div 
            className="card h-100 shadow-sm rounded-3 hover-shadow gallery-card"
            style={{ cursor: 'pointer' }}
            onClick={() => onItemClick(item)}
          >
            <div style={{ position: 'relative', height: '250px' }}>
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="card-img-top rounded-top-3"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="position-absolute top-0 start-0 m-2">
                <span className="badge bg-warning text-dark">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">{item.title}</h5>
              <p className="card-text text-secondary">{item.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="far fa-calendar-alt me-1"></i>
                  {item.date}
                </small>
                <small className="text-muted">
                  <i className="fas fa-images me-1"></i>
                  {item.images.length} photos
                </small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}