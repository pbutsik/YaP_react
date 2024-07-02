import './Counter.css';
import {useState} from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((itemCount) => itemCount + 1)
  }
  return (
    <div className='page'>
      <div className='card'>
        <button className='button' onClick={increment}>Счётчик: {count}</button>
      </div>
    </div>
  );
};