import React from "react";
import Fun1 from "../learn_with_fun/fun/Fun1";
import { NavLink } from "react-router-dom";

const Identify_flower = () => {
  return (
    <div>
      <NavLink to="/learn_with_fun" className="button-23">
        Back
      </NavLink>
      <div className="quiz_box">
        <Fun1
          question="Identify the picture"
          option1="Lotus"
          option2="Cosmos"
          option3="Sunflower"
          option4="Marigold"
          image="https://img.freepik.com/free-vector/pink-lotus-flower_24877-82258.jpg"
          alt="flower pic"
          correct="Lotus"
        />
        <Fun1
          question="Identify the picture"
          option1="Lotus"
          option2="Cosmos"
          option3="Sunflower"
          option4="Marigold"
          image="https://easydrawingguides.com/wp-content/uploads/2023/09/how-to-draw-a-cosmos-flower-featured-image-1200.png"
          alt="flower pic"
          correct="Cosmos"
        />
        <Fun1
          question="Identify the picture"
          option1="Lotus"
          option2="Cosmos"
          option3="Sunflower"
          option4="Marigold"
          image="https://static.vecteezy.com/system/resources/previews/043/340/229/original/3d-blooming-sunflower-flower-cartoon-vector.jpg"
          alt="flower pic"
          correct="Sunflower"
        />
        <Fun1
          question="Identify the picture"
          option1="Lotus"
          option2="Cosmos"
          option3="Sunflower"
          option4="Marigold"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRBPjkjcNDg8Ju51ezhRW3rIda53jTSFgHQ&s"
          alt="flower pic"
          correct="Marigold"
        />
        <Fun1
          question="Identify the picture"
          option1="Lotus"
          option2="Cosmos"
          option3="Iris"
          option4="Marigold"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUwa1vUxzYcHkdLt0jlG4emF3hgMxrN1Q0Q&s"
          alt="flower pic"
          correct="Iris"
        />

        <Fun1
          question="Identify the picture"
          option1="Lotus"
          option2="Cosmos"
          option3="Iris"
          option4="Lantana"
          image="https://img.freepik.com/premium-vector/lantana-flower-isolated-white-background-hand-drawn-vector-illustration_852896-424.jpg"
          alt="flower pic"
          correct="Lantana"
        />

        <Fun1
          question="Identify the picture"
          option1="Rose"
          option2="Cosmos"
          option3="Iris"
          option4="Lantana"
          image="https://media.istockphoto.com/id/1336400836/vector/cartoon-rose-vector-illustration-on-white-background.jpg?s=612x612&w=0&k=20&c=z45BOeHFon9XKJpenjgPIKrSeFcWbMMLRhOHM0KuiQg="
          alt="flower pic"
          correct="Rose"
        />

        <Fun1
          question="Identify the picture"
          option1="Rose"
          option2="Cosmos"
          option3="Iris"
          option4="Daisy"
          image="https://media.istockphoto.com/id/1229988064/vector/chamomile-flower-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=o3ezuP05YMVbSY4vnpraT5-QBw07oD58uQkTZYlo57o="
          alt="flower pic"
          correct="Daisy"
        />

        <Fun1
          question="Identify the picture"
          option1="Tulip"
          option2="Cosmos"
          option3="Iris"
          option4="Daisy"
          image="https://media.istockphoto.com/id/1469080018/vector/pink-tulip-flower-vector-isolated-illustration.jpg?s=612x612&w=0&k=20&c=BSQNjIq59l8t1s_Fta563HREa-ujadTVeMbRB5cp3O8="
          alt="flower pic"
          correct="Tulip"
        />

        <Fun1
          question="Identify the picture"
          option1="Rose"
          option2="Lavinder"
          option3="Iris"
          option4="Daisy"
          image="https://media.istockphoto.com/id/1014893042/vector/lavender-flowers-vector-isolated-illustration.jpg?s=612x612&w=0&k=20&c=ffVqtSzNghatxZ9je5NkZ2xnlk79x8aZzdkdHSBbLAo="
          alt="Flower pic"
          correct="Lavinder"
        />
      </div>
    </div>
  );
};

export default Identify_flower;
