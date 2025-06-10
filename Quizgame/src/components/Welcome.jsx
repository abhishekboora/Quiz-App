import React from 'react'

const Welcome = ({ startQuiz }) => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center animate-fadeIn">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to Quiz App</h1>
        <p className="text-lg mb-6 text-gray-600">
          Test your knowledge with our fun and engaging multiple-choice quiz!
        </p>
        <button
          onClick={startQuiz}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Start Quiz
        </button>
      </div>
    </div>
  )
}

export default Welcome