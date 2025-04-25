import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SetUp from "./setUp";
import Timeline from "./timeline";
import About from "./about";
import FAQ from "./FAQ";
import Contact from "./contactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/set-up" element={<SetUp />}></Route>
        <Route exact path="/timeline" element={<Timeline />}></Route>
        <Route exact path="/about-us" element={<About />}></Route>
        <Route exact path="/faq" element={<FAQ />}></Route>
        <Route exact path="/contact-us" element={<Contact />}></Route>
      </Routes>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
