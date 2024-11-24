import React, { useState } from "react";

const Header = ({ searchTerm, setSearchTerm, filter, setFilter, fetchBooks }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      await fetchBooks(); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>Find Your Favorite Books</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter your search term..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="filter-dropdown"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
          </select>
          <button
            className="search-btn"
            onClick={handleSearch}
            disabled={isLoading} 
          >
            {isLoading ? "Loading..." : "Search"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
