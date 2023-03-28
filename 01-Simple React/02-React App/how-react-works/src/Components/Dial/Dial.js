import React from "react";

const Dial = (props) => {
  return (
    <div style={{ border: "2px solid green" }}>
      <h3>This is dial</h3>
      <p>steps so far: {props.steps}</p>
    </div>
  );
};

export default Dial;
