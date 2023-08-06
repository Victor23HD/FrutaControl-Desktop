import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/login/index";
import Home from "./pages/home/index.js";
import "./others/style.css";
import reportWebVitals from "./others/reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

document.title = "FrutaControl";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
         {/*HomeRoute*/}
         <Route
         path="/Home"
         element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
