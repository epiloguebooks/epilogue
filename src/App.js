// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import QuizList from './QuizList';
import Quiz from './Quiz';
import NavBar from './NavBar';
import Auth from './Auth'; // 👈 Add this import

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/auth" element={<Auth />} /> {/* 👈 New Auth route */}
      </Routes>
    </Router>
  );
}

export default App;
