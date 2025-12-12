'use client';

import { useState } from 'react';

export default function GalleryFilter({ months, years, categories, eventTypes, onFilter }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [eventType, setEventType] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    applyFilters({ 
      search: e.target.value, 
      category, 
      eventType: category === "Pastor's Gallery" ? '' : eventType, 
      month, 
      year 
    });
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    // Reset event type when switching to Pastor's Gallery
    if (newCategory === "Pastor's Gallery") {
      setEventType('');
    }
    applyFilters({ 
      search, 
      category: newCategory, 
      eventType: newCategory === "Pastor's Gallery" ? '' : eventType, 
      month, 
      year 
    });
  };

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
    applyFilters({ 
      search, 
      category, 
      eventType: e.target.value, 
      month, 
      year 
    });
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    applyFilters({ 
      search, 
      category, 
      eventType, 
      month: e.target.value, 
      year 
    });
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    applyFilters({ 
      search, 
      category, 
      eventType, 
      month, 
      year: e.target.value 
    });
  };

  const applyFilters = (filters) => {
    onFilter(filters);
  };

  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setEventType('');
    setMonth('');
    setYear('');
    onFilter({ 
      search: '', 
      category: '', 
      eventType: '', 
      month: '', 
      year: '' 
    });
  };

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-5">
      <div className="position-relative grow w-100 w-md-auto">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search gallery..."
          className="form-control rounded-pill ps-4 pe-5"
        />
        <i className="fas fa-search text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
      </div>
      
      <select 
        value={category} 
        onChange={handleCategoryChange}
        className="form-select w-100 w-md-auto rounded-pill"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      
      <select 
        value={eventType} 
        onChange={handleEventTypeChange}
        disabled={category === "Pastor's Gallery"}
        className="form-select w-100 w-md-auto rounded-pill"
      >
        <option value="">All Event Types</option>
        {eventTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      
      <select 
        value={month} 
        onChange={handleMonthChange}
        className="form-select w-100 w-md-auto rounded-pill"
      >
        <option value="">All Months</option>
        {months.map((monthName) => (
          <option key={monthName} value={monthName}>
            {monthName}
          </option>
        ))}
      </select>
      
      <select 
        value={year} 
        onChange={handleYearChange}
        className="form-select w-100 w-md-auto rounded-pill"
      >
        <option value="">All Years</option>
        {years.map((yearVal) => (
          <option key={yearVal} value={yearVal}>
            {yearVal}
          </option>
        ))}
      </select>

      <button 
        onClick={clearFilters}
        className="btn btn-outline-warning rounded-pill px-4"
      >
        Clear
      </button>
    </div>
  );
}