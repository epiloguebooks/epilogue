import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to quiz page with the book title in URL params
      navigate(`/quiz?book=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Find a Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter book title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            width: "300px",
            marginRight: "0.5rem",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
