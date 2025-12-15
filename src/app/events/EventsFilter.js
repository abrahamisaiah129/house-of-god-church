'use client';

import { useState } from 'react';

export default function EventsFilter({ months, years, eventTypes, onFilter }) {
  const [search, setSearch] = useState('');
  const [eventType, setEventType] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    applyFilters({ search: e.target.value, eventType, month, year });
  };

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
    applyFilters({ search, eventType: e.target.value, month, year });
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    applyFilters({ search, eventType, month: e.target.value, year });
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    applyFilters({ search, eventType, month, year: e.target.value });
  };

  const applyFilters = (filters) => {
    onFilter(filters);
  };

  const clearFilters = () => {
    setSearch('');
    setEventType('');
    setMonth('');
    setYear('');
    onFilter({ search: '', eventType: '', month: '', year: '' });
  };

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-5">
      <div className="position-relative flex-grow-1 w-100 w-md-auto">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search events..."
          className="form-control rounded-pill ps-4 pe-5"
        />
        <i className="fas fa-search text-muted position-absolute top-50 end-0 translate-middle-y me-3"></i>
      </div>
      
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
      
      <select 
        value={eventType} 
        onChange={handleEventTypeChange}
        className="form-select w-100 w-md-auto rounded-pill"
      >
        <option value="">All Events</option>
        {eventTypes.map((type) => (
          <option key={type} value={type}>
            {type}
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