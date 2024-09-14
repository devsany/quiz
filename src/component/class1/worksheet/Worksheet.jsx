import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Worksheet = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });
  return (
    <div>
      <h2
        style={{
          margin: "10px",
          letterSpacing: "2px",
          color: "#aaa",
        }}
      >
        Work Sheet
      </h2>
      <div
        style={{ display: "flex", border: "1px solid #ccc", margin: "10px" }}
      >
        <div ref={componentRef}>
          <img
            src="https://cdn.education.com/worksheet-image/502799/letter-quiz-the-alphabet-first-2024-07-23.gif"
            alt=""
          />
        </div>
        <div
          style={{
            fontFamily:
              " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          <span>Question : (Read)</span> <br />
          <br />
          Match upper and lower case letters in this great alphabet review quiz.
          In this two-page worksheet, young learners get to practice their
          letter recognition skills, as they choose the corresponding upper or
          lower case letter in each row. Students mark their choice by filling
          in the bubble for each of the 10 questions. This is great for building
          early literacy skills, particularly for preschoolers, kindgarteners
          and first-graders.
          <br />
          <br />
          <button className="button-37" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>

      <div
        style={{ display: "flex", border: "1px solid #ccc", margin: "10px" }}
      >
        <div ref={componentRef}>
          <img
            src="https://cdn.education.com/worksheet-image/124716/identifying-opposites-happy-full-comprehension-2023-01-24.png"
            alt=""
          />
        </div>
        <div
          style={{
            fontFamily:
              " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          <span>Question : Identifying Opposites: From Happy to Full</span>{" "}
          <br />
          <br />
          What's the opposite of a hot fire? The antonym of hot might be the
          coolest word of all. In this worksheet your child will need to look at
          the list of words, and then decide what word in right hand column is
          the opposite of one on the left. He will then need to draw a line from
          each word to its antonym. After completing this worksheet your child
          will have practiced her spelling and vocabulary skills, as well as
          learned about the important concept of antonyms.
          <br />
          <br />
          <button className="button-37" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
      <div
        style={{ display: "flex", border: "1px solid #ccc", margin: "10px" }}
      >
        <div ref={componentRef}>
          <img
            src="https://cdn.education.com/worksheet-image/179833/fill-missing-alphabet-letters-kindergarten-2023-01-25.gif"
            alt=""
          />
        </div>
        <div
          style={{
            fontFamily:
              " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          <span>Question : Fill in Missing Alphabet Letters</span> <br />
          <br />
          Feelin' lucky? This fill-in missing alphabet letters puzzle is a great
          way for your preschooler or kindergartener to practice the alphabet
          sequence without it feeling like work. In this St. Patrick's
          Day-themed puzzle, students will let their letter knowledge shine as
          they identify the missing letter and write it in on each blank coin.
          Use as part of your holiday celebrations, or any time your child needs
          a boost.
          <br />
          <br />
          <button className="button-37" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Worksheet;
