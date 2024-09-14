import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { class1_level1 } from "./level1json";

const Level1 = () => {
  const [questions, setQuestion] = useState(class1_level1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);

  const nav = useNavigate();
  console.log("score", score, currentQuestion);
  // console.log("question length", questions.length);
  // console.log("current", currentQuestion);
  const handleSubmit = (ans) => {
    if (ans === answer) {
      setScore(score + 1);
    }

    setCurrentQuestion((p) => p + 1);
  };
  const handleSubmitTest = (ans) => {
    if (ans === answer) {
      setScore(score + 1);
    }
    setShowScore(true);
  };
  return (
    <div>
      <div>
        <button onClick={() => nav("/class1/english")} className="back">
          Back
        </button>
        {showScore ? (
          score
        ) : (
          <div key={questions.id}>
            <div>{questions[currentQuestion].question}</div>
            <div>
              {questions[currentQuestion].Image ? (
                <div>
                  <img src={questions[currentQuestion].Image} alt="question " />
                </div>
              ) : null}
            </div>
            {questions[currentQuestion].options.map((item) => {
              return (
                <>
                  <button onClick={() => setAnswer(item)}>{item}</button>
                </>
              );
            })}

            <div>
              {currentQuestion === 0 ? null : (
                <button onClick={() => setCurrentQuestion((p) => p - 1)}>
                  Previous
                </button>
              )}
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={() =>
                    handleSubmitTest(questions[currentQuestion].answer)
                  }
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleSubmit(questions[currentQuestion].answer)
                  }
                >
                  Next
                </button>
              )}
            </div>
          </div>
        )}
        {/* <div>{questions[currentQuestion].question}</div>
        <div>
          {questions[currentQuestion].options.map((item) => {
            return (
              <>
                <button onClick={() => setAnswer(item)}>{item}</button>
              </>
            );
          })}
        </div>

        <button onClick={() => setCurrentQuestion((p) => p - 1)}>
          Previous
        </button>
        <button onClick={handleSubmit(questions[currentQuestion].answer)}>
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Level1;
