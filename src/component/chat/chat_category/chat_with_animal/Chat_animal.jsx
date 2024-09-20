import React, { useEffect, useMemo, useRef, useState } from "react";
import { chat_Question } from "./api";

const Chat_animal = () => {
  //   const chat_question = useMemo(() => chat_Question, []);
  const [chat, setChat] = useState(chat_Question);
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);
  const [showFinalResult, setShowFinalResult] = useState(false);

  const [error, setError] = useState("");
  const handleIncrement = (value) => {
    if (!inputValue) {
      setError("Require");
    } else {
      setError("");
      setNumber(number + value);
      console.log("answer of question:", (chat[number].answer = inputValue));
      console.log(chat[number]);
      setInputValue("");
      console.log(number);
      setResult([...result, chat[number]]);
    }
  };

  const handleSubmit = (value) => {
    console.log(chat);
    setShowFinalResult(true);
    chat[number].answer = inputValue;
    console.log(chat[number]);
    console.log("number", number);
    console.log("chat length", chat.length);
    setResult([...result, chat[number]]);
  };

  const handleFinalResultBack = () => {
    setShowFinalResult(false);
    setNumber(0);
  };

  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  useEffect(() => {
    handleFocus();
  });

  return (
    <>
      <div>
        <div>Chat with my AI</div>
        <div className="main_chat_field">
          <div className="question_field_area">
            <div className="question_area">
              <div>Question id: {chat[number].id}</div>
              <div style={{ fontSize: "20px" }}> {chat[number].question}</div>
            </div>
            <div className="answer_area">
              {result &&
                result.map((item) => {
                  return (
                    <>
                      <div style={{ display: "grid" }}>
                        <div className="question">{item.question}</div>
                        <div className="answer">{item.answer}</div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <div style={{ margin: "5px", color: "red", fontWeight: "600" }}>
            {error ? error : null}
          </div>
          <div className="input_main_field">
            <div className="chat_input_field">
              <input
                ref={inputRef}
                type="text"
                placeholder={chat[number].question}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <div>
              {chat[number].increment ? (
                <div>
                  <button
                    className="button-9"
                    onClick={() => handleIncrement(chat[number].increment)}
                  >
                    Next
                  </button>
                </div>
              ) : (
                <button
                  className="button-9"
                  onClick={() => handleSubmit(chat[number].increment)}
                >
                  {showFinalResult ? "Submit" : "Next"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat_animal;
