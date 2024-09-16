import React from "react";
import Fun1 from "../learn_with_fun/fun/Fun1";
import { NavLink } from "react-router-dom";

const Identify_animal = () => {
  return (
    <div>
      <NavLink to="/learn_with_fun" className="button-23">
        Back
      </NavLink>
      <div className="quiz_box">
        <Fun1
          question="Identify the picture"
          option1="Lion"
          option2="Tiger"
          option3="Pigeon"
          option4="Parrot"
          image="https://img.freepik.com/premium-vector/vector-cartoon-happy-lion-vector-illustration-white-background_1023984-12504.jpg"
          alt="Lion pic"
          correct="Lion"
        />
        <Fun1
          question="Identify the picture"
          option1="Cheeta"
          option2="Tiger"
          option3="Lion"
          option4="Parrot"
          image="https://t3.ftcdn.net/jpg/01/18/37/28/360_F_118372873_pZW5X2UaY0jJfGaEiWnBqCqgFKHdH8Jw.jpg"
          alt="Lion pic"
          correct="Tiger"
        />
        <Fun1
          question="Identify the picture"
          option1="Pegion"
          option2="Tiger"
          option3="Lion"
          option4="Elephant"
          image="https://img.freepik.com/free-vector/cute-elephant-cartoon-character_1308-140119.jpg"
          alt="Lion pic"
          correct="Elephant"
        />
        <Fun1
          question="Identify the picture"
          option1="Lion"
          option2="Cheetah"
          option3="Tiger"
          option4="Parrot"
          image="https://www.shutterstock.com/image-vector/cartoon-illustration-baby-cheetah-600nw-2299279317.jpg"
          alt="Lion pic"
          correct="Cheetah"
        />
        <Fun1
          question="Identify the picture"
          option1="Giraffe"
          option2="Tiger"
          option3="Cheetah"
          option4="Parrot"
          image="https://img.freepik.com/free-vector/hand-drawn-cartoon-giraffe-illustration_23-2150368576.jpg"
          alt="Lion pic"
          correct="Giraffe"
        />

        <Fun1
          question="Identify the picture"
          option1="Cat"
          option2="Tiger"
          option3="Goat"
          option4="Dog"
          image="https://img.freepik.com/premium-vector/goat-cartoon-style_119631-178.jpg"
          alt="Lion pic"
          correct="Goat"
        />

        <Fun1
          question="Identify the picture"
          option1="Giraffe"
          option2="Tiger"
          option3="Hippo"
          option4="Parrot"
          image="https://media.istockphoto.com/id/1678526183/vector/cartoon-scene-with-happy-tropical-animal-hippo-hippopotamus-on-white-background-safari.jpg?s=612x612&w=0&k=20&c=RY9cEDJfyo5fic7lE2wOu2shTjSVDla4RfHPPIr4_wc="
          alt="Lion pic"
          correct="Hippo"
        />

        <Fun1
          question="Identify the picture"
          option1="Giraffe"
          option2="Human"
          option3="Hippo"
          option4="Parrot"
          image="https://howtodrawforkids.com/wp-content/uploads/2023/04/how-to-draw-a-cartoon-human.jpg"
          alt="Lion pic"
          correct="Human"
        />

        <Fun1
          question="Identify the picture"
          option1="Cat"
          option2="Tiger"
          option3="Hippo"
          option4="Parrot"
          image="https://img.freepik.com/free-vector/little-cute-cat-cartoon-character_1308-140198.jpg"
          alt="Lion pic"
          correct="Cat"
        />

        <Fun1
          question="Identify the picture"
          option1="Cat"
          option2="Tiger"
          option3="Hippo"
          option4="Dog"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgmuBKOU-05T01BnzpUldZfEEwP9Ccvn_fw&s"
          alt="Lion pic"
          correct="Dog"
        />
      </div>
    </div>
  );
};

export default Identify_animal;
