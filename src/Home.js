// src/Home.js
import React from "react";

const popularQuizzes = [
  {
    title: "The Women",
    cover: "https://covers.openlibrary.org/b/id/12345-M.jpg",
  },
  {
    title: "Twilight",
    cover: "https://covers.openlibrary.org/b/id/67890-M.jpg",
  },
  // Add more quiz titles here
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold mb-4">Epilogue</h1>
        <p className="text-xl text-gray-700 mb-8">
          Dive into stories. Test your knowledge. Connect with readers.
        </p>
        <a
          href="/quizzes"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg"
        >
          Take a Quiz
        </a>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Quizzes</h3>
          <p>Challenge yourself with fun quizzes on your favorite books.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Community</h3>
          <p>Share reviews, discuss stories, and make friends who love reading.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Leaderboards & Rewards</h3>
          <p>Earn points, climb the ranks, and celebrate your book knowledge.</p>
        </div>
      </section>

      {/* Popular Quizzes */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold mb-6 text-center">Popular Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {popularQuizzes.map(({ title, cover }) => (
            <a
              key={title}
              href={`/quiz?book=${encodeURIComponent(title)}`}
              className="block border rounded shadow hover:shadow-lg transition p-4"
            >
              <img
                src={cover}
                alt={`${title} cover`}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">{title}</h3>
              <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
                Take Quiz
              </button>
            </a>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center max-w-xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-left text-lg">
          <li>Sign up or log in</li>
          <li>Choose a book quiz</li>
          <li>Earn points and join the community</li>
        </ol>
      </section>
    </div>
  );
}
