'use client';

import { useState } from 'react';

export default function GalleryFilter({ months, years, categories, onFilter }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    applyFilters({ 
      search: e.target.value, 
      category, 
      month, 
      year 
    });
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    applyFilters({ 
      search, 
      category: newCategory, 
      month, 
      year 
    });
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    applyFilters({ 
      search, 
      category, 
      month: e.target.value, 
      year 
    });
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    applyFilters({ 
      search, 
      category, 
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
    setMonth('');
    setYear('');
    onFilter({ 
      search: '', 
      category: '', 
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