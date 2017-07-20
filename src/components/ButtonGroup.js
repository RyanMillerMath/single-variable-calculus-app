import React from "react";

import Button from "./Button";

export default function ButtonGroup(props) {
  var buttons = props.values.map((value, index) =>
                                <Button value={value}
                                        key={index}
                                        operation={props.operation}
                                        onClick={props.onClick} />
                                );

  return(
    <div className="button-group">
      {buttons}
    </div>
  );
}