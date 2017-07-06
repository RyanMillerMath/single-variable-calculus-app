import React from "react";

export default function Button(props) {
  let className = "button";

  if(props.type) {
    className += " " + props.type + "-button";
  }

  return(
    <button className={className}
            data-type={props.type}
            onClick={props.onClick}>

      {props.value}
    </button>
  );
}