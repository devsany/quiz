import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { class1_level4 } from "./level4json";

const Level4_2 = () => {
  const [questions, setQuestion] = useState(class1_level4);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(90);
  const [finalTimer, setFinalTimer] = useState(0);

  const nav = useNavigate();
  // console.log("score", score, currentQuestion);
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
    setFinalTimer(timer);
    setShowScore(true);
  };
  useEffect(() => {
    const time = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setFinalTimer(timer);
        setShowScore(true);
      }
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [timer]);
  return (
    <div>
      <div>
        <button onClick={() => nav("/class2/english")} className="back">
          Back
        </button>
        {showScore ? (
          <div className="score">
            <div className="score_box">
              <div style={{ fontSize: "25px" }}>Your total Score is</div>
              <div style={{ fontSize: "20px", padding: "1rem" }}>
                {score} {score <= 2 ? "🎆" : "🎇"}
              </div>
              <div style={{ padding: "0rem" }}>
                {score} correct answers out of {questions.length}
              </div>{" "}
              <hr /> You Take {60 - finalTimer}{" "}
              {60 - finalTimer <= 1 ? "Second" : "Seconds"} to complete Test
              <div style={{ marginTop: "7rem", fontSize: "13px" }}>
                {(score / questions.length) * 100} % -- Congratulations
              </div>
              <div style={{ fontSize: "13px" }}>
                {score <= 2
                  ? "Work Hard next time do better"
                  : "You are a spelling champion"}
              </div>
            </div>
          </div>
        ) : (
          <div className="question_field">
            <div className="question_field_content" key={questions.id}>
              <div
                className="button-32"
                style={{ backgroundColor: timer <= 5 ? "orange" : "#fff000" }}
              >
                {timer}
              </div>
              <div className="field_question">
                ({currentQuestion + 1}) {questions[currentQuestion].question}
              </div>
              <div>
                {questions[currentQuestion].Image ? (
                  <div className="question_image">
                    <img
                      src={questions[currentQuestion].Image}
                      alt="question "
                    />
                  </div>
                ) : null}
              </div>
              {questions[currentQuestion].options.map((item) => {
                return (
                  <>
                    <div className="question_option">
                      <button
                        className="button-26"
                        onClick={() => setAnswer(item)}
                      >
                        {item}
                      </button>
                    </div>
                  </>
                );
              })}

              <div>
                {currentQuestion === 0 ? null : (
                  <button
                    className="button-37"
                    onClick={() => setCurrentQuestion((p) => p - 1)}
                  >
                    Previous
                  </button>
                )}
                {currentQuestion === questions.length - 1 ? (
                  <button
                    className="button-62"
                    onClick={() =>
                      handleSubmitTest(questions[currentQuestion].answer)
                    }
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="button-38"
                    onClick={() =>
                      handleSubmit(questions[currentQuestion].answer)
                    }
                  >
                    Next
                  </button>
                )}
              </div>
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

export default Level4_2;
