'use client';

import Image from 'next/image';

export default function EventsGallery({ events, onEventClick }) {
  if (events.length === 0) {
    return (
      <div className="row">
        <div className="col-12 text-center text-muted py-5">
          <p>No events found matching your criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="eventsGallery">
      {events.map((event) => (
        <div key={event.id} className="col">
          <div 
            className="card h-100 shadow-sm rounded-3 hover-shadow"
            style={{ cursor: 'pointer' }}
            onClick={() => onEventClick(event)}
          >
            <div style={{ position: 'relative', height: '250px' }}>
              <Image
                src={event.images[0]}
                alt={event.title}
                fill
                className="card-img-top rounded-top-3"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">{event.title}</h5>
              <p className="card-text text-secondary">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}