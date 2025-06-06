import React from "react";
import { useLocation } from "react-router-dom";

export default function Quiz() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const book = params.get("book") || "No book selected";

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Quiz for: {book}</h2>
      <p>This is where the quiz content will appear.</p>
    </div>
  );
}
