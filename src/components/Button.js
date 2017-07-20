import React from "react";

export default function Button(props) {
  let className = "button";

  if(props.operation) {
    className += " " + props.operation + "-button";
  }

  return(
    <button className={className}
            data-operation={props.operation}
            onClick={props.onClick}>

      {props.value}
    </button>
  );
}