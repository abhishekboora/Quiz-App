import { useState, useEffect } from 'react'
import { questions } from '../data/questions'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const cardColors = [
    'bg-gradient-to-r from-blue-500 to-indigo-500',
    'bg-gradient-to-r from-green-500 to-teal-500',
    'bg-gradient-to-r from-red-500 to-pink-500',
    'bg-gradient-to-r from-purple-500 to-violet-500',
    'bg-gradient-to-r from-yellow-500 to-orange-500',
    'bg-gradient-to-r from-cyan-500 to-blue-500',
    'bg-gradient-to-r from-pink-500 to-rose-500',
    'bg-gradient-to-r from-emerald-500 to-lime-500',
    'bg-gradient-to-r from-indigo-500 to-purple-500',
    'bg-gradient-to-r from-orange-500 to-red-500',
  ]

  useEffect(() => {
    if (timeLeft === 0 && !showResult && !isSubmitted) {
      handleSubmit()
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft, showResult, isSubmitted])

  const handleAnswerChange = (option) => {
    setSelectedOption(option)
  }

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1)
    }
    setIsSubmitted(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setTimeLeft(10)
      setSelectedOption(null)
      setIsSubmitted(false)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setTimeLeft(10)
    setSelectedOption(null)
    setIsSubmitted(false)
  }

  const currentCardColor = cardColors[currentQuestion % cardColors.length]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-emerald-600 animate-bgShift flex items-center justify-center p-4">
      <div className={`rounded-lg shadow-lg p-6 max-w-md w-full ${currentCardColor} animate-cardFade animate-gradientShift animate-cardScale text-white`}>
        {showResult ? (
          <div className="text-center animate-questionFade">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-lg mb-4">
              Your Score: {score} out of {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-4 animate-questionFade">
              <h2 className="text-xl font-semibold">
                Question {currentQuestion + 1}/{questions.length}
              </h2>
              <p className="text-lg">Time: {timeLeft}s</p>
            </div>
            <p className="text-lg mb-4 animate-questionFade">{questions[currentQuestion].question}</p>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-3 rounded-lg border transition-all duration-500 animate-slideIn animation-delay-${index * 100} ${
                    isSubmitted
                      ? option === questions[currentQuestion].answer
                        ? 'bg-green-100 border-green-500 animate-pulse text-black'
                        : selectedOption === option && option !== questions[currentQuestion].answer
                        ? 'bg-red-100 border-red-500 animate-shake text-black'
                        : 'bg-white bg-opacity-20 border-gray-300 text-white'
                      : 'bg-white bg-opacity-20 border-gray-300 hover:bg-opacity-30 text-white'
                  } cursor-pointer`}
                >
                  <input
                    type="checkbox"
                    checked={selectedOption === option}
                    onChange={() => handleAnswerChange(option)}
                    disabled={isSubmitted}
                    className="mr-2 h-5 w-5 text-blue-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className={`mt-4 px-4 py-2 rounded text-white transition duration-300 transform hover:scale-105 ${
                  selectedOption === null
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz