import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      {/* Navbar */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        paddingBottom: "1rem",
        marginBottom: "2rem"
      }}>
        <h1 style={{ margin: 0 }}>epilogue</h1>
        <nav>
          <a href="#" style={{ marginLeft: "1rem", textDecoration: "none", color: "#333" }}>Home</a>
          <a href="#" style={{ marginLeft: "1rem", textDecoration: "none", color: "#333" }}>Quizzes</a>
          <a href="#" style={{ marginLeft: "1rem", textDecoration: "none", color: "#333" }}>Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          “For book lovers who never want the story to end.”
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
          Take quizzes, earn points, and connect through stories.
        </p>
        <button style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Take a Quiz
        </button>
      </main>
    </div>
  );
}
