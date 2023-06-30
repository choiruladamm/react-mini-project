/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  // all quiz
  const [quizs, setQuizs] = useState([]);

  // displaying controller
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

  // load data json
  useEffect(() => {
    fetch("quiz.json")
      .then((res) => res.json())
      .then((data) => {
        setQuizs(data);
        console.log(data);
      });
  }, []);

  // start quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  return (
    <>
      {/* welcome page */}
      <section
        className="text-white text-center bg-dark"
        style={{ display: `${showStart ? "block" : "none"}` }}
      >
        <div className="container">
          <div className="row vh-100 align-items-center justify-content-center">
            <div className="col-lg-8">
              <h1 className="fw-bold mb-4">Basic ReactJS Quiz</h1>
              <button
                onClick={startQuiz}
                className="btn bg-light px-4 py-2 text-dark fw-bold"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* quiz page */}
    </>
  );
};

export default App;
