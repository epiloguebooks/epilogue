import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#222",
        color: "white",
        display: "flex",
        gap: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/search" style={{ color: "white", textDecoration: "none" }}>
        Search
      </Link>
      <Link to="/quiz" style={{ color: "white", textDecoration: "none" }}>
        Quizzes
      </Link>
    </nav>
  );
}
