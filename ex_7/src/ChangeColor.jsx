import { useState, useEffect, useRef } from 'react';

export const ChangeColor = () => {
  const colorRef = useRef(null);
  const handleChangeColor = () => {
    /* Здесь нужно поменять цвет фона у заголовка */
    colorRef.current.style.backgroundColor = "gold";
  };

  return (
    <div className="page">
      <h1 className="header" ref={colorRef}>Я меняю свой цвет</h1>
      <div className="card">
        <button onClick={handleChangeColor}>Изменить цвет</button>
      </div>
    </div>
  );
};