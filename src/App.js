import React, { useState, useEffect } from "react";
import "./styles.css";
import Paddle from "./components/Paddle";
import Ball from "./components/Ball";
import Net from "./components/Net"
import VerticalLines from "./VerticalLines";
import HorizontalLines from "./components/HorizontalLines";

export default function App() {
  const [p1PaddleY, setP1PaddleY] = useState(0);
  const [p2PaddleY, setP2PaddleY] = useState(0);

  function handleKey(e) {
    const char = e.key.toLowerCase();
    if (char === "w" || char === "s") {
      setP1PaddleY(p1PaddleY + (char === "w" ? -20 : 20));
    }
    if (char === "o" || char === "l") {
      setP2PaddleY(p2PaddleY + (char === "o" ? -20 : 20));
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [p1PaddleY, p2PaddleY]);
  return (
    <div className="container">
      <Paddle paddleY={p1PaddleY} />
      <Paddle isPlayerTwo paddleY={p2PaddleY} />
      <Net />
      <VerticalLines />
      <VerticalLines isVerticalLines />
      <HorizontalLines />
      <Ball />
    </div>
  );
}
