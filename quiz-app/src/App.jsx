/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

const App = () => {
  // all quiz
  const [quizs, setQuizs] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);

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

  // set a single question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuestion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

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
      <section
        className="bg-dark text-white"
        style={{ display: `${showQuiz ? "block" : "none"}` }}
      >
        <div className="container">
          <div className="row vh-100 align-items-center justify-content-center">
            <div className="col-lg-8">
              <div
                className="card p-4"
                style={{ background: "#3d3d3d", borderColor: "#646464" }}
              >
                <div className="d-flex justify-content-between gap-md-3">
                  <h5 className="mb-2 fs-normal lh-base text-white">{question?.question}</h5>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
