import React, { useState } from "react";

const questions = [
  {
    question: "What is the name of the protagonist in *The Women*?",
    options: ["Frances 'Frankie' McGrath", "Lillian Layton", "Claire Hannah", "Evelyn Brooks"],
    answer: "Frances 'Frankie' McGrath"
  },
  {
    question: "What inspires Frankie to join the Army Nurse Corps?",
    options: ["Her brother's death", "A nursing scholarship", "A TV advertisement", "A dare from her friend"],
    answer: "Her brother's death"
  },
  {
    question: "In which war is the novel primarily set?",
    options: ["World War II", "Korean War", "Vietnam War", "Gulf War"],
    answer: "Vietnam War"
  },
  {
    question: "Where does Frankie first get stationed?",
    options: ["Saigon", "Guam", "Da Nang", "Honolulu"],
    answer: "Da Nang"
  },
  {
    question: "What is a major theme in *The Women*?",
    options: ["Alien invasions", "Supernatural powers", "Gender roles and injustice", "Financial fraud"],
    answer: "Gender roles and injustice"
  },
  {
    question: "What kind of work does Frankie do in Vietnam?",
    options: ["Combat soldier", "Radio operator", "Nurse", "Translator"],
    answer: "Nurse"
  },
  {
    question: "How does the public treat Frankie when she returns home?",
    options: ["With pride and honor", "With confusion and silence", "As a war hero", "Like a celebrity"],
    answer: "With confusion and silence"
  },
  {
    question: "What happens to Frankie's close friends in the novel?",
    options: ["They open a business", "They all survive and thrive", "They struggle or die from war trauma", "They forget about her"],
    answer: "They struggle or die from war trauma"
  },
  {
    question: "What does Frankie struggle with most after the war?",
    options: ["Memory loss", "Physical injuries", "Finding her family", "Mental health and reintegration"],
    answer: "Mental health and reintegration"
  },
  {
    question: "What is the message Kristin Hannah emphasizes through *The Women*?",
    options: ["War is necessary", "History forgets women heroes", "Men always lead best", "Money brings happiness"],
    answer: "History forgets women heroes"
  }
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {showScore ? (
        <h2>You scored {score} out of {questions.length}!</h2>
      ) : (
        <div>
          <h3>Question {current + 1}:</h3>
          <p>{questions[current].question}</p>
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem 1rem" }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
