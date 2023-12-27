import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" tabIndex={4}>
    My name is Ramanuj Jindal
  </h1>
);

const anyNumber = 10010010;

// Functional component
const HeadingComponent = () => (
  <>
    <h1 className="heading">Heyyy Functional Component beauty</h1>
    <Title />
    {anyNumber}
  </>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<HeadingComponent />);
