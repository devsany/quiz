import React from "react";
import Fun1 from "../learn_with_fun/fun/Fun1";
import { NavLink } from "react-router-dom";

const Identify_bodypart = () => {
  return (
    <div>
      <NavLink to="/learn_with_fun" className="button-23">
        Back
      </NavLink>
      <div className="quiz_box">
        <Fun1
          question="Identify the picture"
          option1="Head"
          option2="Hand"
          option3="Leg"
          option4="Nose"
          image="https://www.shutterstock.com/image-vector/human-nose-vector-isolated-on-600nw-2313875103.jpg"
          alt="Body part pic"
          correct="Nose"
        />
        <Fun1
          question="Identify the picture"
          option1="Head"
          option2="Hand"
          option3="Leg"
          option4="Nose"
          image="https://img.freepik.com/free-vector/handsome-boy-with-brown-eyes-black-hair_1308-160536.jpg"
          alt="body part pic"
          correct="Head"
        />
        <Fun1
          question="Identify the picture"
          option1="Head"
          option2="Hand"
          option3="Leg"
          option4="Nose"
          image="https://t4.ftcdn.net/jpg/01/21/94/15/360_F_121941587_8jCD12LfEwmoLKDY2RXuiEdZRxtI5PL4.jpg"
          alt="body part pic"
          correct="Hand"
        />
        <Fun1
          question="Identify the picture"
          option1="Head"
          option2="Hand"
          option3="Leg"
          option4="Nose"
          image="https://static.vecteezy.com/system/resources/previews/009/298/429/original/female-legs-barefoot-side-view-illustration-hand-drawn-cartoon-style-isolated-on-white-vector.jpg"
          alt="body part pic"
          correct="Leg"
        />
        <Fun1
          question="Identify the picture"
          option1="Stomatch"
          option2="Hand"
          option3="Eye"
          option4="Nose"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7syb_EsbOFdttF7AhnT27gPHP8p2gOFCCAg&s"
          alt="body part pic"
          correct="Eye"
        />

        <Fun1
          question="Identify the picture"
          option1="Stomatch"
          option2="Hand"
          option3="Eye"
          option4="Nose"
          image="https://media.istockphoto.com/id/1306468121/vector/stomach-full-of-unhealthy-food-flat-cartoon-illustration.jpg?s=612x612&w=0&k=20&c=LUbtIVlWNd4zuvgxT2e5LeQrS5sL3ByYk1Ct3x3Xen8="
          alt="body part pic"
          correct="Stomatch"
        />

        <Fun1
          question="Identify the picture"
          option1="Hand"
          option2="Eye"
          option3="Fingure"
          option4="Nose"
          image="https://previews.123rf.com/images/colinekot/colinekot2006/colinekot200600004/149733099-hand-with-pointing-finger-cartoon-vector-flat-illustration-isolated-on-white-background.jpg"
          alt="body part pic"
          correct="Fingure"
        />

        <Fun1
          question="Identify the picture"
          option1="Toe"
          option2="Eye"
          option3="Head"
          option4="Nose"
          image="https://t3.ftcdn.net/jpg/01/96/96/60/360_F_196966044_KL85onTyDjRNzVbE424LNoR5hKw3b0km.jpg"
          alt="body part pic"
          correct="Toe"
        />

        <Fun1
          question="Identify the picture"
          option1="Toe"
          option2="Eye"
          option3="Knee"
          option4="Nose"
          image="https://media.istockphoto.com/id/1359278650/vector/color-vector-illustration-of-childrens-activity-coloring-book-pages-with-pictures-of-orange.jpg?s=612x612&w=0&k=20&c=_CT_AIo9J7ZsbtPvI-7xGqnwO7Dlxv5VgzxxGx4w0Ug="
          alt="body part pic"
          correct="Knee"
        />

        <Fun1
          question="Identify the picture"
          option1="Back"
          option2="Eye"
          option3="Knee"
          option4="Nose"
          image="https://static.vecteezy.com/system/resources/thumbnails/014/704/000/small/woman-back-icon-cartoon-style-vector.jpg"
          alt="body part pic"
          correct="Back"
        />
      </div>
    </div>
  );
};

export default Identify_bodypart;
