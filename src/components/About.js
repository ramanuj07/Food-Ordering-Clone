import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>
//         This is the about us page of my website created using react-router-dom
//       </h2>
//       <User name={"RJ"} roll={"80"} />
//       <UserClass name={"Ramanuj Jindal"} class={"BE-IT 3rd year"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor Parent");
  }

  render() {
    console.log("Render Parent");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is the About us page of my website</h2>
        <UserClass name={"Ramanuj Jindal"} class={"BE-IT 3rd year"} />
      </div>
    );
  }
}

export default About;
