import { useState } from "react";

const User = (props) => {
  const [count] = useState(1);
  const [count2] = useState(13);

  return (
    <div>
      <h3>{count}</h3>
      <h3>{count2}</h3>
      <h1>
        Name : {props.name} Roll No: {props.roll}
      </h1>
    </div>
  );
};

export default User;
