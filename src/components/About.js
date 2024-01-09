import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-4 m-4 border border-solid w-[25rem] mx-auto text-center">
        <h1 className="pb-4 font-bold">About Us</h1>
        <h2>This is the About us page of my website</h2>
        <UserClass name={"Ramanuj Jindal"} class={"BE-IT"} />
        <h3>
          Made using <span className="font-bold">Class based components</span>
        </h3>
      </div>
    );
  }
}

export default About;
