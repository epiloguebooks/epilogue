import React, { useState } from "react";

const sampleQuestions = [
  {
    question: "Who is the author of *The Women*?",
    options: ["Kristin Hannah", "J.K. Rowling", "Jane Austen", "Toni Morrison"],
    answer: "Kristin Hannah",
  },
  {
    question: "What is the main theme of *The Women*?",
    options: ["Friendship and family", "Magic and adventure", "Crime mystery", "Sci-fi"],
    answer: "Friendship and family",
  },
  {
    question: "Where is *The Women* primarily set?",
    options: ["Seattle", "New York", "Paris", "London"],
    answer: "Seattle",
  },
];

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = sampleQuestions[currentIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) return alert("Please select an answer.");

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    if (currentIndex + 1 < sampleQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h2>Quiz Complete!</h2>
        <p>
          Your score: {score} out of {sampleQuestions.length}
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>{currentQuestion.question}</h2>
      <form onSubmit={handleSubmit}>
        {currentQuestion.options.map((option) => (
          <div key={option} style={{ marginBottom: "0.5rem" }}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              {" "}{option}
            </label>
          </div>
        ))}
        <button type="submit" style={{ marginTop: "1rem" }}>
          {currentIndex + 1 === sampleQuestions.length ? "Finish" : "Next"}
        </button>
      </form>
    </div>
  );
}
