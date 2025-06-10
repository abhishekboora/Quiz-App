import { useState } from 'react'
import Quiz from './components/Quiz.jsx'
import Welcome from './components/Welcome.jsx'
import './App.css'

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false)

  const startQuiz = () => {
    setIsQuizStarted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-emerald-600 animate-bgShift">
      {isQuizStarted ? <Quiz /> : <Welcome startQuiz={startQuiz} />}
    </div>
  )
}

export default App