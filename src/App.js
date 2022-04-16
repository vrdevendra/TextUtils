import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import ContactUs from "./component/ContactUs";
import AboutUs from "./component/AboutUs";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setThemeMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
      <Navbar
                title="Home"
                aboutUs="About Us"
                contactUs="Contact Us"
                textForm = "Text Utils"
                themeMode={themeMode}
                toggleThemeMode={toggleThemeMode}
              />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/TextForm" element={<TextForm />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar
        title="English"
        practice="Practice Questions"
        aboutUs="About Us"
        themeMode={themeMode}
        toggleThemeMode={toggleThemeMode}
      />
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes exact path="/about">
            <About />
          </Routes>
          <Routes path="/">
          <TextForm heading="Enter text here for analysis" />
          </Routes>
      </div> */}
    </>
  );
}

export default App;
