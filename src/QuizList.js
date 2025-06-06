// src/QuizList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const quizzes = [
  "The Women",
  "Twilight",
  // Add more quiz titles here
];

export default function QuizList() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredQuizzes = quizzes.filter((title) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  const handleQuizSelect = (title) => {
    navigate(`/quiz?book=${encodeURIComponent(title)}`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Find a Quiz</h1>

      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <ul className="grid gap-3">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((title, index) => (
            <li key={index}>
              <button
                onClick={() => handleQuizSelect(title)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                {title}
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No matching quizzes found.</li>
        )}
      </ul>
    </div>
  );
}
