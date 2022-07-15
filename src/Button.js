import React from "react";
import "./Button.css";

function Button(props) {
  let classes = "";
  if (props.makeorange) {
    classes += "makeorange";
  } else if (props.makegray) {
    classes += "makegray";
  }
  if (props.rowspan) {
    classes += " rowspan2";
  } else if (props.colspan) {
    classes += " colspan2";
  }
  const button = (
    <button
      className={classes}
      name={props.name}
      onClick={()=>{props.onClick(props.value);}}
    >
      {props.value}
    </button>
  );
  return button;
}

export default Button;
