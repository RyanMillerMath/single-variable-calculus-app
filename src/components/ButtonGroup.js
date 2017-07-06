import React from "react";

import Button from "./Button";

export default function ButtonGroup(props) {
  var buttons = props.values.map((value, index) =>
                                <Button value={value}
                                        key={index}
                                        type={props.type}
                                        onClick={props.onClick} />
                                );

  return(
    <div className="button-group">
      {buttons}
    </div>
  );
}