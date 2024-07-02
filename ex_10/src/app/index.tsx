import "./styles.css";
import React from "react";
import { useState, useRef, useLayoutEffect } from "react";

export function App() {
  const [count, setCount] = useState<number>(0)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const updateColor = () => {
    if (buttonRef.current) {
      buttonRef.current.style.color = count % 2 ? "lightgreen" : "chocolate";
    }
  }

  const handleClick = () => {
    updateColor();
    setCount(count + 1)
  };

  useLayoutEffect(() => {
    buttonRef.current?.focus();
    updateColor();
  }, [count])

 
    return (
      <div className="page">
        <div className="card">
          <button
            className="button"
            ref={buttonRef}
            onClick={handleClick}
          >
            Счётчик: {count}
          </button>
        </div>
      </div>
    );
}
