import React from "react";
import classes from "./BuildControl.module.css";
export default function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.subtracted}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
}
