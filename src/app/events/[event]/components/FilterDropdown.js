"use client";
export default function FilterDropdown({ label, options, value, onChange }) {
  return (
    <div className="text-center">
      <label className="block text-lg font-semibold mb-2 text-warning">
        {label}
      </label>
      <select
        className="form-select border-2 border-warning rounded-lg px-5 py-3 text-black bg-white shadow-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
