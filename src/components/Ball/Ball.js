import React, { useEffect, useState } from "react";
import "./Ball.css";

export default function Ball() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [delta, setDelta] = useState({ x: 10, y: 10 });
  useEffect(() => {
    const handle = setTimeout(() => {
      let dx = delta.x;
      let dy = delta.y;
      if (pos.x + delta.x > 780 - 20 || pos.x + delta.x < 0) {
        dx = -dx;
      }
      if (pos.y + delta.y > 360 - 20 || pos.y + delta.y < 0) {
        dy = -dy;
      }
      setDelta({ x: dx, y: dy });
      setPos({ x: pos.x + delta.x, y: pos.y + delta.y });
    }, 40);
    return () => clearTimeout(handle);
  }, [pos, delta]);

  return (
    <div
      className="ball"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`
      }}
    />
  );
}
