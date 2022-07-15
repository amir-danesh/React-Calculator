import React, { useState, forwardRef } from "react";
import "./Screen.css";

function Screen(props) {
  return (
    <div className="container">
      <div className="sentence">{props.sentence}</div>
      <div className="result">{props.result}</div>
    </div>
  );
}

export default Screen;
