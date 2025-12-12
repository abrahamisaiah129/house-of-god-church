"use client";
export default function Pagination({ current, total, onChange }) {
  return (
    <div className="d-flex justify-content-center mt-10 gap-2 flex-wrap">
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            current === page
              ? "bg-warning text-black shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-warning hover:text-black"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
