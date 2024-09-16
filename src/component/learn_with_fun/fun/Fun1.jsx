import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Fun1 = (props) => {
  const [answers, setAnswer] = useState({});
  const [toggle, setToggel] = useState(true);
  const handleAOption = (user_answer) => {
    const answer = {};
    if (user_answer !== props.correct) {
      answer.result = "Not Correct";
    } else {
      answer.result = "Correct";
    }
    setAnswer(answer);
  };
  const handleHide = () => {
    setToggel(!toggle);
  };
  return (
    <div>
      <div className="fun_box_main">
   
        <div className="fun_box">
          <button onClick={handleHide} className="button-63">
            {toggle ? "Hide Question" : "Show Question"}
          </button>
          {toggle && (
            <div className="fun_box1">
              <div className="fun_question_box">
                <span className="Fun_question">{props.question}</span>
                <div className="Fun_button">
                  <div>
                    <button
                      className="button-61 "
                      onClick={() => handleAOption(props.option1)}
                    >
                      {props.option1}
                    </button>
                  </div>
                  <div>
                    <button
                      className="button-61 "
                      onClick={() => handleAOption(props.option2)}
                    >
                      {props.option2}
                    </button>
                  </div>
                  <div>
                    <button
                      className="button-61 "
                      onClick={() => handleAOption(props.option3)}
                    >
                      {props.option3}
                    </button>
                  </div>
                  <div>
                    <button
                      className="button-61 "
                      onClick={() => handleAOption(props.option4)}
                    >
                      {props.option4}
                    </button>
                  </div>
                </div>
                <div>
                  {answers.result ? (
                    <div className="fun_answer">
                      Answer Status : {answers.result}
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <img src={props.image} alt={props.alt} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fun1;
