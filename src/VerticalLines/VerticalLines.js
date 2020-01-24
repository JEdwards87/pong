import React from "react";
import "./VerticalLines.css";

export default function VerticalLines({ isVerticalLines}) {
  return (
    <div className={isVerticalLines ? "vertical-lines L2" : "vertical-lines"} />
  );
}