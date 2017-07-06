import React from "react";

export default function LabelledInput(props) {
  return(
    <div>
      <span className="input-label">Please type in a function:</span>
      <input onChange={props.onChange} />
    </div>
  );
}