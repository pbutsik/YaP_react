import './clock.css';
import { useState, useEffect } from 'react';


export const MyClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = value.getHours();
  const minutes = value.getMinutes();
  const seconds = value.getSeconds();

  // Format the time as a string
  const timeString = `${hours}:${minutes}:${seconds}`;
  return (
    <div>
      <h1 className='clock'>{timeString}</h1>
    </div>
  );
};