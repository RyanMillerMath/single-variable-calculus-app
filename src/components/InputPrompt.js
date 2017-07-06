import React from "react";

import LabelledInput from "./LabelledInput";
import ButtonGroup from "./ButtonGroup";

export default function InputPrompt(props){
  return (
    <div>
      <LabelledInput onChange={props.onChange} />

      <ButtonGroup values={["Differentiate", "Integrate"]}
                   type="calc"
                   onClick={props.onClick} />
    </div>
  )
}