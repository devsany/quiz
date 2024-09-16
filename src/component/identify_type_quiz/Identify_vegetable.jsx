import React from "react";
import Fun1 from "../learn_with_fun/fun/Fun1";
import { NavLink } from "react-router-dom";

const Identify_vegetable = () => {
  return (
    <div>
      <NavLink to="/learn_with_fun" className="button-23">
        Back
      </NavLink>
      <div className="quiz_box">
        <Fun1
          question="Identify the picture"
          option1="Carrot"
          option2="Cabbage"
          option3="Radis"
          option4="Onion"
          image="https://www.shutterstock.com/image-vector/carrot-vegetable-cartoon-vector-icon-600nw-2163817501.jpg"
          alt="vegetable pic"
          correct="Carrot"
        />
        <Fun1
          question="Identify the picture"
          option1="Carrot"
          option2="Cabbage"
          option3="Brinjal"
          option4="Onion"
          image="https://t4.ftcdn.net/jpg/05/66/13/51/360_F_566135123_N0jTzPXNCguqZ2BkIROWBq6hNMXKKozd.jpg"
          alt="vegetable pic"
          correct="Brinjal"
        />
        <Fun1
          question="Identify the picture"
          option1="Carrot"
          option2="Cabbage"
          option3="Brinjal"
          option4="Onion"
          image="data:image/jpeg;base64,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"
          alt="vegetable pic"
          correct="Cabbage"
        />
        <Fun1
          question="Identify the picture"
          option1="Carrot"
          option2="Cabbage"
          option3="Brinjal"
          option4="Onion"
          image="https://img.freepik.com/free-vector/cartoon-red-shallot-isolated_1308-128292.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726358400&semt=ais_hybrid"
          alt="vegetable pic"
          correct="Onion"
        />
        <Fun1
          question="Identify the picture"
          option1="Tomato"
          option2="Cabbage"
          option3="Brinjal"
          option4="Onion"
          image="https://img.freepik.com/premium-vector/slice-whole-tomato-cartoon-vector-illustration-red-tomatoes-flat-icon-outline_385450-1189.jpg"
          alt="vegetable pic"
          correct="Tomato"
        />

        <Fun1
          question="Identify the picture"
          option1="Tomato"
          option2="Corn"
          option3="Brinjal"
          option4="Onion"
          image="https://img.freepik.com/premium-photo/cheerful-corn-cartoon-character-transparent-background-ai_894067-6262.jpg"
          alt="vegetable pic"
          correct="Corn"
        />

        <Fun1
          question="Identify the picture"
          option1="Tomato"
          option2="Corn"
          option3="Potato"
          option4="Onion"
          image="https://t3.ftcdn.net/jpg/03/03/53/98/360_F_303539888_ytGLbSURajuu3xKACzvqee0LbZi5U27I.jpg"
          alt="vegetable pic"
          correct="Potato"
        />

        <Fun1
          question="Identify the picture"
          option1="Tomato"
          option2="Corn"
          option3="Chilli"
          option4="Onion"
          image="https://t3.ftcdn.net/jpg/02/87/74/84/360_F_287748402_iSkqX58yfX6FTRsefDWhZ06GNRoS1dyZ.jpg"
          alt="vegetable pic"
          correct="Chilli"
        />

        <Fun1
          question="Identify the picture"
          option1="Tomato"
          option2="cabbage"
          option3="Radish"
          option4="Onion"
          image="https://t3.ftcdn.net/jpg/00/95/29/74/360_F_95297409_ZU1eHKBkUA2Ap9f1Mv4ZGkIkMpEO6RfW.jpg"
          alt="vegetable pic"
          correct="Chilli"
        />

        <Fun1
          question="Identify the picture"
          option1="Tomato"
          option2="cabbage"
          option3="Lady Fingure"
          option4="Onion"
          image="https://static.vecteezy.com/system/resources/previews/013/809/324/non_2x/ladyfinger-icon-green-vegetable-vector.jpg"
          alt="vegetable pic"
          correct="Lady Fingure"
        />
      </div>
    </div>
  );
};

export default Identify_vegetable;
