// src/Quiz.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const quizzes = {
  "The Women": [
    {
      question: "Who is the main character in *The Women*?",
      options: ["Frances", "Ellie", "Hannah", "Kate"],
      answer: "Frances"
    },
    {
      question: "What war is *The Women* centered around?",
      options: ["WWI", "WWII", "Vietnam War", "Korean War"],
      answer: "Vietnam War"
    },
    {
      question: "What role does Frances play during the war?",
      options: ["Soldier", "Doctor", "Nurse", "Pilot"],
      answer: "Nurse"
    }
  ],
  "Twilight": [
    {
      question: "Who is the author of *Twilight*?",
      options: ["Veronica Roth", "Stephenie Meyer", "Suzanne Collins", "J.K. Rowling"],
      answer: "Stephenie Meyer"
    },
    {
      question: "What is Edward Cullen?",
      options: ["Werewolf", "Vampire", "Wizard", "Human"],
      answer: "Vampire"
    },
    {
      question: "Where is *Twilight* set?",
      options: ["Forks, Washington", "Phoenix, Arizona", "Seattle, Washington", "Portland, Oregon"],
      answer: "Forks, Washington"
    }
  ]
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Quiz() {
  const query = useQuery();
  const bookTitle = query.get("book");

  const questions = quizzes[bookTitle];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  if (!questions) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">No quiz found for "{bookTitle}".</h2>
        <p className="text-gray-600">Please check the title and try again.</p>
      </div>
    );
  }

  const handleAnswer = (choice) => {
    if (choice === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {showResults ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You scored {score} out of {questions.length}!</h2>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-2">{questions[current].question}</h2>
          <div className="grid gap-2">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
