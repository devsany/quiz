import { Route, Routes } from "react-router-dom";
import "./App.css";
import Overview from "./component/main/Overview";
import Class1Main from "./component/class1/Class1Main";
import Navbar from "./component/navbar/Navbar";
import { useEffect, useState } from "react";
import { setIn } from "formik";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [standard, setStandard] = useState("");
  const [toggle, setToggle] = useState(false);
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
              src=" 5643120.jpg"
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
                    placeholder="Enter your name address"
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
                    placeholder="Enter your Email address"
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
                <button className="buttonMain" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="App">
          <div>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/class1" element={<Class1Main />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
