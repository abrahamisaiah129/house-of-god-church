"use client";

import Image from "next/image";

export default function GalleryGrid({ images, onClick }) {
  return (
    <div className="row g-4">
      {images.map((src, i) => (
        <div key={i} className="col-6 col-md-4 col-lg-3">
          <div
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => onClick(i)}
          >
            <Image
              src={src}
              alt={`Gallery ${i + 1}`}
              width={400}
              height={300}
              className="w-100 h-100 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
