import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Epilogue</h1>
      <p>Welcome to your book-loving community.</p>
      <Link to="/quiz">
        <button
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Take a Quiz
        </button>
      </Link>
    </div>
  );
}
