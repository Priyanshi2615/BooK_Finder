import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  const [books, setBooks] = useState([]); // State to store book data
  const [searchTerm, setSearchTerm] = useState(""); // State for user input
  const [filter, setFilter] = useState(""); // State for selected filter
  const [loading, setLoading] = useState(false); // State for loading indicator

  const fetchBooks = async () => {
    if (!filter || !searchTerm) {
      alert("Please select a filter and enter a search term.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?${filter}=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      setBooks(data.docs.slice(0, 10)); // Limit results for display
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
        fetchBooks={fetchBooks}
      />
      <div className="book-list">
     
        {!loading && books.length === 0 && <p>No books found. Try a different query.</p>}
        <div className="card-grid">
          {books.map((book, index) => (
            <Card
              key={index}
              image={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "https://via.placeholder.com/150"
              }
              title={book.title}
              instructor={book.author_name ? book.author_name.join(", ") : "Unknown"}
              lessons={`First published in ${book.first_publish_year || "N/A"}`}
              rating={`Edition Count: ${book.edition_count}`}
              duration=""
              price=""
              discount=""
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default App;
