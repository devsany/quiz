import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Overview from "./component/main/Overview";
import Class1Main from "./component/class1/Class1Main";
import Navbar from "./component/navbar/Navbar";
import { useEffect, useState } from "react";
import { setIn } from "formik";
import English from "./component/class1/subject/English";
import Header from "./component/header/Header";
import Level1 from "./component/class1/level/Level1";
import Level2 from "./component/class1/level/Level2";
import Level3 from "./component/class1/level/Level3";
import Level4 from "./component/class1/level/Level4";
import Level5 from "./component/class1/level/Level5";
import Science from "./component/class1/subject/Science";
import Level1Class1Science from "./component/class1/scienceQuizLevel/Level1Class1Science";
import Level2Class1Science from "./component/class1/scienceQuizLevel/Level2Class1Science";
import Level3Class1Science from "./component/class1/scienceQuizLevel/Level3Class1Science";
import Level4Class1Science from "./component/class1/scienceQuizLevel/Level4Class1Science";
import Level5Class1Science from "./component/class1/scienceQuizLevel/Level5Class1Science";
import Math from "./component/class1/subject/Math";
import Level4Class1Math from "./component/class1/mathQuizLevel/Level4Class1Math";
import Level2Class1Math from "./component/class1/mathQuizLevel/Level2Class1Math";
import Level3Class1Math from "./component/class1/mathQuizLevel/Level3Class1Math";
import Level1Class1Math from "./component/class1/mathQuizLevel/Level1Class1Math";
import Level5Class1Math from "./component/class1/mathQuizLevel/Level5Class1Math";
import Learnwithfun from "./component/learn_with_fun/Learnwithfun";
import Identify_animal from "./component/identify_type_quiz/Identify_animal";
import Identify_flower from "./component/identify_type_quiz/Identify_flower";
import Identify_bodypart from "./component/identify_type_quiz/Idebtify_bodypart";
import Math_buz from "./component/identify_type_quiz/Math_buz";
import Identify_vegetable from "./component/identify_type_quiz/Identify_vegetable";
import Identify_weather from "./component/identify_type_quiz/Identify_weather";
import Identify_house from "./component/identify_type_quiz/Identify_house";
import Class2Main from "./component/class2/Class2Main";
import English2 from "./component/class2/subject/English";
import Level1_2 from "./component/class2/level/Level1";
import Level2_2 from "./component/class2/level/Level2";
import Level3_2 from "./component/class2/level/Level3";
import Level5_2 from "./component/class2/level/Level5";
import Level4_2 from "./component/class2/level/Level4";
import Math2 from "./component/class2/subject/Math2";
import Level1Class2Math from "./component/class2/mathQuizLevel/Level1Class1Math";
import Level2Class2Math from "./component/class2/mathQuizLevel/Level2Class1Math";
import Level3Class2Math from "./component/class2/mathQuizLevel/Level3Class1Math";
import Level4Class2Math from "./component/class2/mathQuizLevel/Level4Class1Math";
import Level5Class2Math from "./component/class2/mathQuizLevel/Level5Class1Math";
import Chat from "./component/chat/Chat";
// import Chat1 from "./component/chat/chat_category/chat_with_animal/Chat_with_animals";
import Chat_with_animals from "./component/chat/chat_category/yourself/Chat_with_animals";
import With_animal from "./component/chat/chat_category/animal/With_animal";
import With_bird from "./component/chat/chat_category/Bird/With_bird";
import With_body from "./component/chat/chat_category/body/With_body";
import With_fruit from "./component/chat/chat_category/fruit/With_fruit";
import With_vegetable from "./component/chat/chat_category/vegetable/With_vegetable";
import With_math from "./component/chat/chat_category/math/With_math";
// import With_animal from "./component/chat/chat_category/animal/With_animal";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [standard, setStandard] = useState("");
  // important point 👇🏻
  const [toggle, setToggle] = useState(false);
  // important point  👆🏻
  const [error, setError] = useState({});
  const [message, setMessage] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = {};
    if (!name) {
      error.name = "require";
    } else if (!email) {
      error.email = "require";
    } else if (!standard || standard <= 0) {
      error.standard = "require and Class must be greater then 0";
    } else {
      setToggle(true);
    }
    setError(error);
    setMessage(false);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("standard", standard);
  };
  useEffect(() => {
    const messageShow = setInterval(() => {
      setMessage(false);
    }, 10000);
    return () => {
      clearInterval(messageShow);
    };
  }, []);
  const handleMessageHide = () => {
    setMessage(false);
  };
  return (
    <>
      {message ? (
        <div className="initial_form_message">
          <div onClick={handleMessageHide} className="button-44">
            X
          </div>
          <div>
            <img
              className="form_display_image"
              src="5643120.jpg"
              alt="Good luck"
            />
          </div>
          <div className="below_form_display">
            <div className="Congratulations">Congratulations!</div>
            <div className="first">First Fill the form</div>
            <div className="button-31" onClick={handleSubmit}>
              {" "}
              Yaay!!
            </div>
          </div>
        </div>
      ) : null}
      {!toggle ? (
        <>
          <div className="form_head">
            <div className="form_main">
              <form onSubmit={handleSubmit}>
                <span className="form_header">Fill Form !</span>
                <div>
                  <label className="label" htmlFor="name">
                    Name * <span className="error">{error.name}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label" htmlFor="email">
                    Email * <span className="error">{error.email}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label" htmlFor="class">
                    Class * <span className="error">{error.standard}</span>
                  </label>
                  <input
                    type="number"
                    id="class"
                    name="class"
                    placeholder="Enter your Class"
                    value={standard}
                    onChange={(e) => setStandard(e.target.value)}
                  />
                </div>
                <button className="button-40" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="App">
          <div className="home_layout">
            <div className="nabbar_layout">
              <Navbar />
            </div>
            <div>
              <Header />

              <div className="box_subject">
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/class1" element={<Class1Main />} />
                  {/* class 2  */}
                  <Route path="/class2" element={<Class2Main />} />
                  {/* class 2👆🏻 */}
                  <Route path="/learn_with_fun" element={<Learnwithfun />} />
                  <Route
                    path="/learn_with_fun/identify_animal"
                    element={<Identify_animal />}
                  />
                  <Route
                    path="/learn_with_fun/identify_flower"
                    element={<Identify_flower />}
                  />
                  <Route
                    path="/learn_with_fun/identify_bodypart"
                    element={<Identify_bodypart />}
                  />
                  <Route
                    path="/learn_with_fun/identify_vegetable"
                    element={<Identify_vegetable />}
                  />
                  <Route
                    path="/learn_with_fun/identify_weather"
                    element={<Identify_weather />}
                  />
                  <Route
                    path="/learn_with_fun/identify_house"
                    element={<Identify_house />}
                  />
                  <Route
                    path="/learn_with_fun/math_buz"
                    element={<Math_buz />}
                  />
                  <Route path="/class1/english" element={<English />} />
                  <Route path="/class2/english" element={<English2 />} />
                  <Route
                    path="/class1/english/english_level1"
                    element={<Level1 />}
                  />
                  <Route
                    path="/class2/english/english2_level1"
                    element={<Level1_2 />}
                  />
                  <Route
                    path="/class1/english/english_level2"
                    element={<Level2 />}
                  />
                  <Route
                    path="/class2/english/english_level2"
                    element={<Level2_2 />}
                  />
                  <Route
                    path="/class1/english/english_level3"
                    element={<Level3 />}
                  />
                  <Route
                    path="/class2/english/english_level3"
                    element={<Level3_2 />}
                  />
                  <Route
                    path="/class1/english/english_level4"
                    element={<Level4 />}
                  />
                  <Route
                    path="/class2/english/english_level4"
                    element={<Level4_2 />}
                  />
                  <Route
                    path="/class1/english/english_level5"
                    element={<Level5 />}
                  />
                  <Route
                    path="/class2/english/english_level5"
                    element={<Level5_2 />}
                  />
                  {/* science class 1 start */}
                  <Route path="/class1/science" element={<Science />} />
                  <Route
                    path="/class1/science/science_level1"
                    element={<Level1Class1Science />}
                  />
                  <Route
                    path="/class1/science/science_level2"
                    element={<Level2Class1Science />}
                  />
                  <Route
                    path="/class1/science/science_level3"
                    element={<Level3Class1Science />}
                  />
                  <Route
                    path="/class1/science/science_level4"
                    element={<Level4Class1Science />}
                  />
                  <Route
                    path="/class1/science/science_level5"
                    element={<Level5Class1Science />}
                  />
                  {/* science class 1 end */}
                  {/* math class 1 start  */}
                  <Route path="/class1/math" element={<Math />} />
                  <Route
                    path="/class1/math/math_level1"
                    element={<Level1Class1Math />}
                  />
                  <Route
                    path="/class1/math/math_level2"
                    element={<Level2Class1Math />}
                  />
                  <Route
                    path="/class1/math/math_level3"
                    element={<Level3Class1Math />}
                  />
                  <Route
                    path="/class1/math/math_level4"
                    element={<Level4Class1Math />}
                  />
                  <Route
                    path="/class1/math/math_level5"
                    element={<Level5Class1Math />}
                  />
                  {/* math class 1 end */}
                  {/* math class 2 start */}
                  <Route path="/class2/math" element={<Math2 />} />
                  <Route
                    path="/class2/math/math_level1"
                    element={<Level1Class2Math />}
                  />
                  <Route
                    path="/class2/math/math_level2"
                    element={<Level2Class2Math />}
                  />
                  <Route
                    path="/class2/math/math_level3"
                    element={<Level3Class2Math />}
                  />
                  <Route
                    path="/class2/math/math_level4"
                    element={<Level4Class2Math />}
                  />
                  <Route
                    path="/class2/math/math_level5"
                    element={<Level5Class2Math />}
                  />
                  {/* maths class 2 end */}
                  {/* chat  route */}
                  <Route path="/chat_quiz" element={<Chat />} />
                  <Route
                    path="/chat_quiz/chat_with_animals"
                    element={<Chat_with_animals />}
                  />
                  <Route path="/chat_quiz/animal" element={<With_animal />} />
                  <Route path="/chat_quiz/bird" element={<With_bird />} />
                  <Route path="/chat_quiz/body" element={<With_body />} />
                  <Route path="/chat_quiz/fruit" element={<With_fruit />} />
                  <Route path="/chat_quiz/math" element={<With_math />} />
                  <Route
                    path="/chat_quiz/vegetable"
                    element={<With_vegetable />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
