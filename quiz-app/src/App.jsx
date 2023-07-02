/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

const App = () => {
  // all quiz
  const [quizs, setQuizs] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(false);

  // displaying controlling states
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setshowResult] = useState(false);

  // load data json
  useEffect(() => {
    fetch("quiz.json")
      .then((res) => res.json())
      .then((data) => {
        setQuizs(data);
        console.log(data);
      });
  }, []);

  // set a single question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuestion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  // start quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  // check answer
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      if (selected === question.answer) {
        event.target.classList.add("bg-succes");
        setMarks(marks + 5);
      } else {
        event.target.classList.add("bg-danger");
      }
    }
  };

  // next question
  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");

    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-danger");
    rightBtn?.classList.remove("bg-success");
    setQuestionIndex(questionIndex + 1);
  };

  // show result question
  const showTheResult = () => {
    setshowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  // start over
  const startOver = () => {
    setShowStart(false);
    setshowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-danger");
    rightBtn?.classList.remove("bg-success");
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
                {/* question */}
                <div className="d-flex justify-content-between gap-md-3">
                  <h5 className="mb-2 fs-normal lh-base text-white">
                    {question?.question}
                  </h5>
                  <h5
                    style={{
                      color: "#60d600",
                      width: "100px",
                      textAlign: "right",
                    }}
                  >
                    {quizs.indexOf(question) + 1} / {quizs?.length}
                  </h5>
                </div>

                {/* list answer */}
                <div>
                  {question?.options?.map((item, index) => (
                    <button
                      key={index}
                      className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${
                        correctAnswer === item && "bg-success"
                      }`}
                      onClick={(event) => checkAnswer(event, item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* button next question */}
                {questionIndex + 1 !== quizs.length ? (
                  <button
                    className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                    onClick={nextQuestion}
                    disabled={!selectedAnswer}
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                    onClick={showTheResult}
                    disabled={!selectedAnswer}
                  >
                    Show Result
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* result question */}
      <section
        className="bg-dark text-white"
        style={{ display: `${showResult ? "block" : "none"}` }}
      >
        <div className="container">
          <div className="row vh-100 align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className={`text-light text-center p-5 rounded ${
                  marks > (quizs.length * 5) / 2 ? "bg-success" : "bg-danger"
                }`}
              >
                <h1 className="mb-2 fw-bold">
                  {marks > (quizs.length * 5) / 2 ? "Awesome!" : "Oops!"}
                </h1>
                <h3 className="mb-3 fw-bold">
                  Your score is {marks} out of {quizs.length * 5}
                </h3>

                <button
                  onClick={startOver}
                  className="btn py-2 px-4 btn-light fw-bold d-inline"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
