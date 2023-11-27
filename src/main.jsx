import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//importing react, importing css of the index, importing the app where all the info comes from

ReactDOM.createRoot(document.getElementById("root")).render(
  //this means that the root of the app is gonna be printed and rendered inside the doccument as a react element? if it would say null nothing would appear
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
