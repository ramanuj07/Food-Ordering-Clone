import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <>
    <h1 id="heading" tabIndex={4}>
      My name is Ramanuj Jindal
    </h1>

    <p>I was a swimmer at one time but now my goals are changed completely</p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
