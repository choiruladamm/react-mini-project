/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [quizs, setQuizs] = useState([]);

  // load data json
  useEffect(() => {
    fetch("quiz.json")
      .then((res) => res.json())
      .then((data) => {
        setQuizs(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>react bootstrap</h1>
    </>
  );
};

export default App;
