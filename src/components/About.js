import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor Parent");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Render Parent");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is the About us page of my website</h2>
        <UserClass name={"Ramanuj Jindal"} class={"BE-IT 3rd year"} />
        <UserClass name={"Sahil Singla"} class={"BE-EEE 4th year"} />
      </div>
    );
  }
}

export default About;
