import React from "react";

const popularQuizzes = [
  {
    title: "Twilight",
    cover: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
  },
];

export default function Home() {
  return (
    <div
      className="max-w-5xl mx-auto px-6 py-12 min-h-screen"
      style={{ backgroundColor: "#d7e6d0" }}
    >
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

      {/* Popular Quizzes */}
      <section className="mb-16">
        <h2 className="text-3xl font-serif font-bold mb-6 text-center">Popular Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
          {popularQuizzes.map(({ title, cover }) => (
            <a
              key={title}
              href={`/quiz?book=${encodeURIComponent(title)}`}
              className="block border rounded shadow hover:shadow-lg transition p-4 max-w-xs mx-auto bg-white"
            >
              <img
                src={cover}
                alt={`${title} cover`}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{title}</h3>
              <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded block mx-auto">
                Take Quiz
              </button>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
