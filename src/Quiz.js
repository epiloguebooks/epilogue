// src/Quiz.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const quizzes = {
  "The Women": [
    {
      question: "Who is the main character in *The Women*?",
      options: ["Frances McGrath", "Frankie McGrath", "Franny Malone", "Faye Montgomery"],
      answer: "Frankie McGrath"
    },
    {
      question: "What is Frankie’s profession?",
      options: ["Writer", "Nurse", "Lawyer", "Soldier"],
      answer: "Nurse"
    },
    {
      question: "In what war is *The Women* set?",
      options: ["World War II", "Vietnam War", "Korean War", "Gulf War"],
      answer: "Vietnam War"
    },
    {
      question: "What major theme does the book explore?",
      options: ["Time travel", "The role of women in war", "Space exploration", "Economic collapse"],
      answer: "The role of women in war"
    },
    {
      question: "What branch of the military does Frankie serve in?",
      options: ["Air Force", "Army", "Navy", "Marines"],
      answer: "Army"
    },
    {
      question: "Who is Frankie’s brother?",
      options: ["Billy", "Thomas", "Mike", "Jamie"],
      answer: "Billy"
    },
    {
      question: "What challenges does Frankie face after returning home?",
      options: ["Physical illness", "Legal trouble", "Lack of recognition", "Fame"],
      answer: "Lack of recognition"
    },
    {
      question: "Which real-world issue does *The Women* highlight?",
      options: ["Climate change", "Post-traumatic stress disorder", "Digital addiction", "Artificial intelligence"],
      answer: "Post-traumatic stress disorder"
    },
    {
      question: "Where is Frankie from originally?",
      options: ["New York", "California", "Texas", "Alabama"],
      answer: "California"
    },
    {
      question: "What genre best describes *The Women*?",
      options: ["Historical fiction", "Science fiction", "Mystery", "Romance"],
      answer: "Historical fiction"
    }
  ],
  "Twilight": [
    {
      question: "Who is the author of *Twilight*?",
      options: ["Suzanne Collins", "Veronica Roth", "Stephenie Meyer", "Cassandra Clare"],
      answer: "Stephenie Meyer"
    },
    {
      question: "What supernatural creature is Edward Cullen?",
      options: ["Vampire", "Werewolf", "Witch", "Ghost"],
      answer: "Vampire"
    },
    {
      question: "What is Bella Swan’s hometown?",
      options: ["Phoenix", "Forks", "Portland", "Salem"],
      answer: "Forks"
    },
    {
      question: "Which member of the Cullen family can see the future?",
      options: ["Emmett", "Jasper", "Rosalie", "Alice"],
      answer: "Alice"
    },
    {
      question: "Who is Jacob Black?",
      options: ["A teacher", "A werewolf", "A vampire hunter", "Bella’s cousin"],
      answer: "A werewolf"
    },
    {
      question: "What ability does Edward have?",
      options: ["Telepathy", "Invisibility", "Super speed", "Fire control"],
      answer: "Telepathy"
    },
    {
      question: "What event brings Bella and Edward closer at school?",
      options: ["Science project", "School dance", "Biology class", "Art competition"],
      answer: "Biology class"
    },
    {
      question: "What does Bella discover about the Cullens?",
      options: ["They are spies", "They are witches", "They are vampires", "They are aliens"],
      answer: "They are vampires"
    },
    {
      question: "Who tries to attack Bella at the end of the first book?",
      options: ["Victoria", "James", "Laurent", "Charlie"],
      answer: "James"
    },
    {
      question: "What genre is *Twilight*?",
      options: ["Biography", "Historical fiction", "Paranormal romance", "Comedy"],
      answer: "Paranormal romance"
    }
  ]
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Quiz() {
  const query = useQuery();
  const book = query.get('book');
  const questions = quizzes[book];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  if (!questions) {
    return (
      <div className="p-6 text-center text-red-500">
        No quiz found for <strong>{book}</strong>. Please try another.
      </div>
    );
  }

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      {showScore ? (
        <h2 className="text-xl font-bold">You scored {score} out of {questions.length}!</h2>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Question {currentQuestion + 1}/{questions.length}
          </h3>
          <p className="mb-4">{questions[currentQuestion].question}</p>
          <div className="grid gap-2">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
